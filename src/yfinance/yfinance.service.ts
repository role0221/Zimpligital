import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { MSG_FINANCE } from './yfinance.schema';
import yahooFinance from 'yahoo-finance2';
import { Cache } from 'cache-manager';

@Injectable()
export class YFinanceService {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) { }

    async getStockPrice(ticker: string): Promise<any> {
        const cachedData = await this.cacheManager.get(ticker);
        if (cachedData) { return cachedData; }

        try {
            const result = await yahooFinance.quote(ticker);
            if (result) { await this.cacheManager.set(ticker, result, 300); }

            return result ? result : {}
        } catch (error) {
            console.log(error)
            throw new BadRequestException(MSG_FINANCE.YAHOO_ERROR_VALIDATE);
        }
    }
}