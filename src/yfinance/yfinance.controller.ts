import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';
import { YFinanceService } from './yfinance.service';

@ApiTags('y-finance')
@Controller('y-finance')
export class YFinanceController {
    constructor(private readonly yFinanceService: YFinanceService) { }

    @Get('stock/:ticker')
    @ApiOperation({ summary: 'Get stock price by ticker ' })
    @ApiParam({ name: 'ticker', required: true })
    async getStockPrice(@Param('ticker') ticker: string) {
        return await this.yFinanceService.getStockPrice(ticker);
    }

    @Get(':ticker/details')
    @ApiOperation({ summary: 'Get stock details by ticker' })
    @ApiParam({ name: 'ticker', required: true })
    async getStockDetails(@Param('ticker') ticker: string) {
        return await this.yFinanceService.getStockDetails(ticker);
    }

    @Get(':ticker/recommendations')
    @ApiOperation({ summary: 'Get recommendations by ticker' })
    @ApiParam({ name: 'ticker', required: true })
    async getRecommendations(@Param('ticker') ticker: string) {
        return await this.yFinanceService.getRecommendations(ticker);
    }
}