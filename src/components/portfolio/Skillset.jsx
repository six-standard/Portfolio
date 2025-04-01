import * as React from "react";
import { List } from "../List";

export const Skillset = ({ title, contents }) => {
  return (
    <div className="w-full flex items-start gap-5">
      <h3 className="bg-gray-100 w-[225px] shrink-0 block px-2 py-1 H3">{title}</h3>
      <List contents={contents} />
    </div>
  );
};
