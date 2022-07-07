import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col gap-4  bg-[#e8e8ea] p-10 md:flex-row">
      <div className="w-full h-full flex flex-col gap-3 items-center text-center md:items-start md:text-start ">
        <div className="text-2xl font-semibold">Join the Zone Family</div>
        <div className="text-[#646464]">
          Get your weekly Fashionify newsletter straight to your mailbox.
        </div>
        <div>
          <input
            type="email"
            aria-label="Enter your email"
            placeholder="Enter your email"
            className="p-1 border border-[#646464] w-full md:w-auto"
          />
          <button className="bg-[#ff8900] h-full w-full py-1 px-5 border border-[#ff8900] text-white font-bold md:w-auto">
            Subscribe
          </button>
        </div>
      </div>
      <div className="w-full h-full flex">
        <div className="flex flex-col gap-3 flex-[1_1] justify-center pl-5">
          <div className="text-xl font-semibold">Zone</div>
          <Link to="/about" className="underline text-[#646464] text-base">
            About Us
          </Link>
          <div className="text-[#646464] text-base">FAQ</div>
        </div>
        <div className="flex flex-col  gap-3 flex-[1_1] justify-center pl-5 ">
          <div className="text-xl font-semibold">Contact</div>
          <div className="text-[#646464] text-base">Email</div>
          <a
            href="https://github.com/Voorgo"
            className="text-[#646464] text-base underline"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
