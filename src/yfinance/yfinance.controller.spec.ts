import { Test, TestingModule } from '@nestjs/testing';
import { YFinanceController } from './YFinance.controller';

describe('YFinanceController', () => {
  let controller: YFinanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YFinanceController],
    }).compile();

    controller = module.get<YFinanceController>(YFinanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});