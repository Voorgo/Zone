import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fadeInRight, fadeInUp } from "../animations/variants";
import BestSellers from "../components/home/BestSellers";
import InfoSection from "../components/home/InfoSection";
import ShopWithUs from "../components/home/ShopWithUs";
import Main from "../components/Main";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Main>
      <section>
        <div className="h-[45rem] relative group overflow-hidden flex items-center justify-center px-4 lg:justify-start">
          <div className="z-20 text-white lg:w-1/2 flex justify-end">
            <motion.div initial="initial" animate="visible">
              <motion.div>
                <motion.p variants={fadeInUp} className="text-3xl">
                  NEW TREND 2022
                </motion.p>
                <motion.h1 variants={fadeInUp} className="text-6xl font-bold">
                  Spring <span className="text-[#23c920]">Collection</span>
                </motion.h1>
              </motion.div>
              <motion.div variants={fadeInRight}>
                <Link
                  to="/Zone/shop"
                  className="mt-5 bg-white w-[10rem]  py-2 flex justify-center items-center gap-3 cursor-pointer group text-black text-lg font-bold hover:bg-[#ff8900] hover:text-white  transition-all "
                >
                  <span>SHOP NOW</span>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    size="sm"
                    color="black"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
          <div className="w-full h-full bg-neutral-900 opacity-60 z-10 absolute top-0 left-0"></div>
          <img
            src={require("../images/store.jpg")}
            alt="store"
            className="absolute top-0 left-0 w-full h-full object-cover object-top transition transform ease-out duration-700 group-hover:scale-110 "
          />
        </div>
      </section>
      <BestSellers />
      <InfoSection />
      <ShopWithUs />
    </Main>
  );
};

export default Home;
