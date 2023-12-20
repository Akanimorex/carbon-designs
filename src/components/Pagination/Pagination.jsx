import React, { useEffect, useState } from "react";
import { Data } from "./Data.js";
import "./pagination.css";


const Pagination = ({recordsPerPageArray,dataArray, recordsPerPage, setRecordsPerPage}) => {
 

  const [currentPage, setCurrentPage] = useState(1);
  const [isPrevDisabled, setPrevDisabled] = useState(false);
  const [isNextDisabled, setNextDisabled] = useState(false);
  // const [recordsPerPage, setRecordsPerPage] = useState(5)
  const totalNoOfItems = dataArray? dataArray.length : 0;

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = dataArray? dataArray.slice(firstIndex, lastIndex) : [];
  const nPage = dataArray? Math.ceil(dataArray.length / recordsPerPage):0;
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  useEffect(() => {
   

   // let lastPage = Data.length-1;
    if (currentPage <= 1) {
      setPrevDisabled(true);
      console.log("first page reached");
    } else {
      setPrevDisabled(false);
    }

    if (currentPage >= nPage) {
      setNextDisabled(true);
      console.log("end of the road");
    } else {
      setNextDisabled(false);
    }
  }, [currentPage, nPage]);

  const changeCurrentPage = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentPage(e.target.value);
  };
  const prevPage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  //total:number let
  //limit:number (items per page)
  //onCHange  function to setCurrentPage

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full">
        {
          records > 0? (records.map((d,i)=><div key={i}>{d.title}</div>)): null
        }
        <nav className="flex w-1/2 bg-gray-300">
          <select 
          name="" 
          className="bg-gray-300"
          value={recordsPerPage} 
          onChange={(e)=>setRecordsPerPage(e.target.value)}
           id="">
            {
              recordsPerPageArray.map((r,i)=>(      
                <option value={r} key={i}>
                  {r}
                </option>
              ))
            }
          </select>
          <ul className="flex w-full list-none gap-6 rounded bg-gray-300 p-2 shadow-sm">
            <li className="pagination-item">
              {isPrevDisabled ? (
                <a className="h-10 cursor-not-allowed rounded-sm rounded-l border border-gray-100 bg-gray-200 px-3 py-2 text-gray-600 no-underline">
                  Prev
                </a>
              ) : (
                <a
                  href="#"
                  onClick={(e) => prevPage(e)}
                  className="page-link h-10 rounded-sm rounded-l border border-gray-100 px-3  py-2 text-gray-600 no-underline"
                >
                  Prev
                </a>
              )}
            </li>
            <li className="inline-block">
              {`${firstIndex + 1}-${lastIndex} of ${totalNoOfItems} items`}
            </li>
            <select
              onChange={(e) => changeCurrentPage(e)}
              value={currentPage}
              name=""
              id=""
            >
              {numbers.map((n, i) => (
                <option value={n} key={i}>
                  {n}
                </option>
              ))}
            </select>
            {/* {numbers.map((n, i) => (
              <li
                className={`pagination-item ${currentPage === n ? `active` : ""}`}
                key={i}
              >
                <a
                  href="#"
                  onClick={(e) => changeCurrentPage(e, n)}
                  className={`
                  rounded-sm border 
                  border-gray-100 
                  px-3 py-2 
                  hover:bg-gray-100 
                  text-gray-600 
                  no-underline mx-2 text-sm 
                  active:.border-t
                  active:border-b
                  active:border-l
                  active:border-blue-100
                  active:bg-blue-100
                  active:py-2
                  active:px-3
                  active:no-underline
                  active:text-blue-500
                  active:text-sm
                  `}
                >
                  {n}
                </a>
              </li>
            ))} */}
            <li className="pagination-item">
              {isNextDisabled ? (
                <a className="page-linkrounded-l h-10 cursor-not-allowed rounded-sm border border-gray-100 bg-gray-200 px-3  py-2 text-gray-600 no-underline">
                  Next
                </a>
              ) : (
                <a
                  href="#"
                  onClick={(e) => nextPage(e)}
                  className="page-linkrounded-l h-10 rounded-sm border border-gray-100 px-3   py-2 text-gray-600 no-underline"
                >
                  Next
                </a>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
