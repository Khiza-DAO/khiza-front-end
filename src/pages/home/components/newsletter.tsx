export const Newsletter = () => {
  return (
    <div className="mt-12 md:mt-32 lg:mt-12 w-full lg:w-2/5 m-auto flex flex-col items-center bg-white p-10">
      <h3 className="text-blue-900 font-semibold text-center text-3xl">
        Newsletter
      </h3>
      <p className="mt-6 text-gray-600 text-lg text-center leading-normal font-light">
        Stay ahead with the latest updates on Khiza, our projects, and all
        things web3—delivered right to your inbox.
      </p>
      <div className="mt-6 flex flex-col md:flex-row w-full md:px-8">
        <input
          className="flex flex-grow px-4 py-2 rounded text-gray-500 border border-gray-500"
          placeholder="Enter your email address"
        />
        <button className="mt-2 md:mt-0 md:ml-2 bg-blue-500 shadow-lg rounded text-white px-4 py-3">
          get the news
        </button>
      </div>
    </div>
  );
};
