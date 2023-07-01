import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../modules/database/database.service';
import { parseQueryString } from '../../utils';
import { UserDto, UserQueryParamsDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: DatabaseService) {}

  private readonly repository = this.prisma.user;

  async create(data: UserDto) {
    try {
      return this.repository.create({ data });
    } catch (error) {
      throw error;
    }
  }

  async createBulk(data: UserDto[]) {
    try {
      return this.repository.createMany({ data });
    } catch (error) {
      throw error;
    }
  }

  async findAll(queryString: UserQueryParamsDto) {
    try {
      const { orderBy, where, take, skip } = parseQueryString(queryString);
      const keyword = queryString.keyword?.split(' ').join(' & ');
      if (keyword) {
        where['OR'] = [
          {
            lastName: { search: keyword },
            firstName: { search: keyword },
          },
        ];
      }
      const total = await this.repository.count({ where });
      const totalPage = Math.ceil(total / take);
      const items = await this.repository.findMany({
        orderBy,
        where,
        take,
        skip,
        include: { role: { select: { title: true } } },
      });
      return {
        total,
        totalPage,
        items,
      };
    } catch (error) {
      throw error;
    }
  }

  async findById(id: number) {
    try {
      const item = await this.repository.findUniqueOrThrow({
        where: { id },
        include: { role: true },
      });
      return item;
    } catch (error) {
      throw error;
    }
  }

  async findByEmail(email: string) {
    try {
      return this.repository.findUnique({
        where: { email },
      });
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, data: UserDto) {
    try {
      return await this.repository.update({ where: { id }, data });
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number) {
    try {
      return await this.repository.delete({ where: { id } });
    } catch (error) {
      throw error;
    }
  }

  async deleteBulk(items: number[]) {
    try {
      console.log(items);

      return await this.repository.deleteMany({
        where: {
          id: {
            in: items,
          },
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
