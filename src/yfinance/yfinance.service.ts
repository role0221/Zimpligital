import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { MSG_FINANCE } from './yfinance.schema';
import yahooFinance from 'yahoo-finance2';
import { Cache } from 'cache-manager';
import { Quote } from 'yahoo-finance2/dist/esm/src/modules/quote';
import { RecommendationsBySymbolResponse } from 'yahoo-finance2/dist/esm/src/modules/recommendationsBySymbol';
import { SummaryDetail } from 'yahoo-finance2/dist/esm/src/modules/quoteSummary-iface';

@Injectable()
export class YFinanceService {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) { }

    async getStockPrice(ticker: string): Promise<Quote> {
        const cachedData = await this.cacheManager.get(ticker);
        if (cachedData) { return cachedData as Quote }

        try {
            const result = await yahooFinance.quote(ticker);
            if (result) { await this.cacheManager.set(ticker, result, 300); }

            return result ? result : {} as Quote
        } catch (error) {
            console.log(error)
            throw new BadRequestException(MSG_FINANCE.YAHOO_ERROR_VALIDATE);
        }
    }

    async getStockDetails(ticker: string): Promise<SummaryDetail> {
        const cachedData = await this.cacheManager.get(ticker);
        if (cachedData) { return cachedData as SummaryDetail }

        try {
            const result = await yahooFinance.quoteSummary(ticker);
            if (result) { await this.cacheManager.set(ticker, result, 300); }

            return result ? result as SummaryDetail : {} as SummaryDetail
        } catch (error) {
            console.log(error)
            throw new BadRequestException(MSG_FINANCE.YAHOO_ERROR_VALIDATE);
        }
    }

    async getRecommendations(ticker: string): Promise<RecommendationsBySymbolResponse> {
        const cachedData = await this.cacheManager.get(ticker);
        if (cachedData) { return cachedData as RecommendationsBySymbolResponse }

        try {
            const result = await yahooFinance.recommendationsBySymbol(ticker);
            if (result) { await this.cacheManager.set(ticker, result, 300); }

            return result ? result : {} as RecommendationsBySymbolResponse
        } catch (error) {
            console.log(error)
            throw new BadRequestException(MSG_FINANCE.YAHOO_ERROR_VALIDATE);
        }
    }
}