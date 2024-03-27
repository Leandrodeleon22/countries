import Countries from "@/components/Countries";
import Filter from "@/components/Filter";
import SearchInput from "@/components/SearchInput";
import SingleCountry from "@/components/SingleCountry";

import Link from "next/link";
import { Suspense } from "react";
export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  // const countries = await getAllCountries();
  // console.log(searchParams);

  const query = searchParams?.query || "";
  return (
    <section className="w-11/12 pt-[4rem]">
      <div className="flex justify-between">
        <SearchInput />
        <Filter />
      </div>
      <Suspense key={query} fallback={<h1>Loading</h1>}>
        <Countries query={query} />
      </Suspense>
    </section>
  );
}
