import React from "react";

export const List = ({ contents }) => {
  const getChildren = (items) => {
    return (
      <ul className="list-disc pl-6 flex flex-col gap-3 w-full">
        {items.map((i) =>
          typeof i === "string" ? (
            <li
              className="w-full break-words whitespace-pre-wrap break-keep SPAN leading-snug"
              dangerouslySetInnerHTML={{
                __html: i
                  .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
                  .replace(
                    /!\[(.*?)\]\((.*?)\)/g,
                    '<a href="$2" style="color:#9ca3af; font-weight:600; white-space: nowrap" class="hover_underline" target="_blank">$1</a>'
                  ),
              }}
            />
          ) : (
            getChildren(i)
          )
        )}
      </ul>
    );
  };

  return getChildren(contents);
};
