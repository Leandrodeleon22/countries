import { getAllBorders, getCountries, getSingleCountry } from "@/utils/actions";

import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Country from "@/components/Country";
import { formatPopulation } from "@/utils/formatPopulation";

const page = async ({ params }: { params: { name: string } }) => {
  const country = await getSingleCountry(params.name);
  const allCountries = await getCountries();

  const {
    id,
    flags,
    name,
    region,
    population,
    capital,
    subregion,
    tld,
    currencies,
    languages,
    borders,
    nativeName,
  } = country;

  const currency = currencies[0].name;

  const language = Object.values(languages)[0];

  // console.log(languages[0].name);
  // const borderCountries = allCountries
  //   .filter((countryInfo: any) => {
  //     return borders?.includes(countryInfo.cioc);
  //   })
  //   .map((borderCountry: any) => {
  //     return borderCountry.name;
  //   });

  const borderss = await getAllBorders(borders);

  const flagSrc = flags.png.substring("https://flagcdn.com/w320/".length);
  return (
    <div className="h-screen w-full px-16">
      <Link
        href="/"
        className=" hover:scale-105 transition ease-in-out flex my-20 px-7 py-2 items-center justify-center shadow-md bg-slate-50 dark:bg-slate-700 rounded-sm w-[9rem]"
      >
        <FaArrowLeftLong />
        <span className="ml-3">Back</span>
      </Link>

      <Country
        id={id}
        countryName={name}
        population={formatPopulation(population)}
        region={region}
        capital={capital}
        flagImage={flagSrc}
        subRegion={subregion}
        topLevelDomain={tld}
        currencies={currency}
        languages={languages[0].name}
        nativeName={nativeName}
        borders={borderss}
      />
    </div>
  );
};

export default page;
