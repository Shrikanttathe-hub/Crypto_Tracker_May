import axios from "axios";
import { API_URL } from "../consonants";

export const getCoinPrices = (id, days, priceType) => {
  const prices =  axios
   .get(
     `${API_URL}/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
   )
      .then((response) => {
        if ( priceType == "prices") {
          return response.data.prices;
        } else if (priceType == "market_caps") {
          return response.data.market_caps;
        } else if (priceType == "total_volumes"){
          return response.data.total_volumes;
        }
        
      })
    .catch((error) => {
     console.log("Error>>>3", error);
 });
   if (prices) {
     return prices;
    } else {
    return;
  }
 };
