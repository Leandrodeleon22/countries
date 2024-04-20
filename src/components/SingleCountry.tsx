"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SingleCountryProps {
  countryName: string;
  population: string;
  region: string;
  capital: string;
  flagImage: string;
}
const SingleCountry: React.FC<SingleCountryProps> = ({
  countryName,
  population,
  region,
  capital,
  flagImage,
}) => {
  const imageLoader = ({ src }: any) => {
    return `https://flagcdn.com/w320/${src}`;
  };
  return (
    <Link
      href={`/${countryName.toLowerCase()}`}
      className="w-[300px] hover:scale-105 transition ease-in-out  h-full drop-shadow-lg dark:bg-slate-700 bg-white b rounded-md overflow-hidden"
    >
      <div>
        <div className="w-full h-[200px]  relative drop-shadow-sm">
          <Image
            loader={imageLoader}
            src={flagImage}
            fill={true}
            sizes="100"
            priority={true}
            // width={290}
            // height={500}
            alt={countryName}
          />
        </div>

        <div className="p-[28px]">
          <p className="pb-[28px] text font-bold text-[1.2rem]">
            {countryName}
          </p>
          <p>Population: {population}</p>
          <p>Region: {region}</p>
          <p>Capital: {capital}</p>
        </div>
      </div>
    </Link>
  );
};

export default SingleCountry;
