import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header';
import TabsComponent from '../components/Dashboard/Tabs';
import Search from '../components/Dashboard/Search';
import PaginationComponent from '../components/Dashboard/Pagination';
import Loader from '../components/Common/Loader';
import BackToTop from '../components/Common/BackToTop';
import { get100Coins } from '../functions/get100Coins';


function DashboardPage() {

const [coins, setCoins] = useState([]);
const [paginatdCoins, setPaginatedCoins] = useState([]);
const [search, setSearch] = useState("");
const [page, setPage] = useState(1);
const [isLoading, setIsLoading] = useState(false);

const handlePageChange = (event, value) => {
  setPage(value);
  var previousIndex = (value - 1) * 10;
  setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10))
};

const onSearchChange = (e) => {
   setSearch(e.target.value);
};

const filteredCoins = coins.filter((item) => {
  if(
  item.name.toLowerCase().includes(search.toLowerCase()) ||
  item.symbol.toLowerCase().includes(search.toLowerCase())
){
  return item;
}
});

useEffect(() => {
 getData();

},[]);

 const getData = async () => {
  setIsLoading(true);
  const myCoins = await get100Coins();
  if (myCoins) {
    setCoins(myCoins);
    setPaginatedCoins(myCoins.slice(0, 10));
    setIsLoading(false);
  }
};

  return (
     <>
      <Header/>
      <BackToTop />
      {isLoading ? (
        <Loader />
      ) : (
      <div>  
      <Search search={search} onSearchChange={onSearchChange} />
      <TabsComponent coins={search ? filteredCoins : paginatdCoins}/>
      {!search && (
         <PaginationComponent 
         page={page} 
         handlePageChange={handlePageChange}/>
      )} 
    </div>
   )}
 </>
  );
}

export default DashboardPage;







//useEffect(() => {
// axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")

// .then((response) => {
//     console.log("Response>>>>", response);
//     setCoins(response.data)
// })
// .catch((error) => {
//    console.log("Error>>>" , error);
// });
// },[]);
