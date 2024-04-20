"use server";

import axios from "axios";

export const getAllCountries = async (
  search?: string,
  filterByRegion?: string
) => {
  try {
    if (search) {
      const url = `https://restcountries.com/v3.1/name/${search}`;
      const response = await axios.get(url);

      return response.data;
    }

    if (filterByRegion) {
      const url: string = `https://restcountries.com/v3.1/region/${filterByRegion}`;

      const response = await axios.get(url);
      return response.data;
    }
    const url: string = "https://restcountries.com/v3.1/all";
    // const url: string =
    //   "https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,region,flags,subregion,tld,borders,languages";

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    return [];
  }
};

// export const getByRegion = async (region: string) => {
//   const url: string = `https://restcountries.com/v3.1/region/${region.toLocaleLowerCase()}`;

//   const response = await axios.get(url);
//   return response.data;
// };

export const getByName = async (name: string) => {
  console.log(name);
  const url: string = `https://restcountries.com/v3.1/name/${name}`;

  const response = await axios.get(url);
  return response.data;
};

// https://restcountries.com/v3.1/name/canada
