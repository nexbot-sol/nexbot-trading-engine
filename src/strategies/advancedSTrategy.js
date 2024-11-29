const calculateAdvancedTrade = (marketData, portfolio) => {
    const { priceChange, volume } = marketData;
  
    if (priceChange > 3 && volume > 100000) {
      return { action: 'BUY', amount: portfolio.cash * 0.1 }; // Buy with 10% of cash
    } else if (priceChange < -3) {
      return { action: 'SELL', amount: portfolio.assets.SOL * 0.2 }; // Sell 20% of SOL
    }
  
    return { action: 'HOLD' };
  };
  
  module.exports = { calculateAdvancedTrade };
  