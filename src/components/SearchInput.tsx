"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
// import { useRouter } from "next/router";
import { IoSearch } from "react-icons/io5";
const SearchInput = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, push } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    let params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    push(`${pathname}?${params.toString()}`);
  }, 500);
  return (
    <div className="mb-[4rem] md:mb-4 relative md:w-full ">
      <div className="absolute left-6 top-[14px] z-50">
        <IoSearch size={20} color="gray" />
      </div>

      <input
        type="text"
        placeholder="Search for a country"
        className="h-[3rem] w-[30rem] md:w-full px-[1.5rem] pl-[4rem] drop-shadow-md outline-none rounded-md dark:bg-slate-700"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
};

export default SearchInput;
