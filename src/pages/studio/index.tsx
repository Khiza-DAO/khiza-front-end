import { useState } from "react";

const StudioPage = () => {
  const projects = [
    {
      name: "Pegaê",
      description: "User-friendly web3 wallet – an easy way for brands to distribute tokens effortlessly and engage users with digital assets.",
      tags: ["Digital assets", "In-house"],
      url: "https://pegae.com.br/company"
    },
    {
      name: "Tash", 
      description: "Cryptoassets investment platform with automated portfolio rebalancing, catering to both investors and investment advisors for easy, secure crypto management.",
      tags: ["Investment", "In-house"],
      url: "https://tash.finance/"
    },
    {
      name: "Peece",
      description: "No-code tool that enables non-crypto natives to create their own tokens and smart contracts in just a few clicks.",
      tags: ["Digital assets", "In-house"],
      url: "https://peece.xyz/"
    },
    {
      name: "AnyFlow",
      description: "Fast, secure multi-blockchain smart contract deployments in under 5 minutes, simplifying development for web3 projects.",
      tags: ["DevTool", "In-house"],
      url: "https://anyflow.pro/"
    },
    {
      name: "Fact Finance",
      description: "Reliable and independent tool designed for developers to integrate real-world data into the blockchain environment seamlessly.",
      tags: ["Infrastructure", "Co-created"],
      url: "https://fact.finance/en"
    },
    {
      name: "Speck",
      description: "A secure platform offering a curated selection of RWA tokens, making it easy for accredited and casual investors to buy and sell them.",
      tags: ["RWA", "Investment", "In-house"],
      url: "https://speck.finance/"
    },
    {
      name: "Tokly",
      description: "A comprehensive solution for token sales, management, and distribution, providing a streamlined approach for digital assets.",
      tags: ["DevTools", "In-house"],
      url: "https://tokly.xyz/"
    },
    {
      name: "CryptoNalitica",
      description: "A tool that provides performance data for cryptocurrencies listed on Binance, one of the biggest crypto exchanges in the world.",
      tags: ["Analytics", "Co-created"],
      url: "https://cryptonalitica.com/"
    },
    {
      name: "Coin Commit",
      description: "A platform that tracks over 700 open-source cryptocurrency projects through developer updates on GitHub.",
      tags: ["Analytics", "Co-created"]
    },
    {
      name: "Dash Creator",
      description: "The tool offers data and insights on the NFT market and is geared towards content creators, artists, and buyers.",
      tags: ["NFT", "Analytics", "In-house"],
      url: "https://dashcreator.com/"
    },
    {
      name: "Registree",
      description: "Protocol for on-chain records aiming to bring transparency, security, and composability to financial market infrastructures.",
      tags: ["Infrastructure", "In-house"],
      status: "Under development"
    },
    {
      name: "Crypto Arbitrage Bot",
      description: "On-chain bot dedicated to NFT arbitrage. It actively seeks out profitable opportunities and promptly executes the purchase and sale of pieces.",
      tags: ["DeFi", "NFT", "In-house"],
      url: "https://etherscan.io/address/0xfa90964fca2a0f52b554cd929892107a241603c4"
    },
    {
      name: "What That Buck Worth",
      description: "Free mint NFT collection that critiques the impact of political decisions on the economy and the value of a country's currency.",
      tags: ["NFT", "In-house"],
      url: "https://whatthatbuckworth.com/"
    },
    {
      name: "Stable United",
      description: "Infrastructure layer designed to aggregate liquidity from all stable assets, providing capital efficiency and security.",
      tags: ["DeFi", "In-house"]
    },
    {
      name: "Vozes da Floresta",
      description: "NFT collection that connects photographers with art and nature enthusiasts through digital collectibles.",
      tags: ["NFT", "Co-created"],
      url: "https://projetovozes.com.br/"
    },
    {
      name: "Nobody Sausage Portal",
      description: "NFT project bringing one of the world's biggest virtual influencers to web3, expanding reach and engagement.",
      tags: ["NFT", "Co-created"]
    }
  ];

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Get unique tags from all projects
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  const filteredProjects = projects.filter(project => {
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.every(tag => project.tags.includes(tag));
    
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesTags && matchesSearch;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Projects</h1>
      
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search projects..."
          className="w-full p-2 border rounded-lg mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedTags.includes(tag)
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-accent rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Visit Project →
              </a>
            )}
            {project.status && (
              <span className="text-gray-500 italic">{project.status}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudioPage;
