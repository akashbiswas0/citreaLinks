import { getDefaultConfig } from '@rainbow-me/rainbowkit';

// Citrea testnet configuration
export const citreaTestnet = {
  id: 5115,
  name: 'Citrea Testnet',
  network: 'citrea-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Citrea Bitcoin',
    symbol: 'cBTC',
  },
  rpcUrls: {
    default: { http: ['https://rpc.testnet.citrea.xyz'] },
    public: { http: ['https://rpc.testnet.citrea.xyz'] },
  },
  blockExplorers: {
    default: { name: 'Citrea Testnet Explorer', url: 'https://explorer.testnet.citrea.xyz' },
  },
  testnet: true,
} as const;

export const config = getDefaultConfig({
  appName: 'Citrea Actions',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID',
  chains: [citreaTestnet],
  ssr: true,
});
