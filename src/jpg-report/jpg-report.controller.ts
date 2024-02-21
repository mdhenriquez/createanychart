import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JpgReportService } from './jpg-report.service';
import { CreateJpgReportDto } from './dto/create-jpg-report.dto';
import { UpdateJpgReportDto } from './dto/update-jpg-report.dto';

@Controller('jpg-report')
export class JpgReportController {
  constructor(private readonly jpgReportService: JpgReportService) {}

  @Post()
  create(@Body() createJpgReportDto: CreateJpgReportDto) {
    return this.jpgReportService.create(createJpgReportDto);
  }

  @Get()
  findAll() {
    return this.jpgReportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jpgReportService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJpgReportDto: UpdateJpgReportDto) {
    return this.jpgReportService.update(+id, updateJpgReportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jpgReportService.remove(+id);
  }
}
