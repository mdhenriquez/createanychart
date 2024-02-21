import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JpgReportModule } from './jpg-report/jpg-report.module';

@Module({
  imports: [JpgReportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
