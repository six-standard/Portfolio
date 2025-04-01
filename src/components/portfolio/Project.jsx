import * as React from "react";
import { TwoWayLayout } from "../TwoWayLayout";

export const Project = ({ icon, name, banner, date, links, sections }) => {
  return (
    <TwoWayLayout
      unbreakAble
      title={name}
      icon={icon}
      date={date}
      tabs={links.map(({ icon, name, href }) => ({
        icon,
        name,
        action: href,
      }))}
      noBackgroundStyle
    >
      {banner}
      {sections?.map(({ title, content, breakAble = true }) => (
        <div
          className={`bg-gray-100 rounded-lg px-5 py-[22px] flex flex-col gap-1 ${
            breakAble && "page-break"
          }`}
        >
          <h2 className="H2">{title}</h2>
          <div className="flex flex-col gap-4">{content}</div>
        </div>
      ))}
    </TwoWayLayout>
  );
};
