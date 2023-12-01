import { SearchBar } from "@tsv/app/search-bar";
import { Tag } from "@tsv/app/tag";
import { tags } from "./tags";
export default function Home() {
  return (
    <main>
      <h1 className="text-8xl font-bold text-center font-parisienne select-none">Tout sur ma ville</h1>
      <SearchBar />
      <ul className="flex justify-center w-full gap-2 my-2">{tags.map(Tag)}</ul>
    </main>
  );
}
