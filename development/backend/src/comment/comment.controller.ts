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
  Delete,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { GetUser } from 'src/auth/decorator';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { FilesInterceptor } from '@nestjs/platform-express/multer';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get('/map')
  async getMap() {
    const result = await this.commentService.getMap();
    return result;
  }

  @Get()
  async getComment() {
    const result = await this.commentService.getComment();
    return result;
  }

  @Get('/:id')
  async getCommentDetailById(@Param('id', ParseIntPipe) commentId: number) {
    const result = await this.commentService.getCommentDetailById(commentId);
    return result;
  }

  @Get('myComment')
  @UseGuards(JwtGuard)
  async getUserComment(@GetUser('id') userId: number) {
    const result = await this.commentService.getUserComment(userId);
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
    console.log('controller inspect', files);
    return await this.commentService.createComment(userId, commentDto, files);
  }

  //   @UseInterceptors(FileFieldsInterceptor([
  //     {name:'images',maxCount:2}
  //   ]))
  //   @Post('create')
  //   async createComment(@UploadedFiles() files:{images?:Express.Multer.File[]}) {
  //     console.log('check multer ', files);
  //     // await this.commentService.createComment(userId, commentDto, files);
  //     return { message: 'success' };
  //   }

  @Patch('update/:id')
  @UseGuards(JwtGuard)
  async editCommentById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) commentId: number,
    @Body() commentDto: UpdateCommentDto,
  ) {
    return await this.commentService.editCommentById(
      userId,
      commentId,
      commentDto,
    );
  }
}
