import  React, { useState } from 'react';
import './styles.css';
import pagination from '@mui/material/Pagination';
import Pagination from '@mui/material/Pagination';

export default function PaginationComponent( {page, handlePageChange}) {
//   const [page, setPage] = useState(1);
//   const handleChange = (event, value) => {
//     setPage(value);
//   };

  return (
    <div className='pagination-component'>
      <Pagination 
      count={10}
      page={page} 
      onChange={(event, value)=> handlePageChange(event, value)}
      sx={{
        color: "var(--white)",
        "& .Mui-selected ": {
        backgroundColor: "var(--blue)",
        color:"#fff !important",    
        barderColor: "var(--blue) !important",
        },
        "& .MuiPaginationItem-ellipsis": {
        border: "0px solid var(--grey) !important",
        },
        "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1px solid var(--grey)",
        },
      }}
      />
      </div>
  );
}