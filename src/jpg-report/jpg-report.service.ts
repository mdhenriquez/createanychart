import { Injectable } from '@nestjs/common';
import { CreateJpgReportDto } from './dto/create-jpg-report.dto';
import { UpdateJpgReportDto } from './dto/update-jpg-report.dto';

@Injectable()
export class JpgReportService {
  create(createJpgReportDto: CreateJpgReportDto) {
    return 'This action adds a new jpgReport';
  }

  findAll() {
    return `This action returns all jpgReport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jpgReport`;
  }

  update(id: number, updateJpgReportDto: UpdateJpgReportDto) {
    return `This action updates a #${id} jpgReport`;
  }

  remove(id: number) {
    return `This action removes a #${id} jpgReport`;
  }
}
