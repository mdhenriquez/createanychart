import { Module } from '@nestjs/common';
import { JpgReportService } from './jpg-report.service';
import { JpgReportController } from './jpg-report.controller';

@Module({
  controllers: [JpgReportController],
  providers: [JpgReportService],
})
export class JpgReportModule {}
