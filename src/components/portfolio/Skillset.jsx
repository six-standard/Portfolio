import * as React from "react";
import { List } from "../List";

export const Skillset = ({ title, contents }) => {
  return (
    <div className="w-full flex items-start gap-5">
      <span className="bg-gray-100 w-[225px] shrink-0 block px-2 py-1 text-[20px] font-semibold select-none">
        {title}
      </span>
      <List contents={contents} />
    </div>
  );
};
