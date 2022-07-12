import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { fadeInLeftAbout, fadeInRightAbout } from "../animations/variants";
import Main from "../components/Main";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("initial");
    }
  }, [animation, inView]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Main>
      <section>
        <div className="h-[45rem] relative group overflow-hidden flex items-center justify-center px-4 lg:justify-end">
          <img
            src={require("../images/about.jpg")}
            alt="store"
            className="absolute top-0 left-0 w-full h-full object-cover object-top transition transform ease-out duration-700 group-hover:scale-110 "
          />
          <div className="z-20 text-white max-w-[35rem] flex flex-col justify-end gap-3 lg:mr-40">
            <h2 className="text-4xl text-center md:text-6xl md:text-start">
              Who are we?
            </h2>
            <p className="text-xl text-center md:text-2xl md:text-start">
              Zone focuses on fashionable and sustainable clothing with an
              affordable price tag. We are currently working with 2 different
              suppliers from Europe to provide incredible quality.
            </p>
          </div>
        </div>
        <motion.div
          className="w-full flex flex-col mt-[60px]"
          ref={ref}
          initial="initial"
          animate={animation}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.4,
              },
            },
          }}
        >
          <div className="max-w-[78rem] flex flex-col  gap-10 self-center">
            <h2 className="text-3xl xs:text-4xl self-center relative after:content-[''] after:bg-[#ffece5] after:absolute after:w-full after:h-1/2 after:-bottom-1 after:left-0  after:-z-10">
              About Us
            </h2>
            <div className="flex flex-col gap-12 xl:min-w-[78rem] px-4">
              <motion.div
                variants={fadeInRightAbout}
                className="max-w-[50rem] text-lg  bg-[#f5a7a7] p-6 shadow-[12px_12px_0_2px_#ffece5]"
              >
                It’s about that upcoming party, the catch up with friends and
                all the excitement that comes with it. We put our customers at
                the heart of everything we do; this helps us to understand how
                they feel when searching for products and ultimately, making
                sure they feel great when wearing them, whatever the occasion.
              </motion.div>
              <motion.div
                variants={fadeInLeftAbout}
                className="max-w-[50rem] text-lg bg-[#fad7b0] p-6 self-end shadow-[12px_12px_0_2px_#ffece5]"
              >
                By reacting quickly to the latest trends and interpreting them
                in a way that’s wearable for our customers, we can help them
                find a look that fits their personal style. So whether they’re
                looking for the latest trends, or simply that perfect party
                dress, we’ve got it covered.
              </motion.div>
              <motion.div
                variants={fadeInRightAbout}
                className="max-w-[50rem] text-lg bg-[#f3cab0] p-6 shadow-[12px_12px_0_2px_#ffece5]"
              >
                We’re passionate about what we do and most importantly, we have
                fun doing it. Sharing this positivity with our customers is
                important to us. By weaving our brand through everything we do,
                from our people and store environments, to marketing and social
                media, we make sure our customers not only look good but feel
                great too.
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </Main>
  );
};

export default About;
