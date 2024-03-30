import React from "react";
import { getAllCountries } from "@/utils/actions";
import SingleCountry from "./SingleCountry";
import { formatPopulation } from "@/utils/formatPopulation";
const Countries = async ({
  query,
  region,
}: {
  query: string;
  region: string;
}) => {
  const countries = await getAllCountries(query, region);

  return (
    <div className="flex justify-between sm:justify-center flex-wrap gap-12">
      {countries.map((country: any) => {
        const { name, population, region, flags } = country;
        // const capitalName = capital[0] ? capital[0] : "No Capital";
        const capital =
          country.capital && country.capital[0]
            ? country.capital[0]
            : "No Capital";

        const flagSrc = flags.png.substring("https://flagcdn.com/w320/".length);

        // const flagSrc = flags.png.substring(
        //   "https://flagcdn.com/w320/".length
        // );

        return (
          <SingleCountry
            key={name.common}
            region={region}
            population={formatPopulation(population)}
            countryName={name.common}
            capital={capital}
            flagImage={flagSrc}
          />
        );
      })}
    </div>
  );
};

export default Countries;
