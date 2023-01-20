import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Comment, Prisma } from '@prisma/client';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { stringify } from 'querystring';

@Injectable()
export class CommentService {
  constructor(private readonly prismaService: PrismaService) {}

  async getComment() {
    const commentData = await this.prismaService.comment.findMany({
      include: {
        user: {
          select: {
            username: true,
          },
        },
      },
    });
    return commentData;
  }

  async getUserComment(userId: number) {
    const userCommentData = await this.prismaService.comment.findMany({
      where: {
        userId: userId,
      },
      include: {
        user: {
          select: {
            username: true,
          },
        },
      },
    });
    return userCommentData;
  }

  async createComment(
    userId: number,
    commentDto: CreateCommentDto,
    files: Express.Multer.File[],
  ) {
    // const file = files.map(file => file)
    const insertResult = await this.prismaService.comment.create({
      data: {
        userId: userId,
        ...commentDto,
        CommentImg: {
          createMany: {
            data: [
            
            ],
          },
        },
      },
    });
  }

  async editCommentById(
    userId: number,
    commentId: number,
    commentDto: UpdateCommentDto,
  ) {
    const selectedComment = await this.prismaService.comment.findUnique({
      where: {
        id: commentId,
      },
    });

    if (!selectedComment || selectedComment.userId !== userId) {
      throw new ForbiddenException('Failed to update comment');
    }

    return this.prismaService.comment.update({
      where: {
        id: commentId,
      },
      data: {
        ...commentDto,
      },
    });
  }
}
