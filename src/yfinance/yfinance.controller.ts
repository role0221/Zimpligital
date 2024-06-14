import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';
import { YFinanceService } from './yfinance.service';

@ApiTags('y-finance')
@Controller('y-finance')
export class YFinanceController {
    constructor(private readonly yFinanceService: YFinanceService) { }

    @Get('stock/:ticker')
    @ApiOperation({ summary: 'Get stock price by ticker symbol' })
    @ApiParam({ name: 'ticker', required: true, description: 'Ticker symbol of the stock' })
    async getStockPrice(@Param('ticker') ticker: string) {
        return await this.yFinanceService.getStockPrice(ticker);
    }
}