import React from "react";

export const TwoWayLayout = ({ unbreakAble, icon, title, date, tabs, children }) => {
  return (
    <div className={`flex gap-3 w-full ${!unbreakAble && "page-break"}`}>
      <div className="w-[250px] flex flex-col gap-4 shrink-0">
        <div className="flex items-center gap-4">
          {icon}
          <h2 className="H2 font-bold leading-none">{title}</h2>
        </div>
        {date && <span className="SPAN font-light text-gray-500">{date}</span>}
        {tabs?.map(({ icon, name, action }) => (
          <div className="flex gap-2 items-center" key={name}>
            {icon}
            {action ? (
              typeof action === "function" ? (
                <button onClick={action} className="SPAN font-medium hover:underline">
                  {name}
                </button>
              ) : (
                <a href={action} className="SPAN font-medium hover:underline">
                  {name}
                </a>
              )
            ) : (
              <span className="SPAN font-medium">{name}</span>
            )}
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col gap-4">{children}</div>
    </div>
  );
};
