// import logo from "../assets/aks-logo.png";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-end py-6 ">
      {/* <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img
            src={logo}
            className="mx-2 rounded-lg"
            width={100}
            height={75}
            alt="Logo"
          />
        </a>
      </div> */}
      <div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
          <a
            href="https://www.linkedin.com/in/lokeshharode/"
            target="_blank"
            rel="noopener nopreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/lokesh1987-hack"
            target="_blank"
            rel="noopener nopreferrer"
            aria-label="Github"
          >
            <FaGithub />
          </a>
          <a
            href="https://stackoverflow.com/users/17967960/liladhar-harode"
            target="_blank"
            rel="noopener nopreferrer"
            aria-label="Twitter"
          >
            <FaStackOverflow />
          </a>
          <a
            href="https://www.instagram.com/lokeshharode1111/"
            target="_blank"
            rel="noopener nopreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
