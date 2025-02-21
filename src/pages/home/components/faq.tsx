export const FAQ = () => {
  return (
    <section className="py-10 bg-gray-900 sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Questions & Answers</h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">Explore the common questions and answers about Khiza</p>
        </div>

        <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
          <div className="flex items-start">
            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
              <span className="text-lg font-semibold text-white">?</span>
            </div>
            <div className="ml-4">
              <p className="text-xl font-semibold text-white">What does Khiza do?</p>
              <p className="mt-4 text-base text-gray-400">
                Khiza is a startup studio, which means our mission is to create and grow other companies. From market research to product launch and scaling, we're involved in every stage of building innovative web3 businesses. Our projects are always rooted in blockchain and web3, bringing groundbreaking ideas to life.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
              <span className="text-lg font-semibold text-white">?</span>
            </div>
            <div className="ml-4">
              <p className="text-xl font-semibold text-white">Does Khiza act as a venture capital (VC)?</p>
              <p className="mt-4 text-base text-gray-400">
                No, Khiza is not a VC firm. Instead, we co-create projects, partnering with founders and companies to build, refine, and scale innovative web3 solutions together.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
              <span className="text-lg font-semibold text-white">?</span>
            </div>
            <div className="ml-4">
              <p className="text-xl font-semibold text-white">How does Khiza support the Fellowship Founders?</p>
              <p className="mt-4 text-base text-gray-400">
                For a project to become part of the Khiza ecosystem through our Fellowship Founders program, it must first go through a rigorous evaluation process. We assess both the product and its market potential to ensure it's a good fit. Once the partnership is established, we provide continuous support through our proprietary methodology—whether it's operational assistance, strategic mentorship, or ongoing advisory.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
              <span className="text-lg font-semibold text-white">?</span>
            </div>
            <div className="ml-4">
              <p className="text-xl font-semibold text-white">How can I join Khiza?</p>
              <p className="mt-4 text-base text-gray-400">
                If you believe your web3 project aligns with Khiza's vision and methodology, we'd love to hear from you! Share your idea with us through this form or directly email us at alltogether@khizadao.com. We'll review it internally and get back to you soon.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
              <span className="text-lg font-semibold text-white">?</span>
            </div>
            <div className="ml-4">
              <p className="text-xl font-semibold text-white">What is a Biz Collab, and how does it work?</p>
              <p className="mt-4 text-base text-gray-400">
                Biz Collabs are collaborative projects where Khiza partners with established companies to create new products, explore innovative use cases, or integrate web3 technologies into their existing business. Through joint ventures, tech licensing, or strategic partnerships, we aim to unlock new opportunities and drive impactful business transformations.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
              <span className="text-lg font-semibold text-white">?</span>
            </div>
            <div className="ml-4">
              <p className="text-xl font-semibold text-white">How can I invest in Khiza or its ecosystem?</p>
              <p className="mt-4 text-base text-gray-400">
                You can choose to invest directly in Khiza as a startup studio or in any of its specific projects. Since our inception, we have built a strong network of supporters—our 'believers'—who contribute to the growth and success of our ventures. We also collaborate on corporate innovation initiatives, working alongside partner companies to co-create and develop new products and solutions. If you're interested in joining our network of believers and supporting the Khiza ecosystem, please reach out to us at alltogether@khizadao.com.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-12 md:mt-20">
          <div className="px-8 py-4 text-center bg-gray-800 rounded-full">
            <p className="text-gray-50">Have more questions? <a href="mailto:alltogether@khizadao.com" title="Contact Khiza" className="text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline">Contact our team</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};
