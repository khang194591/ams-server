import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { baseBulkSchema } from '../../constants/base';
import { PaginatedDto } from '../../interfaces/base.dto';
import { YupValidationPipe, partial } from '../../pipes/yup.pipe';
import { UserDto, UserQueryParamsDto, UserResponseDto } from './user.dto';
import { querySchema, userBulkSchema, userSchema } from './user.schema';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body(new YupValidationPipe(userSchema)) body: UserDto) {
    try {
      return this.userService.create(body);
    } catch (error) {
      throw error;
    }
  }

  @Post('bulk')
  createBulk(
    @Body(new YupValidationPipe(userBulkSchema)) body: PaginatedDto<UserDto>,
  ) {
    try {
      return this.userService.createBulk(body.items);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  findAll(
    @Query(new YupValidationPipe(querySchema)) queryParams: UserQueryParamsDto,
  ) {
    try {
      return this.userService.findAll(queryParams);
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string) {
    try {
      return await this.userService.findById(+id);
    } catch (error) {
      throw error;
    }
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body(new YupValidationPipe(partial(userSchema))) data: UserResponseDto,
  ) {
    try {
      return this.userService.update(+id, data);
    } catch (error) {
      throw error;
    }
  }

  @Delete('bulk')
  deleteBulk(@Body(new YupValidationPipe(baseBulkSchema)) items: number[]) {
    try {
      return this.userService.deleteBulk(items);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    try {
      return this.userService.delete(+id);
    } catch (error) {
      throw error;
    }
  }
}
