import React from "react";

export const Layout = ({ children, ...rest }) => {
  return (
    <main className="w-full h-screen">
      <header className="w-full h-[180px] bg-[#448F5E] print:h-[90px]" />
      <div className="w-full print:w-[900px] min-h-full flex justify-center transition-all duration-300 bg-gray-50 print:bg-white">
        <div {...rest}>{children}</div>
      </div>
    </main>
  );
};
