import React from "react";
import { getCountries } from "@/utils/actions";
import SingleCountry from "./SingleCountry";
import { formatPopulation } from "@/utils/formatPopulation";
const Countries = async ({
  query,
  region,
}: {
  query: string;
  region: string;
}) => {
  const countries = await getCountries(query, region);

  return (
    <div className="flex justify-between sm:justify-center flex-wrap gap-12">
      {countries.map((country: any) => {
        const { id, name, population, region, flags, capital } = country;

        const flagSrc = flags.png.substring("https://flagcdn.com/w320/".length);

        return (
          <SingleCountry
            key={id}
            id={id}
            region={region}
            population={formatPopulation(population)}
            countryName={name}
            capital={capital}
            flagImage={flagSrc}
          />
        );
      })}
    </div>
  );
};

export default Countries;
