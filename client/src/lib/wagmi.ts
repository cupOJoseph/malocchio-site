import { http, createConfig } from 'wagmi'
import { arbitrum } from 'wagmi/chains'
import { injected, walletConnect } from 'wagmi/connectors'

// Arbitrum chain configuration
export const ARBITRUM_CHAIN = arbitrum

export const config = createConfig({
  chains: [arbitrum],
  connectors: [
    injected({
      // Rabby wallet identifier
      target: () => ({
        id: 'rabby',
        name: 'Rabby',
        provider: (window as any)?.ethereum
      })
    }),
    injected(), // Generic injected for other wallets
    walletConnect({
      projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'demo-project-id'
    })
  ],
  transports: {
    [arbitrum.id]: http()
  }
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}