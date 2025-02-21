import { GetInTouch } from "@/components/shared/get-in-touch";

const JoinUsPage = () => {
  return (
    <div className="flex flex-col items-center px-4 py-16">
      <div className="max-w-4xl w-full text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Join the Khiza Community of Visionary Founders</h1>
        <p className="text-lg text-muted-foreground">
          Our doors are always open for entrepreneurs who resonate with our values and want to be part of a thriving web3 community. Whether you bring your own ideas, find synergy with our projects, or want to invest in innovation, Khiza is the place to co-create and drive impact together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-16">
        <div className="p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Pitch Your Idea</h2>
          <p className="text-muted-foreground">
            Bring your venture ideas to life with Khiza's backing, from initial validation to full execution.
          </p>
        </div>

        <div className="p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Lead a Project</h2>
          <p className="text-muted-foreground">
            Collaborate with us to lead one of our emerging projects and shape the future of web3.
          </p>
        </div>

        <div className="p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Invest & Support</h2>
          <p className="text-muted-foreground">
            Invest in Khiza's ecosystem or directly in specific projects, helping us build a new wave of digital innovation.
          </p>
        </div>
      </div>

      <GetInTouch />
    </div>
  );
};

export default JoinUsPage;
