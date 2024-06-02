"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CountryProps {
  id: number;
  countryName: string;
  population: string;
  region: string;
  capital: string;
  flagImage: string;
  subRegion: string;
  topLevelDomain: string;
  currencies: string;
  languages: any;
  nativeName: string;
  borders: any;
}

const Country: React.FC<CountryProps> = ({
  countryName,
  population,
  region,
  flagImage,
  capital,
  nativeName,
  subRegion,
  topLevelDomain,
  currencies,
  languages,
  borders,
}) => {
  const imageLoader = ({ src }: any) => {
    return `https://flagcdn.com/w320/${src}`;
  };

  const sectionOne = [
    { id: 1, name: "Native Name: ", value: nativeName },
    { id: 2, name: "Population: ", value: population },
    { id: 3, name: "Region: ", value: region },
    { id: 4, name: "Sub Region: ", value: subRegion },
    { id: 5, name: "Capital: ", value: capital },
  ];

  const sectionTwo = [
    { id: 6, name: "Top Level Domain: ", value: topLevelDomain },
    { id: 7, name: "Currencies: ", value: currencies },
    { id: 8, name: "Languages: ", value: languages },
  ];

  return (
    <div className="flex justify-between  w-full ">
      <div className="w-[35rem] h-[20rem] relative mr-8">
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
      <section className=" w-1/2 flex items-center">
        <div className=" w-full">
          <h1 className="text-[1.5rem] mb-[2rem] font-semibold">
            {nativeName}
          </h1>
          <div className="flex">
            <div className="mr-44">
              {sectionOne.map((el: any) => {
                return (
                  <p key={el.id}>
                    {" "}
                    <span className="font-medium">{el.name}</span>{" "}
                    <span className="text-slate-700 dark:text-slate-400">
                      {el.value}
                    </span>{" "}
                  </p>
                );
              })}
              {/* <p>
                <span>Native Name: </span>{" "}
                <span className="text-slate-300">{nativeName}</span>
              </p>

              <p>
                <span>Population: </span>{" "}
                <span className="text-slate-300">{population}</span>
              </p>

              <p>
                <span>Region: </span>{" "}
                <span className="text-slate-300">{region}</span>
              </p>

              <p>
                <span>Sub Region: </span>{" "}
                <span className="text-slate-300"> {subRegion}</span>
              </p>

              <p>
                <span>Capital: </span>{" "}
                <span className="text-slate-300">{capital}</span>
              </p> */}
            </div>
            <div>
              {sectionTwo.map((el: any) => {
                return (
                  <p key={el.id}>
                    {" "}
                    <span className="font-medium">{el.name}</span>
                    <span className="text-slate-700 dark:text-slate-400">
                      {el.value}
                    </span>{" "}
                  </p>
                );
              })}
              {/* <p>
                <span>Top Lemevel Domain: </span>{" "}
                <span className="text-slate-300">{topLevelDomain}</span>
              </p>
              <p>
                <span>Currencies: </span>{" "}
                <span className="text-slate-300">{currencies}</span>
              </p>
              <p>
                <span>Languages: </span>
                <span className="text-slate-300"> {languages.join(", ")}</span>
              </p> */}
            </div>
          </div>
          <div className="mt-8">
            <div className="flex">
              <span className="mr-4">Border Countries: </span>

              {borders.map((border: any) => {
                return (
                  <div key={border.id} className="flex items-center">
                    <Link
                      className="text-slate-30 hover:scale-105 transition ease-in-out bg-slate-50 dark:bg-slate-700 mr-2 px-2 py-1 rounded-sm shadow-md"
                      href={`/${border.id}`}
                    >
                      {border.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Country;
