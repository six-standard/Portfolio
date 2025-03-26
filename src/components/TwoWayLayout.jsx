import React from "react";

export const TwoWayLayout = ({ icon, title, date, tabs, children }) => {
  return (
    <div className="flex gap-6 w-full">
      <div className="w-[225px] flex flex-col gap-4 shrink-0">
        <div className="flex items-center gap-4">
          {icon}
          <h2 className="text-[20px] font-bold">{title}</h2>
        </div>
        {date && <span className="text-[17px] font-light text-gray-500">{date}</span>}
        {tabs?.map(({ icon, name, action }) => (
          <div className="flex gap-2 items-center" key={name}>
            {icon}
            {action ? (
              typeof action === "function" ? (
                <button onClick={action} className="text-[17px] font-medium hover:underline">
                  {name}
                </button>
              ) : (
                <a href={action} className="text-[17px] font-medium hover:underline">
                  {name}
                </a>
              )
            ) : (
              <span className="text-[17px] font-medium">{name}</span>
            )}
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col gap-4">{children}</div>
    </div>
  );
};
