import { PartialType } from '@nestjs/mapped-types';
import { CreateJpgReportDto } from './create-jpg-report.dto';

export class UpdateJpgReportDto extends PartialType(CreateJpgReportDto) {}
