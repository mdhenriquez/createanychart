import { Test, TestingModule } from '@nestjs/testing';
import { JpgReportService } from './jpg-report.service';

describe('JpgReportService', () => {
  let service: JpgReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JpgReportService],
    }).compile();

    service = module.get<JpgReportService>(JpgReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
