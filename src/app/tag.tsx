import React from "react";

export const Tag = ({
  tagName,
  iconComponent,
  id,
  tailwindColor,
  backgroundTailwindColor
}: {
  tagName: string;
  iconComponent: any;
  id: number;
  tailwindColor: string;
  backgroundTailwindColor: string;
}) => {
  return (
    <div
      className={`tag flex gap-1.5 px-2.5 py-1 cursor-pointer items-center text-${tailwindColor} bg-${backgroundTailwindColor}`}
      key={id}
    >
      {iconComponent({ className: `fill-${tailwindColor} h-3` })}
      <span className={`select-none uppercase font-bold text-sm text-${tailwindColor} font-bayon`}>{tagName}</span>
    </div>
  );
};
