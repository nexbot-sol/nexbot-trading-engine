const calculateBasicTrade = (marketData) => {
    const { priceChange } = marketData;
  
    if (priceChange > 2) {
      return { action: 'BUY', amount: 1 }; // Example: Buy 1 SOL if price increases by 2%
    } else if (priceChange < -2) {
      return { action: 'SELL', amount: 1 }; // Example: Sell 1 SOL if price decreases by 2%
    }
  
    return { action: 'HOLD' }; // Hold otherwise
  };
  
  module.exports = { calculateBasicTrade };
  