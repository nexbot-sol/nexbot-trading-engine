require('dotenv').config();

module.exports = {
  solana: {
    cluster: process.env.SOLANA_CLUSTER,
    walletSecretKey: JSON.parse(process.env.NEXBOT_WALLET_SECRET_KEY),
  },
  coingecko: {
    baseUrl: process.env.COINGECKO_API_URL,
  },
};
