// "use server";

import axios from "axios";

import { prisma } from "./prisma";

export const getAllCountries = async (
  search?: string,
  filterByRegion?: string
) => {
  try {
    if (search) {
      const url = `https://restcountries.com/v3.1/name/${search}`;
      const response = await axios.get(url);

      // console.log(response);
      return response;
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
    console.log(error);
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
// export const getCountries = async (
//   search?: string,
//   filterByRegion?: string
// ) => {
//   try {
//     connectToDatabase();

//     if (search) {
//     }

//     const data = await Countries.find();

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getBorders = async () => {
//   try {
//     connectToDatabase();
//     const data = await Countries.find({ borders });

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getCountries = async (
  search?: string,
  filterByRegion?: string
) => {
  try {
    if (search) {
      const response = await prisma.country.findMany({
        where: {
          name: {
            contains: search,
            mode: "insensitive", // Makes the search case-insensitive
          },
        },
      });

      // console.log(response);
      return response;
    }

    if (filterByRegion) {
      const response = await prisma.country.findMany({
        where: {
          region: {
            contains: filterByRegion,
            mode: "insensitive", // Makes the search case-insensitive
          },
        },
      });

      // console.log(response);
      return response;
    }

    const allCountries = await prisma.country.findMany({
      orderBy: {
        name: "asc", // Sorts in ascending order by the 'name' field
      },
    });
    return allCountries;
  } catch (error) {
    console.log("get countries", error);
    return [];
  }
};
