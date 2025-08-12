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
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Custom Eye of Nazar - Using inline styles to ensure production build */}
        <div className="my-12 relative" style={{ height: '50vmin', width: '50vmin', maxHeight: '300px', maxWidth: '300px', minHeight: '200px', minWidth: '200px' }}>
          {/* Navy outer layer */}
          <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            {/* Highlight effect */}
            <div style={{
              position: 'absolute',
              top: '2vmin',
              left: '9vmin',
              zIndex: 1,
              opacity: 0.9,
              transform: 'rotate(13deg)',
              width: '33vmin',
              maxWidth: '200px',
              minWidth: '130px',
              aspectRatio: '1',
              padding: '1.5vmin',
              borderRadius: '50%',
              background: '#ffffff'
            }}></div>
            {/* Navy shape */}
            <div style={{
              height: '50vmin',
              width: '50vmin',
              maxHeight: '300px',
              maxWidth: '300px',
              minHeight: '200px',
              minWidth: '200px',
              backgroundColor: '#04047c',
              borderRadius: '49% 51% 50% 50% / 52% 52% 48% 48%',
              transform: 'rotate(20deg)',
              overflow: 'hidden',
              position: 'relative'
            }}>
              {/* Shine animation */}
              <div 
                className="animate-shine"
                style={{
                  content: '',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  animation: 'eye-shine 5s infinite'
                }}
              ></div>
            </div>
          </div>
          {/* White layer */}
          <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <div style={{
              height: '25vmin',
              width: '25vmin',
              maxHeight: '150px',
              maxWidth: '150px',
              minHeight: '100px',
              minWidth: '100px',
              backgroundColor: '#ffffff',
              borderRadius: '44% 56% 50% 50% / 44% 48% 52% 56%',
              transform: 'rotate(45deg)'
            }}></div>
          </div>
          {/* Blue layer */}
          <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <div style={{
              height: '15vmin',
              width: '15vmin',
              maxHeight: '90px',
              maxWidth: '90px',
              minHeight: '60px',
              minWidth: '60px',
              backgroundColor: '#a4dcfc',
              borderRadius: '36% 64% 56% 44% / 44% 50% 50% 56%',
              transform: 'rotate(45deg)'
            }}></div>
          </div>
          {/* Black center */}
          <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <div style={{
              height: '8vmin',
              width: '8vmin',
              maxHeight: '50px',
              maxWidth: '50px',
              minHeight: '32px',
              minWidth: '32px',
              backgroundColor: '#000',
              borderRadius: '52% 48% 52% 48% / 56% 50% 50% 44%'
            }}></div>
          </div>
        </div>

        {/* Mint Button Below Eye */}
        <div className="text-center mb-12">
          <button 
            onClick={handleMint}
            className="bg-gradient-to-r from-nazar-deep to-nazar-blue hover:from-nazar-blue hover:to-nazar-light text-white font-bold py-4 px-12 md:py-5 md:px-16 rounded-2xl text-lg md:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg active:scale-95 relative overflow-hidden"
            disabled={mintCount >= maxMints}
          >
            🧿 {mintCount >= maxMints ? "Sold Out" : "Mint Your Nazar"} 🧿
          </button>
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
