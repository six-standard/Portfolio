import * as React from "react";

export const Section = ({ title, children, sliceInPrint }) => {
  return (
    <section
      className={`flex flex-col gap-7 ${sliceInPrint && "print:[page-break-before:_always]"} ${
        title && "pt-10 border-t-[1px] border-t-gray-300"
      }`}
    >
      {title && <h1 className="text-[35px] font-bold leading-none select-none">{title}</h1>}
      {children}
    </section>
  );
};
