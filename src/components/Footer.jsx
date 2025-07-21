import "./Styles.css";
import headerLogo from "../images/more/logo1.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMap,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#F4F3F0]">
      <div className="p-11">
        <div className="w-[70%] mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div className="space-y-2">
              <img src={headerLogo} className="w-11" />
              <h1 className="title text-3xl text-[#331A15]">Porcelain Tea</h1>
              <p className="text-[#1B1A1A]">
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments, to share with your best companion.
              </p>
              <div className="text-2xl flex gap-2">
                <p>
                  <FaFacebook />
                </p>
                <p>
                  <FaTwitter />
                </p>
                <p>
                  <FaInstagram />
                </p>
                <p>
                  <FaLinkedin />
                </p>
              </div>
              <h1 className="title text-3xl text-[#331A15]">Get in Touch</h1>
              <div className="flex items-center gap-5 space-y-2">
                <div className="space-y-2 mt-2.5">
                  <p>
                    <FaPhone />
                  </p>
                  <p>
                    <FaMessage />
                  </p>
                  <p>
                    <FaMap />
                  </p>
                </div>
                <div>
                  <p className="text-base">+8801234567890</p>
                  <p className="text-base">jarintasnin27@gmail.com</p>
                  <p className="text-base">
                    Port Officers Colony, Chattogram, Bangladesh
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <h1 className="title text-3xl text-[#331A15] text-center">
                Connect with Us
              </h1>
              <div className="w-full space-y-2">
                <input
                  className="input w-full"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="input w-full"
                  type="text"
                  placeholder="Email"
                />
                <input
                  className="textarea w-full"
                  type="text"
                  placeholder="Message"
                />
                <input
                  className="btn rounded-full border-[#331A15]"
                  type="submit"
                  value={"Send Message"}
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-2 title footer-bg text-center text-white text-lg">
        <h1>
          Copyright Porcelain Tea ! All Rights Reserved{" "}
          <a href="https://github.com/tasninanika" target="_blank">
            Jarin Tasnin Anika
          </a>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
