import { useState } from "react";
import { WalletButton } from "@/components/wallet-button";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { SiFarcaster } from "react-icons/si";

export default function Home() {
  const [mintCount, setMintCount] = useState(1247);
  const [quantity, setQuantity] = useState(5);
  const maxMints = 3333;
  const pricePerNft = 0.008;

  const handleMint = () => {
    // Mock minting functionality
    if (mintCount + quantity <= maxMints) {
      setMintCount((prev) => prev + quantity);
    }
  };

  const remainingNfts = maxMints - mintCount;
  const maxQuantity = Math.min(remainingNfts, 20); // Cap at 20 per transaction

  const incrementQuantity = () => {
    if (quantity < maxQuantity) setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    if (value >= 1 && value <= maxQuantity) {
      setQuantity(value);
    }
  };

  return (
    <div className="font-inter min-h-screen" style={{ background: "#e4f0fc" }}>
      {/* Navigation */}
      <nav className="pt-6 pb-2">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-nazar-deep">
            🧿 Eye of Nazar
          </div>
          <div className="flex items-center gap-4">
            <Button
              onClick={() => window.open('https://opensea.io', '_blank')}
              className="bg-blue-100 hover:bg-blue-200 text-blue-600 font-medium transition-all duration-200"
              data-testid="button-opensea-collection"
            >
              OpenSea Collection
            </Button>
            <WalletButton />
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-4 pb-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Malocchio 🧿
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Malocchio is a collection of 3,333 unique Eyes of Nazar from
            bonafide Mediterraneans CupoGiuseppe and Alex. Protect your wallet
            by minting an authentic onchain evil eye today.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        {/* Custom Eye of Nazar */}
        <div
          className="mb-8 relative"
          style={{
            height: "75vmin",
            width: "75vmin",
            maxHeight: "25%",
            maxWidth: "350px",
          }}
        >
          <div className="eye-nazar-navy">
            <div className="eye-nazar-highlight"></div>
            <div className="eye-nazar-navy-shape"></div>
          </div>
          <div className="eye-nazar-white">
            <div className="eye-nazar-white-shape"></div>
          </div>
          <div className="eye-nazar-blue">
            <div className="eye-nazar-blue-shape"></div>
          </div>
          <div className="eye-nazar-black">
            <div className="eye-nazar-black-shape"></div>
          </div>
          <div id="fa" style={{ height: "100%", width: "100%" }}></div>
        </div>

        {/* Quantity Selector */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-6 mb-4">
            <Button
              onClick={decrementQuantity}
              size="lg"
              variant="outline"
              className="rounded-full w-12 h-12 p-0 border-2 border-nazar-blue text-nazar-blue hover:bg-nazar-tint hover:scale-110 transition-all duration-200 shadow-md"
              disabled={quantity <= 1}
              data-testid="button-decrease-quantity"
            >
              <Minus className="w-5 h-5" />
            </Button>
            <div className="relative">
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                max={maxQuantity}
                className="w-24 h-16 text-center text-2xl font-bold py-4 px-4 rounded-2xl border-2 border-nazar-blue focus:ring-4 focus:ring-nazar-tint focus:border-nazar-deep transition-all duration-200 shadow-lg bg-white"
                data-testid="input-quantity"
              />
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 font-medium">
                max {maxQuantity}
              </div>
            </div>
            <Button
              onClick={incrementQuantity}
              size="lg"
              variant="outline"
              className="rounded-full w-12 h-12 p-0 border-2 border-nazar-blue text-nazar-blue hover:bg-nazar-tint hover:scale-110 transition-all duration-200 shadow-md"
              disabled={quantity >= maxQuantity}
              data-testid="button-increase-quantity"
            >
              <Plus className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mint Button Below Eye */}
        <div className="text-center mb-4">
          <button
            onClick={handleMint}
            className="bg-gradient-to-r from-nazar-deep to-nazar-blue hover:from-nazar-blue hover:to-nazar-light text-white font-bold py-4 px-12 md:py-5 md:px-16 rounded-2xl text-lg md:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg active:scale-95 relative overflow-hidden"
            disabled={mintCount >= maxMints}
            data-testid="button-mint"
          >
            🧿 {mintCount >= maxMints ? "Sold Out" : "Mint Your Nazar"} 🧿
          </button>
          <p className="text-sm text-gray-500 mt-2 font-medium">
            {pricePerNft} ETH each
          </p>
        </div>

        {/* Mint Info Section */}
        <div className="text-center mb-12 relative z-20">
          <div className="mb-6">
            <span className="text-2xl md:text-3xl font-semibold text-gray-800">
              {mintCount.toLocaleString()}
            </span>
            <span className="text-xl md:text-2xl text-gray-500 mx-2">/</span>
            <span className="text-xl md:text-2xl text-gray-600">
              {maxMints.toLocaleString()}
            </span>
            <p className="text-sm text-gray-500 mt-1 font-medium">MINTED</p>
          </div>

          <p className="text-sm text-gray-500 mt-4 max-w-md mx-auto">
            {mintCount >= maxMints
              ? "All Eye of Nazar NFTs have been minted! Thank you for your support."
              : "Connect your wallet to mint your Eye of Nazar NFT. Each token grants access to exclusive mystical protection."}
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        <div className="flex justify-center gap-6 mb-4">
          <a 
            href="https://warpcast.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-purple-600 transition-colors duration-200"
            data-testid="link-farcaster"
          >
            <SiFarcaster className="w-6 h-6" />
          </a>
          <a 
            href="https://x.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black transition-colors duration-200"
            data-testid="link-twitter"
          >
            <FaXTwitter className="w-6 h-6" />
          </a>
        </div>
        <p>
          Hand Drawn by{" "}
          <a href="https://x.com/justalexty">
            <u>Alex</u>
          </a>
        </p>
        <p className="mt-2">
          Built with mystical energy and modern technology.
        </p>
      </footer>
    </div>
  );
}
