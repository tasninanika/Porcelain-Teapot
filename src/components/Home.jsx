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
import { Link } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://espresso-emporium-server-nine.vercel.app/coffees")
      .then((res) => res.json())
      .then((data) => {
        setCoffees(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {/* Hero Banner */}
      <div className="hero h-[550px] lg:flex justify-center items-center">
        <div className="lg:w-2/5"></div>
        <div className="lg:w-2/5 p-2 space-y-2">
          <h1 className="text-4xl title text-white">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-white text-xs">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="btn bg-[#E3B577] shadow-none title text-xl hover:bg-transparent hover:text-white">
            Learn More
          </button>
        </div>
      </div>
      <div className="bg-[#ECEAE3]">
        <div className="w-[70%] mx-auto p-5">
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
            {/* Feature One */}
            <div className="space-y-1">
              <div>
                <img src={Cup} alt="" className="w-11" />
              </div>
              <h2 className="title text-[#331A15] text-xl">Awesome Aroma</h2>
              <p className="text-xs text-[#1B1A1A]">
                You will definitely be a fan of the design & aroma of your
                coffee
              </p>
            </div>
            {/* Feature Two */}
            <div className="space-y-1">
              <div>
                <img src={Badge} alt="" className="w-11" />
              </div>
              <h2 className="title text-[#331A15] text-xl">High Quality</h2>
              <p className="text-xs text-[#1B1A1A]">
                We served the coffee to you maintaining the best quality
              </p>
            </div>
            {/* Feature Three */}
            <div className="space-y-1">
              <div>
                <img src={Grains} alt="" className="w-11" />
              </div>
              <h2 className="title text-[#331A15] text-xl">Pure Grades</h2>
              <p className="text-xs text-[#1B1A1A]">
                The coffee is made of the green coffee beans which you will love
              </p>
            </div>
            {/* Feature Four */}
            <div className="space-y-1">
              <div>
                <img src={Coffee} alt="" className="w-11" />
              </div>
              <h2 className="title text-[#331A15] text-xl">Proper Roasting</h2>
              <p className="text-xs text-[#1B1A1A]">
                Your coffee is brewed by first roasting the green coffee beans
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Coffee Section */}
      <div className="lg:w-[70%] w-full mx-auto my-11 p-5">
        <p className="text-center text-xs mb-2">--- Sip & Savor ---</p>
        <h1 className="title text-4xl text-center text-[#331A15]">
          Our Popular Products
        </h1>
        <Link className="flex justify-center items-center my-3" to="/addCoffee">
          <button className="btn title flex justify-center items-center text-white bg-[#E3B577] border-[#331A15] text-shadow text-lg">
            Add Coffee <img className="w-5" src={Cup} alt="" />{" "}
          </button>
        </Link>
        <div className="grid lg:grid-cols-2 grid-cols-1 my-11 gap-5">
          {
            // loading ? <span className="loading loading-dots loading-xl"></span> : ())
            coffees.map((coffee) => (
              <CoffeeCard
                key={coffee._id}
                coffee={coffee}
                coffees={coffees}
                setCoffees={setCoffees}
              ></CoffeeCard>
            ))
          }
        </div>
      </div>

      {/* Instagram and Gallery Section */}
      <div className="lg:w-[70%] w-full mx-auto my-11 p-5">
        <p className="text-center text-xs mb-2">Follow Us Now</p>
        <h1 className="title text-4xl text-center text-[#331A15]">
          Follow on Instagram
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 my-11">
          <div>
            <img src={Cup1} alt="" />
          </div>
          <div>
            <img src={Cup2} alt="" />
          </div>
          <div>
            <img src={Cup3} alt="" />
          </div>
          <div>
            <img src={Cup4} alt="" />
          </div>
          <div>
            <img src={Cup5} alt="" />
          </div>
          <div>
            <img src={Cup6} alt="" />
          </div>
          <div>
            <img src={Cup7} alt="" />
          </div>
          <div>
            <img src={Cup8} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
