import Filter from "@/components/Filter";
import SearchInput from "@/components/SearchInput";
import SingleCountry from "@/components/SingleCountry";
import { getAllCountries, getByRegion } from "@/utils/actions";
import { useRouter } from "next/navigation";
import Link from "next/link";
interface RegionProps {
  params: {
    region: string;
  };
}

export default async function Region({ params }: RegionProps) {
  const countriesByRegion = await getByRegion(params.region);

  return (
    <section className="w-11/12 pt-[4rem]">
      <div className="flex justify-between">
        <SearchInput />
        <Filter />
      </div>

      <div className="flex justify-between flex-wrap gap-12">
        {countriesByRegion.map((country: any) => {
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
