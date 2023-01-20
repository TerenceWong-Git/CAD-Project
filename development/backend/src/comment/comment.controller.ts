import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Put,
  Param,
  Patch,
  ParseIntPipe,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { GetUser } from 'src/auth/decorator';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async getComment() {
    return await this.commentService.getComment();
  }

  @Post()
  @UseGuards(JwtGuard)
  async createComment(
    @GetUser('id') userId: number,
    @Body() commentDto: CreateCommentDto,
  ) {
    const result = await this.commentService.createComment(userId, commentDto);
    return result;
  }

  @Patch(':commentId')
  @UseGuards(JwtGuard)
  async editCommentById(
    @GetUser('id') userId: number,
    @Param('id') commentId: number,
    @Body() commentDto: UpdateCommentDto,
  ) {
    const result = await this.commentService.editCommentById(
      userId,
      commentId,
      commentDto,
    );
    return result;
  }
}
