const axios = require('axios');
const { coingecko } = require('../config');

const fetchMarketData = async (tokenId) => {
  try {
    const response = await axios.get(`${coingecko.baseUrl}/simple/price`, {
      params: {
        ids: tokenId,
        vs_currencies: 'usd',
      },
    });

    const priceChange = Math.random() * 10 - 5; // Simulate price change for testing
    const volume = Math.random() * 100000; // Simulate volume for testing

    return {
      price: response.data[tokenId].usd,
      priceChange,
      volume,
    };
  } catch (error) {
    console.error('Error fetching market data:', error);
    throw new Error('Failed to fetch market data');
  }
};

module.exports = { fetchMarketData };
