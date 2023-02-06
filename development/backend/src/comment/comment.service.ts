import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

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
      orderBy: {
        createdAt: 'desc',
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
        CommentImg: {
          where: {
            isDeleted: false,
          },
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
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        map: {
          select: {
            chiName: true,
          },
        },
        CommentImg: {
          where: {
            isDeleted: false,
          },
          select: {
            name: true,
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
        CommentImg: {
          where: {
            isDeleted: false,
          },
          select: {
            name: true,
          },
        },
      },
    });
    return commentData;
  }

  async getUserCommentsFiles(commentId: number) {
    return await this.prismaService.comment.findUnique({
      where: {
        id: commentId,
      },
      include: {
        CommentImg: {
          where: {
            isDeleted: false,
          },
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async createComment(
    userId: number,
    commentDto: CreateCommentDto,
    arrayOfFileNames: string[],
  ) {
    console.log('check filenames', arrayOfFileNames);

    const fieldFiles = arrayOfFileNames.map((filename) => ({
      name: filename,
      isDeleted: false,
    }));

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
    files: Express.Multer.File[],
  ) {
    console.log(commentDto);

    const selectedComment = await this.prismaService.comment.findUnique({
      where: {
        id: commentId,
      },
    });

    if (!selectedComment || selectedComment.userId !== userId) {
      throw new ForbiddenException('Failed to update comment');
    }

    const fieldFiles = files.map((file) => ({
      name: file.filename,
      isDeleted: false,
    }));

    console.log('file', fieldFiles);

    return this.prismaService.comment.update({
      where: {
        id: commentId,
      },
      data: {
        ...commentDto,
        CommentImg: { createMany: { data: fieldFiles } },
      },
    });
  }

  async deleteImageById(userId: number, imgId: number) {
    const selectedComment = this.prismaService.comment.findMany({
      where: {
        userId: userId,
      },
    });

    const deleteImage = this.prismaService.commentImg.delete({
      where: { id: imgId },
    });

    return this.prismaService.$transaction([selectedComment, deleteImage]);
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
