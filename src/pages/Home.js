import Main from "../components/Main";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <Main>
      <section>
        <div className="h-[40rem] bg-black relative group overflow-hidden flex items-center justify-center px-4 lg:justify-start">
          <div className="z-20 text-white lg:w-1/2 flex justify-end">
            <div>
              <p className="text-3xl">NEW TREND 2022</p>
              <h1 className="text-6xl font-bold">
                Spring <span className="text-[#23c920]">Collection</span>
              </h1>
              <Link
                to="/zone/products"
                className="mt-5 bg-white w-[10rem]  py-2 flex justify-center items-center gap-3 cursor-pointer group text-black text-lg font-bold hover:bg-[#ff8900] hover:text-white  transition-all "
              >
                <span>SHOP NOW</span>
                <FontAwesomeIcon icon={faAngleRight} size="sm" color="black" />
              </Link>
            </div>
          </div>
          <div className="w-full h-full bg-neutral-900 opacity-60 z-10 absolute top-0 left-0"></div>
          <img
            src="/images/store.jpg"
            alt="store"
            className="absolute top-0 left-0 w-full h-full object-cover object-top transition transform ease-out duration-700 group-hover:scale-110 "
          />
        </div>
      </section>
    </Main>
  );
};

export default Home;
