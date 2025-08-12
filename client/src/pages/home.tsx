import { useState, useEffect } from "react";
import { emojiBlast, emojiBlasts } from "emoji-blast";
import { WalletButton } from "@/components/wallet-button";

export default function Home() {
  const [mintCount, setMintCount] = useState(1247);
  const maxMints = 3333;

  // Global click handler for emoji explosion effect
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      emojiBlast({
        emojis: ["🧿"],
        position: {
          x: e.clientX,
          y: e.clientY,
        },
      });
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  const handleMint = (e: React.MouseEvent) => {
    // Mock minting functionality
    if (mintCount < maxMints) {
      setMintCount((prev) => prev + 1);
    }

    // Create continuous emoji blasts for mint button
    const { cancel } = emojiBlasts({
      emojis: ["🧿", "✨", "🌟", "💎", "🔮", "🎉", "⭐"],
      interval: 40,
    });
    setTimeout(cancel, 3000);
  };

  return (
    <div className="font-inter min-h-screen" style={{ background: '#e4f0fc' }}>
      {/* Navigation */}
      <nav className="pt-6 pb-2">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-nazar-deep">
            🧿 Eye of Nazar
          </div>
          <WalletButton />
        </div>
      </nav>

      {/* Header */}
      <header className="pt-4 pb-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Eye of Nazar NFTs 🧿
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover the mystical power of protection with our exclusive
            collection of 3,333 unique Eye of Nazar NFTs. Each piece carries
            ancient wisdom and modern artistry.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        {/* Custom Eye of Nazar */}
        <div className="mb-12 relative" style={{ height: '75vmin', width: '75vmin', maxHeight: '400px', maxWidth: '400px' }}>
          <div className="navy">
            <div className="highlight"></div>
            <div className="navy-shape"></div>
          </div>
          <div className="white"> 
            <div className="white-shape"></div>
          </div>
          <div className="blue">
            <div className="blue-shape"></div>
          </div>
          <div className="black">
            <div className="black-shape"></div>
          </div>
          <div>
            <button 
              id="btn" 
              className="center myButton"
              onClick={handleMint}
              disabled={mintCount >= maxMints}
            >
              {mintCount >= maxMints ? "Sold Out" : "Mint 🧿"}
            </button>
          </div>
          <div id="fa" style={{ height: '100%', width: '100%' }}></div>
        </div>

        {/* Mint Info Section */}
        <div className="text-center mb-8">
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
              : "Connect your wallet to mint your Eye of Nazar NFT. Each token grants access to exclusive mystical benefits."}
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-nazar-tint">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="font-semibold text-gray-800 mb-2">Protection</h3>
            <p className="text-sm text-gray-600">
              Ancient symbol of protection against negative energy
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-nazar-tint">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="font-semibold text-gray-800 mb-2">Unique Art</h3>
            <p className="text-sm text-gray-600">
              Hand-crafted digital art with mystical properties
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-nazar-tint">
            <div className="text-3xl mb-3">🌟</div>
            <h3 className="font-semibold text-gray-800 mb-2">Access</h3>
            <p className="text-sm text-gray-600">
              Join our coven of protection seekers
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
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
