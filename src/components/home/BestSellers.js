import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { fadeInDown, fadeInUp } from "../../animations/variants";
import { bestSellers } from "../../products/products";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

const BestSellers = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("initial");
    }
  }, [inView, animation]);

  return (
    <section>
      <motion.div
        className="w-full  flex flex-col items-center justify-center gap-20 pt-10 xs:pt-16 min-h-[38rem] relative"
        ref={ref}
        animate={animation}
        initial="initial"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.2,
            },
          },
        }}
      >
        <div className="absolute bottom-0 left-0 w-full h-[55%] bg-[#ffece5]"></div>
        <motion.h2
          className="text-3xl xs:text-4xl relative after:content-[''] after:bg-[#ffece5] after:absolute after:w-full after:h-1/2 after:-bottom-1 after:left-0  after:-z-10"
          variants={fadeInUp}
        >
          Best sellers
        </motion.h2>
        <div
          className="grid z-10 grid-cols-2 xs:grid-cols-2 md:grid-cols-4 gap-4 xs:gap-10 max-w-[78rem] w-full grow px-3 pb-6
        "
        >
          {bestSellers.map((item) => (
            <motion.div
              className="w-full h-full flex items-center justify-center bg-[#e8e8ea] relative after:absolute after:content-[''] after:bg-[#2b2b2b9c] after:w-full after:bottom-0 after:left-0 after:h-full after:scale-y-0  after:transition-transform after:duration-300 after:origin-top hover:after:origin-bottom hover:after:scale-y-100 after:pointer-events-none"
              variants={fadeInDown}
              key={v4()}
            >
              <Link
                to={`/Zone/shop/${item.name.replace(/\s/g, "-")}`}
                className=" relative w-full h-full flex flex-col items-center justify-center group"
              >
                <p className="absolute z-20 hidden group-hover:block text-2xl text-white font-semibold text-center">
                  {item.name}
                </p>
                <img
                  src={item.image}
                  className=" absolute max-w-[90%] max-h-[90%] object-cover"
                  alt={`${item.name}`}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BestSellers;
