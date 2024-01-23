import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { House, MagnifyingGlass } from "@phosphor-icons/react";
import { SearchResultItem } from "../components/SearchResultItem";

export const SearchResult = () => {
  const searchResult = true;
  // TODO: integratereact-hook-form for search and react-query to fetch results from backend
  return (
    <section className="mb-3 rounded-3xl bg-secondary-300 p-3 lg:px-10">
      <Breadcrumbs
        className="flex justify-end rounded-3xl text-accent-950"
        variant="solid"
        radius="lg"
        underline="hover"
        itemClasses={{
          base: "!text-accent-950",
          item: "!text-accent-950",
          separator: "!text-accent-950",
        }}
        classNames={{
          list: "bg-secondary-200",
        }}
      >
        <BreadcrumbItem href="/" startContent={<House />}>
          Home
        </BreadcrumbItem>
        <BreadcrumbItem startContent={<MagnifyingGlass />}>
          Search
        </BreadcrumbItem>
      </Breadcrumbs>
      <h3 className="flex items-center justify-end gap-3 space-y-1 py-4 text-4xl font-bold uppercase leading-8 text-accent-950 sm:text-5xl md:justify-end">
        Search Results
        <MagnifyingGlass
          weight="fill"
          className="h-auto w-9 max-[396px]:w-20 sm:w-12"
        />
      </h3>
      {searchResult ? (
        <div className="mb-5 line-clamp-2 text-xl font-semibold text-accent-950">
          Matching results for &quot;search query&quot;
        </div>
      ) : (
        <>
          <div className="mb-2 line-clamp-2 text-xl font-semibold text-accent-950">
            No results found for &quot;search query&quot;
          </div>
          <div className="mb-5  text-3xl font-bold text-accent-950">
            But here are some products you may like:
          </div>
        </>
      )}
      <SearchResultItem />
    </section>
  );
};
