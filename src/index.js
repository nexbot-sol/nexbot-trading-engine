const { fetchMarketData } = require('./utils/marketDataFetcher');
const { calculateBasicTrade } = require('./strategies/basicStrategy');
const { executeTrade } = require('./utils/tradeExecutor');
const { portfolio, updatePortfolio } = require('./utils/portfolioManager');

(async () => {
  console.log('Nexbot Trading Engine Started');

  const marketData = await fetchMarketData('solana');
  console.log('Market Data:', marketData);

  const tradeDecision = calculateBasicTrade(marketData);
  console.log('Trade Decision:', tradeDecision);

  if (tradeDecision.action !== 'HOLD') {
    const signature = await executeTrade(tradeDecision.action, tradeDecision.amount, 'YourPublicKeyHere');
    console.log('Trade Signature:', signature);

    const updatedPortfolio = updatePortfolio(tradeDecision.action, tradeDecision.amount);
    console.log('Updated Portfolio:', updatedPortfolio);
  } else {
    console.log('No trades executed.');
  }
})();
