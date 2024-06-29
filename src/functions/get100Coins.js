import axios from "axios";
import { API_URL } from "../consonants";

export const get100Coins = () => {
    const myCoins = axios.get(
      `${API_URL}/markets?vs_currency=usd&order=market_cap_desc`
    )
    .then((response) => {
      if (response.status == 200) {
        console.log("coinsData", response);
        return response.data;
      }
    })
    .catch((error) => {
      console.log("ERROR>>>", error);
    });

  if (myCoins) return myCoins;
  else return;
};
   