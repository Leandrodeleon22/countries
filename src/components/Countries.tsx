import React from "react";
import { getAllCountries } from "@/utils/actions";
import SingleCountry from "./SingleCountry";
const Countries = async ({ query }: { query: string }) => {
  const countries = await getAllCountries(query);

  return (
    <div className="flex justify-between flex-wrap gap-12">
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
            population={population}
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
