import * as React from "react";
import { TwoWayLayout } from "../TwoWayLayout";

export const Project = ({ icon, name, banner, date, links, sections }) => {
  return (
    <TwoWayLayout
      title={name}
      icon={icon}
      date={date}
      tabs={links.map(({ icon, name, href }) => ({
        icon,
        name,
        action: href,
      }))}
    >
      {banner}
      {sections?.map(({ title, content }) => (
        <div className="flex flex-col gap-1 page-break">
          <h2 className="font-bold text-[22px]">{title}</h2>
          {content}
        </div>
      ))}
    </TwoWayLayout>
  );
};
