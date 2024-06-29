import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Common/Loader';
import Header from '../components/Common/Header';
import { coinObject } from '../functions/convertObject';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/Coin/CoinInfo';
import { getCoinData } from '../functions/getCoinData';
import LineChart from '../components/Coin/LineChart';
import { convertDate } from '../functions/convertDate';
import { getCoinPrices } from '../functions/getCoinPrices';
import SelectDays from '../components/Coin/SelectDays';
import { settingChartData } from '../functions/settingChartData';
import PriceType from '../components/Coin/PriceType';
import TogglePriceType from '../components/Coin/PriceType';

function CoinPage() {
  const {id} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState({});
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({ labels: [], datasets: [],});

  useEffect(() => {
    if (id) {
     getData();
    }
  },[id]);

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days, priceType);
      if (prices) {
       console.log("wohoo got coin page");
       settingChartData(setChartData, prices);
       setIsLoading(false);
    }   
  }
};

   const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value, priceType);
    if(prices) { 
     console.log("wohoo got price dayswise", prices);
     settingChartData(setChartData, prices);
     setIsLoading(false);
   }
 };

 const handlePriceTypeChange = async (event) => {
     setIsLoading(true);
     setPriceType(event.target.value);
     const prices = await getCoinPrices(id, days, event.target.value);
     if(prices){ // if we put prices.length>0 cant get data
      console.log("wohoo got chartData pricewise", prices);
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
};

  return (
    <div>
     <Header/>
     {isLoading ? (
      <Loader/> 
     ) : (
     <>
     <div className='grey-wrapper' style={{ padding: "0rem 1rem" }}>
      <List coin={coinData} />
     </div>
     <div className='grey-wrapper'>
       <SelectDays days={days} handleDaysChange={handleDaysChange} />
       <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
       <LineChart chartData={chartData} priceType={priceType} multiAxis={false}/>
     </div>
     <CoinInfo  heading={coinData.name} desc={coinData.desc}/>
     
     </>
     )}
    </div>
  );
}

export default CoinPage;
