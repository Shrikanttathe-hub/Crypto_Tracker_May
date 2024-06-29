import axios from "axios";
import { API_URL } from "../consonants";

export const getCoinData = (id) => {
  const myData = axios.get(`${API_URL}/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("ERROR>>>", error);
    });
  if (myData) return myData;
  else return;
};
