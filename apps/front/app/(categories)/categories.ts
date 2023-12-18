import { EducationIcon } from "../icons/education";
import { FactoryIcon } from "../icons/factory";
import { BabyIcon } from "../icons/baby";
import { PoliticsIcon } from "../icons/politics";

export interface CategoryType {
  id: string;
  tagName: string;
  iconComponent: ({ className }: { className: string }) => JSX.Element;
  color: string;
  fill: string;
  background: string;
  selected: boolean;
}

export const CATEGORIES: CategoryType[] = [
  {
    id: "1",
    tagName: "Population",
    iconComponent: BabyIcon,
    color: "text-green-900",
    fill: "fill-green-900",
    background: "bg-green-100",
    selected: true,
  },
  {
    id: "2",
    tagName: "Economie",
    iconComponent: FactoryIcon,
    color: "text-yellow-700",
    fill: "fill-yellow-700",
    background: "bg-yellow-100",
    selected: true,
  },
  {
    id: "3",
    tagName: "Education",
    iconComponent: EducationIcon,
    color: "text-purple-900",
    fill: "fill-purple-900",
    background: "bg-purple-200",
    selected: true,
  },
  {
    id: "4",
    tagName: "Politique",
    iconComponent: PoliticsIcon,
    color: "text-blue-900",
    fill: "fill-blue-900",
    background: "bg-blue-200",
    selected: true,
  },
];
