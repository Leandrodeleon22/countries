"use client";

import React from "react";
import Image from "next/image";

interface CountryProps {
  countryName: string;
  population: number;
  region: string;
  capital: string;
  flagImage: string;
  subRegion: string;
  topLevelDomain: string;
  currencies: string;
  languages: string[];
  nativeName: string;
}

const Country: React.FC<CountryProps> = ({
  countryName,
  population,
  region,
  flagImage,
  capital,
  nativeName,
}) => {
  const imageLoader = ({ src }: any) => {
    return `https://flagcdn.com/w320/${src}`;
  };
  return (
    <div className="flex justify-between  w-full">
      <div className="w-[35rem] h-[20rem] relative">
        <Image
          loader={imageLoader}
          src={flagImage}
          fill={true}
          sizes="300"
          priority={true}
          // width={290}
          // height={500}
          alt={countryName}
        />
      </div>
      <section className="bg-green-400 w-1/2 flex items-center">
        <div className="bg-slate-500 w-full">
          <h1>{nativeName}</h1>
          <div className="bg-yellow-400 flex ">
            <div>
              <p>{"Native Name"}</p>
              <p>{"Population"}</p>
              <p>{"Region"}</p>
              <p>{"Sub Region"}</p>
              <p>{"capital"}</p>
            </div>
            <div>
              <p>{"top Level Domain"}</p>
              <p>{"Currencies"}</p>
              <p>{"Languages"}</p>
            </div>
          </div>
          <div>
            <div>
              <p>Border Countries</p>
              {/* <Link>countries</Link> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Country;
