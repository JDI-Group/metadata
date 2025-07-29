export const moonchainMainnet = {
  id: 999888,
  name: 'Moonchain Mainnet',
  nativeCurrency: { name: 'MCH', symbol: 'MCH', decimals: 18 },
  rpcUrls: { 'default': { http: ['https://rpc.moonchain.com'] } },
  blockExplorers: { default: { name: 'Moonchain Explorer', url: 'https://explorer.moonchain.com' } }
}

export const moonchainHudson = {
  id: 177888,
  name: 'Moonchain Hudson',
  nativeCurrency: { name: 'MCH', symbol: 'MCH', decimals: 18 },
  rpcUrls: { 'default': { http: ['https://hudson-rpc.mchain.ai'] } },
  blockExplorers: { default: { name: 'Moonchain Explorer', url: 'https://hudson-explorer.mchain.ai' } }
} as const;