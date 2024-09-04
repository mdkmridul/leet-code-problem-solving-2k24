// problem ->
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices: number[]): number {
    let low = 0
    let high = 1
    let profitMax = 0
    while(high < prices.length) {
        const currentProfit = prices[high] - prices[low]
        if(currentProfit <= 0 ) {
            low = high
            high++
        } else if(currentProfit > profitMax) {
            profitMax = currentProfit
            high++
        } else { high++ }
    }

    return profitMax
};