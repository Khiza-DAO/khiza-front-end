const Portfolio = () => {
  const projects = [
    { name: 'CryptoNalitica', category: 'Analytics', logo: '/logos/cryptonalitica.svg' },
    { name: 'Coin Commit', category: 'Analytics', logo: '/logos/coincommit.svg' },
    { name: 'Dashcreator', category: 'Analytics', logo: '/logos/dashcreator.svg' },
    { name: 'Speck', category: 'RWA', logo: '/logos/speck.svg' },
    { name: 'Pegaê', category: 'Digital Assets', logo: '/logos/pegae.svg' },
    { name: 'Peece', category: 'Digital Assets', logo: '/logos/peece.svg' },
    { name: 'Tash', category: 'Investment', logo: '/logos/tash.svg' },
    { name: 'Fact Finance', category: 'Infrastructure', logo: '/logos/factfinance.svg' },
    { name: 'Anyflow', category: 'DevTools', logo: '/logos/anyflow.svg' },
    { name: 'Tokly', category: 'DevTools', logo: '/logos/tokly.svg' }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Our Portfolio</h2>
        <p className="text-lg text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          We build and scale a diverse range of ventures across web3, spanning digital assets, DeFi, RWA, infrastructure, and more. 
          Our mission is to drive innovation by turning groundbreaking ideas into impactful businesses. 
          Discover our initiatives and see how we're unlocking new opportunities across the entire web3 spectrum.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <a 
              key={project.name}
              href="/studio" 
              className="group relative flex flex-col items-center transition-transform hover:scale-105"
            >
              <div className="w-full aspect-square bg-gray-900 rounded-lg flex items-center justify-center p-6">
                <img
                  src={project.logo}
                  alt={`${project.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="mt-3 px-4 py-1 bg-gray-800 rounded-full text-sm">
                {project.category}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
