import * as React from "react";

export const Contacts = ({ contents }) => (
  <ul className="flex flex-col gap-3">
    {contents.map(({ icon, href, content }) => (
      <li className="flex gap-4 items-center font-medium text-[15px]" key={content}>
        {icon}
        <a href={href ? href : content} className="hover:underline">
          {content}
        </a>
      </li>
    ))}
  </ul>
);
