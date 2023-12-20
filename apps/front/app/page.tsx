import { SearchBar } from "./Searchbar";
import { CategoryList } from "./_categories/CategoryList";
export default function Home() {
  return (
    <main>
      <h1 className="select-none text-center font-parisienne text-8xl font-bold">
        Tout sur ma ville
      </h1>
      <SearchBar />
      <CategoryList />
    </main>
  );
}
