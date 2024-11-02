import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { CoffeeFooter } from "../assets/website";
import { footerLinks } from "../constant";
import Button from "../ui/Button";

const bgImage = {
  backgroundImage: `url(${CoffeeFooter})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};

function Footer() {
  return (
    <div style={bgImage} className="text-white">
      <div className="bg-brandDark/50 min-h-[400px] h-full">
        <div className="container sm:py-14 py-7 ">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/3 space-y-5">
              <h2 className="font-cursive font-bold text-3xl sm:text-4xl tracking-wide">
                Coffee Cafe
              </h2>
              <p className="text-md leading-5">
                Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect
                Espresso Escape
              </p>
              <div className="">
                <Button styles="bg-brandDark/40">
                  Visit our Youtube Channel
                </Button>
              </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-10">
              <div className="space-y-3">
                <h4 className="font-semibold text-xl">Footer Links</h4>
                <div className="">
                  <ul className="space-y-3">
                    {footerLinks.map((link) => (
                      <li
                        className="hover:scale-105 transition-all duration-200"
                        key={link.label}
                      >
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-xl">Quick Links</h4>
                <div className="mx-auto">
                  <ul className="space-y-2">
                    {footerLinks.map((link) => (
                      <li
                        className="hover:scale-105 transition-all duration-200"
                        key={link.label}
                      >
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-xl">Address</h4>
                <div className="space-y-3">
                  <p>Kera, Addis Ababa</p>
                  <p>+251912345678</p>
                  <div className="flex gap-3">
                    <a href="#">
                      <FaFacebook className="w-8 h-8 hover:text-blue-500 transition-all duration-200" />
                    </a>
                    <a href="#">
                      <FaLinkedin className="w-8 h-8 hover:text-blue-400 transition-all duration-200" />
                    </a>
                    <a href="#">
                      <FaInstagram className="w-8 h-8 hover:text-red-500 transition-all duration-200" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
