import { useState, useRef, useCallback, useEffect } from "react";
import { WalletButton } from "@/components/wallet-button";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { SiFarcaster, SiEthereum } from "react-icons/si";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  const [mintCount, setMintCount] = useState(1247);
  const [quantity, setQuantity] = useState(3);
  const maxMints = 3333;
  const pricePerNft = 0.009;

  // Sample NFT images - replace with actual images when uploaded
  const nftImages = [
    "/malocchio.png",
    "/nft-images/2.jpg",
    "malocchio.png",
    "/nft-images/4.jpg",
    "malocchio.png",
    "/nft-images/6.jpg",
  ];

  const handleMint = () => {
    // Mock minting functionality
    if (mintCount + quantity <= maxMints) {
      setMintCount((prev) => prev + quantity);
    }
  };

  const remainingNfts = maxMints - mintCount;
  const maxQuantity = remainingNfts;

  const incrementIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const decrementIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const incrementQuantity = useCallback(() => {
    setQuantity((prev) => (prev < maxQuantity ? prev + 1 : prev));
  }, [maxQuantity]);

  const decrementQuantity = useCallback(() => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  }, []);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    if (value >= 1 && value <= maxQuantity) {
      setQuantity(value);
    }
  };

  const startIncrementing = () => {
    incrementQuantity();
    incrementIntervalRef.current = setInterval(() => {
      incrementQuantity();
    }, 100);
  };

  const startDecrementing = () => {
    decrementQuantity();
    decrementIntervalRef.current = setInterval(() => {
      decrementQuantity();
    }, 100);
  };

  const stopIncrementing = () => {
    if (incrementIntervalRef.current) {
      clearInterval(incrementIntervalRef.current);
      incrementIntervalRef.current = null;
    }
  };

  const stopDecrementing = () => {
    if (decrementIntervalRef.current) {
      clearInterval(decrementIntervalRef.current);
      decrementIntervalRef.current = null;
    }
  };

  return (
    <div className="font-inter min-h-screen" style={{ background: "#e4f0fc" }}>
      {/* Navigation */}
      <nav className="pt-6 pb-2">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-nazar-deep"></div>
          <div className="flex items-center gap-4">
            <Button
              onClick={() => window.open("https://opensea.io", "_blank")}
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
          <div className="mb-4">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
              Malocchio
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Malocchio is a collection of 3,333 unique Eyes of Nazar from
            bonafide Mediterraneans Giuseppe and Alex. Protect yourself by
            minting an authentic onchain nazar.
          </p>
          <img
            src="/malocchio.png"
            alt="Malocchio Logo"
            className="mx-2 max-w-1/3"
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "500px",
              height: "auto",
            }}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        {/* Quantity Selector */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-6 mb-4">
            <Button
              onMouseDown={startDecrementing}
              onMouseUp={stopDecrementing}
              onMouseLeave={stopDecrementing}
              size="lg"
              variant="outline"
              className="rounded-full w-12 h-12 p-0 border-2 border-nazar-blue text-nazar-blue hover:bg-nazar-tint hover:scale-110 transition-all duration-200 shadow-md select-none"
              disabled={quantity <= 1}
              data-testid="button-decrease-quantity"
            >
              <Minus className="w-5 h-5" />
            </Button>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              max={maxQuantity}
              className="w-24 h-16 text-center text-2xl font-bold py-4 px-4 rounded-2xl border-2 border-nazar-blue focus:ring-4 focus:ring-nazar-tint focus:border-nazar-deep transition-all duration-200 shadow-lg bg-white"
              data-testid="input-quantity"
            />
            <Button
              onMouseDown={startIncrementing}
              onMouseUp={stopIncrementing}
              onMouseLeave={stopIncrementing}
              size="lg"
              variant="outline"
              className="rounded-full w-12 h-12 p-0 border-2 border-nazar-blue text-nazar-blue hover:bg-nazar-tint hover:scale-110 transition-all duration-200 shadow-md select-none"
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
            {mintCount >= maxMints ? "Sold Out" : "Mint"}
          </button>
          <p className="text-sm text-gray-500 mt-2 font-medium">
            0.0009 ETH each
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
        </div>

        {/* NFT Carousel */}
        <div className="w-full max-w-6xl mx-auto mt-12 mb-8">
          <div className="marquee overflow-hidden">
            <div className="marquee__track">
              {[...nftImages, ...nftImages].map((image, index) => (
                <div
                  key={index}
                  className="marquee__item mr-8"
                  aria-hidden={index >= nftImages.length ? "true" : undefined}
                >
                  <div className="w-48 h-48 bg-gradient-to-br from-nazar-tint to-white rounded-2xl shadow-lg border-2 border-nazar-blue/20 overflow-hidden">
                    <img
                      src={image}
                      alt={`Eye of Nazar NFT #${(index % nftImages.length) + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector(".placeholder")) {
                          const placeholder = document.createElement("div");
                          placeholder.className =
                            "placeholder w-full h-full flex items-center justify-center text-nazar-blue text-4xl font-bold";
                          placeholder.textContent = "🧿";
                          parent.appendChild(placeholder);
                        }
                      }}
                      data-testid={`nft-image-${(index % nftImages.length) + 1}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
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
            href="https://arbiscan.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
            data-testid="link-etherscan"
          >
            <SiEthereum className="w-6 h-6" />
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
        <p className="mt-2">built with ancient wisdom and modern technology.</p>
      </footer>
    </div>
  );
}
