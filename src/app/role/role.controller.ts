import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { YupValidationPipe, partial } from '../../pipes/yup.pipe';
import { RoleDto, RoleResponseDto } from './role.dto';
import { roleSchema } from './role.schema';
import { RoleService } from './role.service';

@Controller('role')
@ApiTags('Role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  create(@Body(new YupValidationPipe(roleSchema)) body: RoleDto) {
    try {
      return this.roleService.create(body);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  find() {
    try {
      return this.roleService.find();
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string) {
    try {
      return await this.roleService.findById(+id);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body(new YupValidationPipe(partial(roleSchema))) data: RoleResponseDto,
  ) {
    try {
      return this.roleService.update(+id, data);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    try {
      return this.roleService.delete(+id);
    } catch (error) {
      throw error;
    }
  }
}
