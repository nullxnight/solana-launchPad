import React from 'react';
import './App.css';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import TokenLaunchpad from './component/TokenLaunchpad';
// import '@solana/wallet-adapter-react-ui/styles.css';

function App() {
  return (
    <>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoconnect>
          <WalletModalProvider>
            <div className="wallet-buttons-container">
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>
            <TokenLaunchpad />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

export default App;
