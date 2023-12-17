import React from "react";
import { CategoryType } from "./categories";
import clsx from "clsx";
export const Category = ({
  category,
  handleSelectedCategories,
}: {
  category: CategoryType;
  handleSelectedCategories: (id: string) => void;
}) => {
  const handleKeyUp = (event: any) => {
    if (event.key === "Enter") {
      handleSelectedCategories(category.id);
    }
  };
  return (
    <li
      className={clsx("flex cursor-pointer items-center gap-1.5 px-2.5 py-1", {
        [`${category.color} ${category.background} ${category.fill}`]:
          category.selected,
        "bg-gray-200 fill-gray-700 text-gray-700 opacity-60":
          !category.selected,
      })}
      onClick={() => handleSelectedCategories(category.id)}
      onKeyUp={handleKeyUp}
    >
      {category.iconComponent({
        className: `fill-inherit h-3`,
      })}
      <span className={`select-none font-bayon text-sm font-bold uppercase`}>
        {category.tagName}
      </span>
    </li>
  );
};
