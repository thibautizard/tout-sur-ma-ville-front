import { Input } from "@tsv/components/ui/input";
import { Tag } from "@tsv/components/ui/tag";

export default function Home() {
  const tags = [
    {
      id: 1,
      tagName: "Demographie",
      iconLink: "",
      color: "#025B00",
      backgroundColor: "#C9FFC8"
    },
    {
      id: 2,
      tagName: "Economie",
      iconLink: "",
      color: "#FBD300",
      backgroundColor: "#FFF3B1"
    },
    {
      id: 3,
      tagName: "Education",
      iconLink: "",
      color: "#C900FB",
      backgroundColor: "#EFCBF8"
    }
  ];
  return (
    <main>
      <h1 className="text-8xl font-bold text-center font-parisienne select-none">Tout sur ma ville</h1>
      <Input />
      <ul className="flex w-full gap-2 my-2">{tags.map(Tag)}</ul>
    </main>
  );
}
