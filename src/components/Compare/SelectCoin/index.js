import React, { useState } from 'react'
import { useEffect } from 'react';
import { get100Coins } from '../../../functions/get100Coins';
import { MenuItem, Select } from '@mui/material';
import './styles.css';

function SelectCoins({ crypto1, crypto2, handleCoinChange}) {
   
  const [allCoins, setAllCoins] = useState([]);
   const [isCoin2, setIsCoin2] = useState();
    
   const styles = {
      height: "2.5rem",
      color:"var(--white)",
      "& .MuiOutlinedInput-notchedOutline": {
      borderColor:"var(--white)",
   },
      "& .MuiSvgIcon-root":{
       color: "var(--white)",
   },
      "&:hover":{
      "&& filedSet": {
      borderColor: "#380e9",
   },
 },
}
 
   useEffect(() => {
     getData();
   },[]);
 
   async function getData() {
    const myCoins = await get100Coins();
    setAllCoins(myCoins);
   }  

  return (
    <div className='coins-flex'>
      <p>Crypto 1</p>
        <Select
           className='select-coin'
           sx={styles}
           value={crypto1}
           label="Crypto 1"
           onChange={(event) => handleCoinChange(event, false)}
        >
          {allCoins.filter((item) => item.id != crypto2)
          .map((coin, i) => (
           <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
          ))}
        </Select>
        <p>Crypto 2</p>
        <Select
           sx={styles}
           value={crypto2}
           label="Crypto 2"
           onChange={(event) => handleCoinChange(event, true)}
        >
          {allCoins.filter((item) => item.id != crypto1)
          .map((coin, i) => (
           <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
          ))}
        </Select>
    </div>
  );
}

export default SelectCoins;

