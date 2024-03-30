import { getByName } from "@/utils/actions";

import Link from "next/link";
import React from "react";

import Country from "@/components/Country";

const page = async ({ params }: { params: { name: string } }) => {
  const country = await getByName(params.name);

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
  } = country[0];

  const nativeName = name.nativeName.eng?.official || name.common;
  const currency = Object.keys(currencies)[0];
  const language = Object.values(languages);

  const flagSrc = flags.png.substring("https://flagcdn.com/w320/".length);
  return (
    <div className="h-screen w-full px-16">
      <div className="my-20">
        <Link href="/" className="bg-red-800 px-9 py-2  rounded-sm">
          Back
        </Link>
      </div>

      <Country
        countryName={name}
        population={population}
        region={region}
        capital={capital}
        flagImage={flagSrc}
        subRegion={subregion}
        topLevelDomain={tld}
        currencies={currency}
        languages={language}
        nativeName={nativeName}
      />
    </div>
  );
};

export default page;
