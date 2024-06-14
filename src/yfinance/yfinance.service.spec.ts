import { Test, TestingModule } from '@nestjs/testing';
import { YFinanceService } from './YFinance.service';

describe('YFinanceService', () => {
  let service: YFinanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YFinanceService],
    }).compile();

    service = module.get<YFinanceService>(YFinanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});