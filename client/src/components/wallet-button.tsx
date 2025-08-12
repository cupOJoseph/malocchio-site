import { useAccount, useConnect, useDisconnect, useSwitchChain } from 'wagmi'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import { Wallet, ChevronDown, AlertTriangle } from 'lucide-react'
import { ARBITRUM_CHAIN } from '@/lib/wagmi'
import { arbitrum } from 'wagmi/chains'

export function WalletButton() {
  const { address, isConnected, chain } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const { switchChain } = useSwitchChain()

  // Check if user is on Arbitrum chain
  const isOnArbitrum = chain?.id === arbitrum.id
  
  // Auto-switch to Arbitrum if connected but on wrong chain
  useEffect(() => {
    if (isConnected && !isOnArbitrum && switchChain) {
      switchChain({ chainId: arbitrum.id })
    }
  }, [isConnected, isOnArbitrum, switchChain])

  const handleConnect = () => {
    // Try to connect with Rabby first (injected connector)
    const rabbyConnector = connectors.find(connector => 
      connector.type === 'injected'
    )
    
    if (rabbyConnector) {
      connect({ connector: rabbyConnector })
    } else {
      // Fallback to first available connector
      connect({ connector: connectors[0] })
    }
  }

  const handleSwitchToArbitrum = () => {
    if (switchChain) {
      switchChain({ chainId: arbitrum.id })
    }
  }

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  if (!isConnected) {
    return (
      <Button
        onClick={handleConnect}
        className="bg-nazar-blue hover:bg-nazar-deep text-white font-medium transition-all duration-200"
      >
        <Wallet className="w-4 h-4 mr-2" />
        Connect Wallet
      </Button>
    )
  }

  // Show chain warning if not on Arbitrum
  if (!isOnArbitrum) {
    return (
      <Button
        onClick={handleSwitchToArbitrum}
        variant="destructive"
        className="font-medium"
      >
        <AlertTriangle className="w-4 h-4 mr-2" />
        Switch to Arbitrum
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="border-nazar-blue text-nazar-deep hover:bg-nazar-tint font-medium"
        >
          <Wallet className="w-4 h-4 mr-2" />
          {formatAddress(address!)}
          <ChevronDown className="w-4 h-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(address!)}
          className="cursor-pointer"
        >
          Copy Address
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => disconnect()}
          className="cursor-pointer text-red-600 focus:text-red-600"
        >
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}