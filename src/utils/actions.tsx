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
