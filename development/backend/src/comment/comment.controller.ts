import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Param,
  Patch,
  ParseIntPipe,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { GetUser } from 'src/auth/decorator';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { FilesInterceptor } from '@nestjs/platform-express/multer';
import { extname } from 'path';
import { v4 as uuid } from 'uuid';
import { S3uploadService } from 'src/s3upload/s3upload.service';

@Controller('comment')
export class CommentController {
  constructor(
    private readonly commentService: CommentService,
    private readonly s3uploadService: S3uploadService,
  ) {}

  @Get('map')
  async getMap() {
    const result = await this.commentService.getMap();
    return result;
  }

  @Get()
  async getComment() {
    const result = await this.commentService.getComment();
    return result;
  }

  @Get('myComment')
  @UseGuards(JwtGuard)
  async getUserCommentByUserId(@GetUser('id') userId: number) {
    const result = await this.commentService.getUserCommentByUserId(userId);
    return result;
  }

  @Get('/:id')
  async getCommentDetailById(@Param('id', ParseIntPipe) commentId: number) {
    const result = await this.commentService.getCommentDetailById(commentId);
    return result;
  }

  @Get('files/:id')
  async getUserCommentsFiles(@Param('id', ParseIntPipe) commentId: number) {
    const result = await this.commentService.getUserCommentsFiles(commentId);
    return result;
  }

  @Post('create')
  @UseGuards(JwtGuard)
  @UseInterceptors(FilesInterceptor('files'))
  async createComment(
    @GetUser('id') userId: number,
    @Body() commentDto: CreateCommentDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    const arrayOfFileNames = [];
    for (const file of files) {
      const filename = `${uuid()}${extname(file.originalname)}`;
      arrayOfFileNames.push(filename);
      await this.s3uploadService.upload(file, filename);
    }

    await this.commentService.createComment(
      userId,
      commentDto,
      arrayOfFileNames,
    );
  }

  @Patch('update/:id')
  @UseGuards(JwtGuard)
  @UseInterceptors(FilesInterceptor('files'))
  async editCommentById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) commentId: number,
    @Body() commentDto: UpdateCommentDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    const arrayOfFileNames = [];
    for (const file of files) {
      const filename = `${uuid()}${extname(file.originalname)}`;
      arrayOfFileNames.push(filename);
      await this.s3uploadService.upload(file, filename);
    }
    return await this.commentService.editCommentById(
      userId,
      commentId,
      commentDto,
      arrayOfFileNames,
    );
  }

  @Delete('deleteImg/:id')
  @UseGuards(JwtGuard)
  async deleteImageById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) imgId: number,
  ) {
    return this.commentService.deleteImageById(userId, imgId);
  }

  @Delete('delete/:id')
  @UseGuards(JwtGuard)
  async deleteCommentById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) commentId: number,
  ) {
    return this.commentService.deleteCommentById(userId, commentId);
  }
}
