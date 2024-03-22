import SingleCountry from "@/components/SingleCountry";
import { getAllCountries } from "@/utils/actions";

export default async function Home() {
  const countries = await getAllCountries();

  return (
    <section className="w-11/12 pt-[4rem]">
      <div>
        <input type="text" placeholder="Search for a country" />
      </div>

      <div className="flex justify-between flex-wrap gap-12">
        {countries.map((country: any) => {
          const { name, population, region, flags } = country;
          // const capitalName = capital[0] ? capital[0] : "No Capital";
          const capital =
            country.capital && country.capital[0]
              ? country.capital[0]
              : "No Capital";

          const flagSrc = flags.png.substring(
            "https://flagcdn.com/w320/".length
          );

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
    </section>
  );
}
