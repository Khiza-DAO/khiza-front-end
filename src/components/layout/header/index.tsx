import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-khiza.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <img src={logo} alt="Khiza" />
      <div className="flex gap-4">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/studio" className="[&.active]:font-bold">
          Studio
        </Link>
        <Link to="/build-together" className="[&.active]:font-bold">
          Build together
        </Link>
        <Link to="/join-us" className="[&.active]:font-bold">
          Join us
        </Link>
        <Link to="/method-and-minds" className="[&.active]:font-bold">
          Method & minds
        </Link>
        <Link to="/insight-lab" className="[&.active]:font-bold">
          Insight Lab
        </Link>
        <Link to="/blog" className="[&.active]:font-bold">
          Blog
        </Link>
      </div>
    </header>
  );
};

export default Header;
