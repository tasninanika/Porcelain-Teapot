import React, { useEffect, useState } from "react";
import "./Styles.css";
import Cup from "../images/icons/cup_icon.png";
import Badge from "../images/icons/badge.png";
import Grains from "../images/icons/grains.png";
import Coffee from "../images/icons/coffee.png";
import Cup1 from "../images/cups/Cup1.png";
import Cup2 from "../images/cups/Cup2.png";
import Cup3 from "../images/cups/Cup3.png";
import Cup4 from "../images/cups/Cup4.png";
import Cup5 from "../images/cups/Cup5.png";
import Cup6 from "../images/cups/Cup6.png";
import Cup7 from "../images/cups/Cup7.png";
import Cup8 from "../images/cups/Cup8.png";
import BannerCup from "../images/more/banner-cup.jpg";
import BannerCup2 from "../images/more/banner-cup2.jpg";
import { Link } from "react-router-dom";
import TeaCard from "./TeaCard";
import { motion } from "framer-motion";

const Home = () => {
  const [teas, setTeas] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://porcelain-teapot-server.vercel.app/teas")
      .then((res) => res.json())
      .then((data) => {
        setTeas(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {/* Hero Banner */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          {/* Image Section (Left to Right Animation) */}
          <motion.div
            className="relative w-full lg:w-1/2 flex justify-center items-center"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src={BannerCup}
              alt="Banner Cup"
              className="max-w-sm rounded-lg shadow-2xl relative bottom-30 right-40 z-0 -rotate-12"
            />
            {/* Second Image Overlapping */}
            <img
              src={BannerCup2}
              alt="Banner Cup 2"
              className="max-w-sm rounded-lg shadow-xl absolute top-10 left-40 z-10 opacity-90 transform rotate-12"
            />
          </motion.div>

          {/* Text Section (Right to Left Animation) */}
          <motion.div
            className="lg:w-1/2 p-4"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <h1 className="text-4xl title text-[#998f6f]">
              Would you like a Cup of Delicious Tea?
            </h1>
            <p className="py-6 text-black text-sm">
              It's tea time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="btn bg-[#e1d3a2] shadow-none text-white title text-xl hover:bg-transparent hover:text-black border-[#331A15]">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

      <div className="bg-[]">
        <div className="w-[70%] mx-auto p-5">
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-20">
            {/* Feature One */}
            <div className="space-y-1 flex flex-col justify-center items-center">
              <div>
                <img src={Cup} alt="" className="w-11" />
              </div>
              <h2 className="title text-[#998f6f] text-xl">Awesome Aroma</h2>
              <p className="text-xs text-center text-[#1B1A1A]">
                You will definitely be a fan of the design & aroma of your tea
              </p>
            </div>
            {/* Feature Two */}
            <div className="space-y-1 flex flex-col justify-center items-center">
              <div>
                <img src={Badge} alt="" className="w-11" />
              </div>
              <h2 className="title text-[#998f6f] text-xl">High Quality</h2>
              <p className="text-xs text-center text-[#1B1A1A]">
                We served the tea to you maintaining the best quality
              </p>
            </div>
            {/* Feature Three */}
            <div className="space-y-1 flex flex-col justify-center items-center">
              <div>
                <img src={Grains} alt="" className="w-11" />
              </div>
              <h2 className="title text-[#998f6f] text-xl">Pure Grades</h2>
              <p className="text-xs text-center text-[#1B1A1A]">
                The tea is made of the green tea beans which you will love
              </p>
            </div>
            {/* Feature Four */}
            <div className="space-y-1 flex flex-col justify-center items-center">
              <div>
                <img src={Coffee} alt="" className="w-11" />
              </div>
              <h2 className="title text-[#998f6f] text-xl">Proper Roasting</h2>
              <p className="text-xs text-center text-[#1B1A1A]">
                Your tea is brewed by first roasting the green tea beans
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* tea Section */}
      <div className="lg:w-[70%] w-full mx-auto my-11 p-5">
        <p className="text-center text-xs mb-2">--- Sip & Savor ---</p>
        <h1 className="title text-4xl text-center text-[#998f6f]">
          Our Popular Products
        </h1>
        <Link className="flex justify-center items-center my-3" to="/addtea">
          <button className="btn title flex justify-center items-center text-white bg-[#e1d3a2] border-[#331A15] text-shadow text-lg">
            Add tea <img className="w-5" src={Cup} alt="" />{" "}
          </button>
        </Link>
        <div className="grid lg:grid-cols-2 grid-cols-1 my-11 gap-5">
          {teas.map((tea) => (
            <TeaCard
              key={tea._id}
              tea={tea}
              teas={teas}
              setTeas={setTeas}
            ></TeaCard>
          ))}
        </div>
      </div>

      {/* Instagram and Gallery Section */}
      <div className="lg:w-[70%] w-full mx-auto my-11 p-5">
        <p className="text-center text-xs mb-2">Follow Us Now</p>
        <h1 className="title text-4xl text-center text-[#998f6f]">
          Follow on Instagram
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 my-11">
          {[Cup1, Cup3, Cup2, Cup8, Cup7, Cup4, Cup6, Cup5].map((cup, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl">
              <img
                src={cup}
                alt={`Cup ${idx + 1}`}
                className="rounded-xl transform transition-transform duration-500 hover:scale-110 hover:rotate-3"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
