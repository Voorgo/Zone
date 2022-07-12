const InfoSection = () => {
  return (
    <section>
      <div className="w-full h-[40rem] mt-[60px] bg-[#e8e8ea] flex flex-col ">
        <div className="grow w-full h-1/2 flex items-center">
          <div className="w-1/3 h-full md:w-1/2 ">
            <img
              src={require("../../images/info1.jpg")}
              className="w-full h-full object-cover"
              alt="model presentation"
            />
          </div>
          <div className="flex flex-col flex-wrap w-1/2 items-center justify-center px-8 text-center gap-6 grow">
            <h2 className="font-semibold text-lg xs:text-3xl">
              Be the first to know about new styles
            </h2>
            <p className="text-base xs:text-2xl">
              We believe that people should have access to the latest brands and
              fashion trends, no matter their post code.
            </p>
          </div>
        </div>
        <div className="grow w-full h-1/2 flex items-center flex-row-reverse text-center ">
          <div className="w-1/3 h-full md:w-1/2">
            <img
              src={require("../../images/info2.jpg")}
              className="w-full h-full object-cover"
              alt="model"
            />
          </div>
          <div className="flex w-1/2 grow items-center justify-center px-8 ">
            <p className="text-base xs:text-2xl ">
              Explore our collection of fashion and order with free delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
