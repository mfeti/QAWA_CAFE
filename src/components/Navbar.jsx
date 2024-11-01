import { FaCoffee } from "react-icons/fa";
import { CoffeeLogo } from "../assets/website";
import { navLinks } from "../constant";
import Button from "../ui/Button";
function Navbar() {
  return (
    <div className="container">
      <div data-aos="fade" className="flex justify-between items-center">
        {/* Logo section */}
        <div className="flex items-center gap-2">
          <img
            src={CoffeeLogo}
            alt="Coffee Logo"
            className="w-14 h-14 object-contain"
          />
          <span className="text-white text-3xl font-bold font-cursive sm:whitespace-nowrap">
            Qawa Cafe
          </span>
        </div>

        {/* Links section */}
        <nav>
          <ul className="flex justify-center items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label} className="max-md:hidden">
                <a
                  href={link.href}
                  className="text-light/70 transition-all duration-200 text-2xl  hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button styles="flex gap-2 justify-center items-center bg-primary shadow-lg">
                Order{" "}
                <span>
                  <FaCoffee />
                </span>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;