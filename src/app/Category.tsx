import React from "react";
import { CategoryType } from "./categories";

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
      className={`tag flex cursor-pointer items-center gap-1.5 px-2.5 py-1 ${category.color} ${category.background}`}
      onClick={() => handleSelectedCategories(category.id)}
      onKeyUp={handleKeyUp}
    >
      {category.iconComponent({
        className: `${category.fill} h-3`,
      })}
      <span
        className={`select-none text-sm font-bold uppercase text-${category.color} font-bayon`}
      >
        {category.tagName}
      </span>
    </li>
  );
};
