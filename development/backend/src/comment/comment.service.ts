import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CommentDto } from './dto/comment.dto';

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

  async createComment(userId: number,commentDto:CommentDto) {
    const insertResult = await this.prismaService.comment.create({
        data: {
            userId: userId,
            mapId:commentDto.mapId,
            title:commentDto.title,
            content:commentDto.content,
            isThumb:commentDto.is_thumb
        }
    })
  }
}
