import { Body, Controller, Get, Post } from '@nestjs/common';
import { Prisma, Post as PostModel } from '@prisma/client';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getPosts(): Promise<PostModel[]> {
    return this.postService.getPosts();
  }

  @Post()
  async createPost(@Body() data: Prisma.PostCreateInput): Promise<PostModel> {
    return this.postService.createPost(data);
  }
}
