let portfolio = {
    cash: 1000, // Start with $1000
    assets: {
      SOL: 10, // Start with 10 SOL
    },
  };
  
  const updatePortfolio = (action, amount) => {
    if (action === 'BUY') {
      portfolio.cash -= amount * 20; // Example price: $20 per SOL
      portfolio.assets.SOL += amount;
    } else if (action === 'SELL') {
      portfolio.cash += amount * 20; // Example price: $20 per SOL
      portfolio.assets.SOL -= amount;
    }
  
    return portfolio;
  };
  
  module.exports = { portfolio, updatePortfolio };
  