import { data as bankList } from '../../data/bank.json';
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../modules/database/database.service';

@Injectable()
export class CommonService {
  constructor(private readonly prisma: DatabaseService) {}

  async getUsers() {
    try {
      const total = await this.prisma.user.count({ where: {} });
      const items = await this.prisma.user.findMany({
        where: {},
        select: { id: true, fullName: true },
      });
      return { total, items };
    } catch (error) {
      throw error;
    }
  }

  async getRoles() {
    try {
      const total = await this.prisma.role.count();
      const items = await this.prisma.role.findMany({
        select: { id: true, title: true },
      });
      return { total, items };
    } catch (error) {
      throw error;
    }
  }

  async getBanks() {
    return { total: bankList.length, items: bankList };
  }

  //   async getProvinces() {
  //     return {
  //       total: provinceList.length,
  //       items: provinceList.map((item) => item.name),
  //     };
  //   }

  //   async getDistricts(name: string) {
  //     const districts = provinceList.find((item) => item.name === name).districts;
  //     return {
  //       total: districts.length,
  //       items: districts.map((item) => item.name),
  //     };
  //   }

  //   async getWards(provinceName: string, districtName: string) {
  //     const wards = provinceList
  //       .find((item) => item.name === provinceName)
  //       .districts.find((item) => item.name === districtName).wards;
  //     return { total: wards.length, items: wards.map((item) => item.name) };
  //   }

  //   async uploadFile(file: Express.Multer.File) {
  //     try {
  //       const mimetype = file.mimetype;
  //       const buffer = Buffer.from(file.buffer).toString('base64');
  //       const fileId = (
  //         await this.prisma.file.create({ data: { buffer, mimetype } })
  //       ).id;
  //       return fileId;
  //     } catch (error) {
  //       console.log(error);
  //       throw error;
  //     }
  //   }

  //   async getImageById(id: number) {
  //     try {
  //       const file = await this.prisma.file.findUnique({ where: { id } });
  //       return file;
  //     } catch (error) {
  //       throw error;
  //     }
  //   }
}
