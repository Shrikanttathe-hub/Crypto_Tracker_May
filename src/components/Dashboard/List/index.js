import React from 'react';
import './styles.css';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import { convertNumbers } from '../../../functions/ConvertNumber';
import { motion } from 'framer-motion';

function List({coin}) {
  return (
    <a href={`/coin/${coin.id}`}>
     <motion.tr className='list-row'
        initial={{ opacity: 0, x: -50}}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.5}}>

       <Tooltip title="Coin logo" placement='bottom-start'>
    <td className='td-image'>
        <img src={coin.image} className='coin-logo'/>
    </td>
       </Tooltip>
       <Tooltip title="Coin Info" placement='bottom-start'>
        <td className='name-col'>
        <div className="coin-name-flex">
            <p className='coin-symbol'>{coin.symbol}</p>
            <p className='coin-name'>{coin.name}</p>
        </div>
        </td>
        
        </Tooltip>
        <Tooltip title="Price change in 24Hrs" placement='bottom-start'>
        {coin.price_change_percentage_24h > 0 ? (
        <td className='chip-flex'>
            <div className='price-chip'>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div  className='icon-chip td-icon'>
             <TrendingUpRoundedIcon />
            </div>
        </td>
        ) : (
        <td className='chip-flex'>
            <div className='price-chip chip-red'>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div  className='icon-chip chip-red td-icon'>
             <TrendingDownRoundedIcon />
            </div>
        </td>
        )}
        </Tooltip>
        <Tooltip title="Current Price">
        <td>
        <h3 className='coin-price td-center-align' style={{color:coin.market_cap_change_percentage_24h < 0 
            ? 'var(--red)'
            :'var(--green)' }}>
            ${coin.current_price.toLocaleString()}
            </h3>
        </td>
        </Tooltip >
        
        <Tooltip title="Total Volume" placement='bottom-end' >
          <td> 
            <p className='total-volume td-right-align td-total-volume'>
                 ${coin.total_volume.toLocaleString()}
                 {/* // toLocaleString() gives , in between amount */}
            </p>
            </td> 
          </Tooltip>
          <Tooltip title="Market Cap" placement='bottom-end'>
            <td className='desktop-td-mkt'> 
            <p className='total-volume td-right-align'>
               ${coin.market_cap.toLocaleString()}
            </p>
            </td> 
            </Tooltip>
            {/* <Tooltip title="Market Cap" >
             <td className='mobile-td-mkt'> 
               <p className='total-volume td-right-align' placement='bottom-end'>
                ${convertNumbers(coin.market_cap)}
               </p>
            </td> 
            </Tooltip> */}
       </motion.tr>
    </a>
  );
}

export default List;
