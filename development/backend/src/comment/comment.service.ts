import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Comment, Prisma } from '@prisma/client';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { stringify } from 'querystring';

@Injectable()
export class CommentService {
  constructor(private readonly prismaService: PrismaService) {}

  async getMap() {
    const mapData = await this.prismaService.maps.findMany({
      select: {
        id: true,
        chiName: true,
      },
    });
    return mapData;
  }

  async getComment() {
    const commentData = await this.prismaService.comment.findMany({
      include: {
        user: {
          select: {
            username: true,
          },
        },
        map: {
          select: {
            chiName: true,
          },
        },
        CommentImg: {
          select: {
            name: true,
          },
        },
      },
    });
    return commentData;
  }

  async getUserCommentByUserId(userId: number) {
    const userCommentData = await this.prismaService.comment.findMany({
      where: {
        userId: userId,
      },
      include: {
        map: {
          select: {
            chiName: true,
          },
        },
      },
    });
    return userCommentData;
  }

  async getCommentDetailById(commentId: number) {
    const commentData = await this.prismaService.comment.findUnique({
      where: {
        id: commentId,
      },
      include: {
        user: {
          select: {
            username: true,
          },
        },
        map: {
          select: {
            chiName: true,
          },
        },
      },
    });
    return commentData;
  }

  async createComment(
    userId: number,
    commentDto: CreateCommentDto,
    files: Express.Multer.File[],
  ) {
    console.log('check files', files, 'length:', files.length);

    const fieldFiles = files.map((file) => ({ name: file.filename }));
    console.log('file', fieldFiles);

    const insertResult = await this.prismaService.comment.create({
      data: {
        userId: userId,
        ...commentDto,
        CommentImg: { createMany: { data: fieldFiles } },
      },
    });
    return insertResult;
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
        id: commentId,
      },
    });
  }

  async deleteCommentById(userId: number, commentId: number) {
    const selectedComment = await this.prismaService.comment.findUnique({
      where: {
        id: commentId,
      },
    });
    if (!selectedComment || selectedComment.userId !== userId) {
      throw new ForbiddenException('Failed to delete comment');
    }

    const deleteImgs = this.prismaService.commentImg.deleteMany({
      where: { commentId: commentId },
    });

    const deleteComment = this.prismaService.comment.delete({
      where: { id: commentId },
    });

    return this.prismaService.$transaction([deleteImgs, deleteComment]);
  }
}
