import { Link } from "@tanstack/react-router";

const Services = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-16">
      {/* Khiza Lab Card */}
      <Link
        to="/studio"
        className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-indigo-800 p-6 transition-all hover:scale-[1.02]"
      >
        <div className="relative z-10 h-full flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-2">Khiza Lab</h3>
          <h4 className="text-xl text-purple-200 mb-4">From Idea to Market</h4>
          <p className="text-gray-200">
            We craft exceptional companies from the ground up, developing web3
            ventures entirely within our ecosystem. Our method ensures every
            detail, from concept validation to go-to-market strategy, is
            meticulously executed, accelerating the path from ideation to
            thriving business.
          </p>
        </div>
      </Link>

      {/* Biz Collab Card */}
      <Link
        to="/build-together"
        className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-600 to-cyan-800 p-6 transition-all hover:scale-[1.02]"
      >
        <div className="relative z-10 h-full flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-2">Biz Collab</h3>
          <h4 className="text-xl text-blue-200 mb-4">
            Pioneering New Solutions Together
          </h4>
          <p className="text-gray-200">
            We partner with established companies looking to leverage web3
            technology and create innovative solutions. Whether through tech
            licensing or joint ventures, our collaborations unlock new
            opportunities and build future-proof products.
          </p>
        </div>
      </Link>

      {/* Fellowship Founders Card */}
      <Link
        to="/join-us"
        className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-emerald-600 to-teal-800 p-6 transition-all hover:scale-[1.02]"
      >
        <div className="relative z-10 h-full flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-2">
            Fellowship Founders
          </h3>
          <h4 className="text-xl text-emerald-200 mb-4">
            Empowering Visionary Entrepreneurs
          </h4>
          <p className="text-gray-200">
            We join forces with ambitious founders to fast-track the development
            of groundbreaking projects. Our collaborative approach combines
            experience, resources, and mentorship, transforming bold ideas into
            high-growth ventures that redefine the web3 landscape.
          </p>
        </div>
      </Link>
    </section>
  );
};

export default Services;
