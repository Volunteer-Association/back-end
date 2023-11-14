/*
 * @Author: chenguihui
 * @Date: 2023-07-04 01:20:37
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-07-08 00:54:10
 * @Description: 头部注释
 * @filePath: Do not edit
 */
import {
  Controller,
  Get,
  Query,
  Post,
  UseInterceptors,
  UploadedFiles,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiBody,
  ApiConsumes,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Parameter, SystemResource, FilesUploadDto } from './create-app.dto';

@ApiBearerAuth()
@ApiTags('cats')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('system')
  @ApiOperation({ summary: "获取系统信息" })
  @ApiResponse({ status: 200, description: '响应体' })
  getSystemResource(@Query() option: Parameter): SystemResource {
    return this.appService.getSystemResource(option);
  }

  @Post('upload')
  @UseInterceptors(FilesInterceptor('files'))
  @ApiOperation({ summary: '文件上传' })
  @ApiResponse({ status: 200, description: '响应体' })
  @ApiConsumes('application/octet-stream', 'multipart/form-data')
  @ApiBody({
    description: '请选择文件',
    type: FilesUploadDto,
  })
  uploadFile(@UploadedFiles() files: Array<Express.Multer.File>): string {
    return this.appService.uploadFile(files);
  }

  @Get("/audio")
  getUserAudio(@Query() value: string): string {
    return this.appService.getUserAudio(value)
  }
}
