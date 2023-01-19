import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { CommentService } from './comment.service';
import { CommentDto } from './dto/comment.dto';
import { GetUser } from 'src/auth/decorator';

@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService) {}

    @Get()
    async getComment(){
        return await this.commentService.getComment()
    }

    @Post('create')
    @UseGuards(JwtGuard)
    async createComment(@GetUser('id') userId: number,@Body() commentDto:CommentDto){
        console.log("userId",userId);
        return await this.commentService.createComment(userId,commentDto);
    }
}
