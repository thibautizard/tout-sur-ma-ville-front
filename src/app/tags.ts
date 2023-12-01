import { EducationIcon } from "@tsv/app/icons/education";
import { FactoryIcon } from "@tsv/app/icons/factory";
import { BabyIcon } from "@tsv/app/icons/baby";
import { PoliticsIcon } from "@tsv/app/icons/politics";

export const tags = [
  {
    id: 1,
    tagName: "Demographie",
    iconComponent: BabyIcon,
    tailwindColor: "green-900",
    backgroundTailwindColor: "green-100"
    // text-green-900 bg-green-100 fill-green-900
  },
  {
    id: 2,
    tagName: "Economie",
    iconComponent: FactoryIcon,
    tailwindColor: "yellow-700",
    backgroundTailwindColor: "yellow-100"
    // text-yellow-700 bg-yellow-100 fill-yellow-700
  },
  {
    id: 3,
    tagName: "Education",
    iconComponent: EducationIcon,
    tailwindColor: "purple-900",
    backgroundTailwindColor: "purple-200"
    // text-purple-900 bg-purple-200 fill-purple-900
  },
  {
    id: 4,
    tagName: "Politique",
    iconComponent: PoliticsIcon,
    tailwindColor: "blue-900",
    backgroundTailwindColor: "blue-200"
    // text-blue-900 bg-blue-200 fill-blue-900
  }
];
