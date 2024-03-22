"use server";

import axios from "axios";

export const getAllCountries = async () => {
  const url: string = "https://restcountries.com/v3.1/all";

  const response = await axios.get(url);
  //   console.log(data);
  return response.data;
};
