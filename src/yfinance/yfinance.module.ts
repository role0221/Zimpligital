import { Module } from '@nestjs/common';
import { YFinanceService } from './yfinance.service';
import { YFinanceController } from './yfinance.controller';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register({
      ttl: 300,
      max: 100,
    }),
  ],
  controllers: [YFinanceController],
  providers: [YFinanceService],
})
export class YFinanceModule { }
