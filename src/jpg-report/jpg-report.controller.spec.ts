import { Test, TestingModule } from '@nestjs/testing';
import { JpgReportController } from './jpg-report.controller';
import { JpgReportService } from './jpg-report.service';

describe('JpgReportController', () => {
  let controller: JpgReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JpgReportController],
      providers: [JpgReportService],
    }).compile();

    controller = module.get<JpgReportController>(JpgReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
