import Countries from "@/components/Countries";
import Filter from "@/components/Filter";
import SearchInput from "@/components/SearchInput";

import { Suspense } from "react";
export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    region: string;
  };
}) {
  // const countries = await getAllCountries();

  const query = searchParams?.query || "";
  const region = searchParams?.region || "";
  return (
    <section className="w-11/12 pt-[4rem]">
      <div className="flex justify-between md:flex-col md:w-full ">
        <SearchInput />
        <Filter />
      </div>
      <Suspense key={query} fallback={<h1>Loading</h1>}>
        <Countries query={query} region={region} />
      </Suspense>
    </section>
  );
}
