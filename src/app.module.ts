import { YFinanceModule } from './yfinance/yfinance.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [YFinanceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }