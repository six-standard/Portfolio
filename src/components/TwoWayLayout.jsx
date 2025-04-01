import React from "react";

export const TwoWayLayout = ({
  unbreakAble,
  noBackgroundStyle,
  icon,
  title,
  date,
  tabs,
  children,
}) => {
  return (
    <div
      className={`flex gap-5 w-full ${!unbreakAble && "page-break"} ${
        noBackgroundStyle ? "px-0 py-0" : "bg-gray-100 px-5 py-[22px] rounded-lg"
      } `}
    >
      <div className="w-[240px] flex flex-col gap-4 shrink-0">
        <div
          className={`flex gap-3 items-center ${
            !noBackgroundStyle && "bg-gray-200"
          } w-full shrink-0 px-2 py-1 H3 rounded-lg`}
        >
          {icon}
          <h3 className="H3 font-bold">{title}</h3>
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
      <div className="w-[638px] overflow-hidden flex flex-col gap-5">{children}</div>
    </div>
  );
};
