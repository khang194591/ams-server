import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../modules/database/database.service';
import { RoleDto } from './role.dto';

@Injectable()
export class RoleService {
  constructor(private readonly prisma: DatabaseService) {}

  private readonly repository = this.prisma.role;

  async create(data: RoleDto) {
    try {
      return this.repository.create({ data });
    } catch (error) {
      throw error;
    }
  }

  async find() {
    try {
      return this.repository.findMany();
    } catch (error) {
      throw error;
    }
  }

  async findById(id: number) {
    try {
      const item = await this.repository.findUniqueOrThrow({
        where: { id },
        include: {
          _count: {
            select: {
              users: true,
            },
          },
        },
      });
      return item;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, data: RoleDto) {
    try {
      return await this.repository.updateMany({ where: { id }, data });
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number) {
    try {
      return await this.repository.deleteMany({ where: { id } });
    } catch (error) {
      throw error;
    }
  }
}
