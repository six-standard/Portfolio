import * as React from "react";
import { LARGE } from "../../pages";

export const Section = ({ title, children, sliceInPrint }) => {
  return (
    <section
      className={`flex flex-col gap-5 ${sliceInPrint && "print:[page-break-before:_always]"} ${
        title && "pt-10 border-t-[1px] print:border-t-0 print:pt-0 border-t-gray-300"
      }`}
    >
      {title && <h1 className="H1">{title}</h1>}
      {children}
    </section>
  );
};
