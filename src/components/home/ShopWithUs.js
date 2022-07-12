import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { fadeInDown, fadeInRight } from "../../animations/variants";

const ShopWithUs = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("initial");
    }
  }, [inView, animation]);

  return (
    <motion.section
      className="w-full flex flex-col justify-center items-center gap-4 mt-[60px]"
      ref={ref}
      initial="initial"
      animate={animation}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
          },
        },
      }}
    >
      <motion.h2
        className="text-3xl font-semibold text-center relative after:hidden after:content-[''] after:bg-[#ffece5] after:absolute after:w-full after:h-1/2 after:-bottom-1 after:left-0  after:-z-10 xs:after:block"
        variants={fadeInRight}
      >
        Why you'll love shoping with us
      </motion.h2>
      <div className="max-w-[78rem] w-full gap-16 px-4 pt-4 flex-col flex items-center lg:flex-row lg:items-start lg:gap-10 ">
        <motion.div
          variants={fadeInDown}
          className="flex-[1_1] max-w-[35rem] h-full flex flex-col  items-center gap-6 text-center lg:w-full"
        >
          <div className="h-max">
            <div className="w-[16rem] h-[16rem] rounded-full overflow-hidden">
              <img
                src={require("../../images/ethical.jpg")}
                alt="ethical"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h3 className="font-semibold text-xl">Ethical</h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInDown}
          className="flex-[1_1] max-w-[35rem] h-full flex flex-col  items-center gap-6 text-center lg:w-full"
        >
          <div className="h-max">
            <div className="w-[16rem] h-[16rem] rounded-full overflow-hidden">
              <img
                src={require("../../images/sustainable.jpg")}
                alt="sustenaible"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h3 className="font-semibold text-xl">Sustainable</h3>
          <p className="text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInDown}
          className="flex-[1_1] max-w-[35rem] h-full flex flex-col  items-center gap-6 text-center lg:w-full"
        >
          <div className="h-max">
            <div className="w-[16rem] h-[16rem] rounded-full overflow-hidden">
              <img
                src={require("../../images/fashionable.jpg")}
                alt="fashionable"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h3 className="font-semibold text-xl">Fashionable</h3>
          <p className="text-lg">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ShopWithUs;
