const Main = ({ children }) => {
  return (
    <main className="flex flex-col min-h-screen mb-[60px]">
      <div className="w-full h-[110px] xs:h-[60px]"></div>
      {children}
    </main>
  );
};

export default Main;
