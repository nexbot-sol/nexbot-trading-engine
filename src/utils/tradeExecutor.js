const { Connection, Transaction, SystemProgram, PublicKey, Keypair } = require('@solana/web3.js');
const { solana } = require('../config');

const connection = new Connection(solana.cluster, 'confirmed');
const nexbotWallet = Keypair.fromSecretKey(Uint8Array.from(solana.walletSecretKey));

const executeTrade = async (action, amount, toPublicKey) => {
  try {
    if (action === 'HOLD') {
      console.log('No trade action taken.');
      return;
    }

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: nexbotWallet.publicKey,
        toPubkey: new PublicKey(toPublicKey),
        lamports: amount * 1e9, // Convert SOL to lamports
      })
    );

    const signature = await connection.sendTransaction(transaction, [nexbotWallet]);
    await connection.confirmTransaction(signature);
    console.log(`${action} Trade Executed: ${signature}`);
    return signature;
  } catch (error) {
    console.error('Error executing trade:', error);
    throw new Error('Trade Execution Failed');
  }
};

module.exports = { executeTrade };
