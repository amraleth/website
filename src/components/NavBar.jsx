import avatar from "../assets/logo.jpg";
import { FaGithub, FaInstagram, FaSpotify, FaDiscord } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          src={avatar}
          alt="avatar"
          className="object-scale-down h-8 w-8 rounded-full"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/amraleth">
          <FaGithub className="text-gray-500" />
        </a>
        <a href="https://open.spotify.com/user/31kw3phdon73aizghyv7n443va7e?si=46375312e9594190">
          <FaSpotify className="text-green-500" />
        </a>
        <a href="https://discordapp.com/users/1149055385848782878">
          <FaDiscord className="text-blue-500" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
