import { getAllCountries, getByName } from "@/utils/actions";

import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Country from "@/components/Country";
import { formatPopulation } from "@/utils/formatPopulation";

const page = async ({ params }: { params: { name: string } }) => {
  const country = await getByName(params.name);
  const allCountries = await getAllCountries();

  const {
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
  } = country[0];
  // console.log(allCountries);
  const nativeName = name.nativeName.eng?.official || name.common;
  const currency = Object.keys(currencies)[0];
  const language = Object.values(languages);
  const borderCountries = allCountries
    .filter((countryInfo: any) => {
      return borders?.includes(countryInfo.cca3);
    })
    .map((borderCountry: any) => {
      return borderCountry.name.common;
    });

  const flagSrc = flags.png.substring("https://flagcdn.com/w320/".length);
  return (
    <div className="h-screen w-full px-16">
      <Link
        href="/"
        className=" flex my-20 px-7 py-2 items-center justify-center shadow-md bg-slate-50 dark:bg-slate-700 rounded-sm w-[9rem]"
      >
        <FaArrowLeftLong />
        <span className="ml-3">Back</span>
      </Link>

      <Country
        countryName={name.common}
        population={formatPopulation(population)}
        region={region}
        capital={capital}
        flagImage={flagSrc}
        subRegion={subregion}
        topLevelDomain={tld}
        currencies={currency}
        languages={language}
        nativeName={nativeName}
        borders={borderCountries}
      />
    </div>
  );
};

export default page;
