import React, { useEffect, useState } from "react";
import Data from "../data/Data.json";
import "../styles/pagination.css";

const Pagination = () => {
  // TODO: upgrade this
  // no. of items to be allowed items per page (select input style)
  //total item count
  //no of pages left

  //top of the list of each page
  //bottom of the list of each page

  const [currentPage, setCurrentPage] = useState(1);
  const [isPrevDisabled, setPrevDisabled] = useState(false);
  const [isNextDisabled, setNextDisabled] = useState(false);
  const totalNoOfItems = Data.length;
  const recordsPerPage = 5; // i'll need this
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(Data.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  useEffect(() => {
    console.log(lastIndex, "last index");
    console.log(firstIndex, "first index");
    console.log(currentPage, "currentPage");

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
    setCurrentPage(id);
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
        <table className="w-1/2 bg-gray-500 leading-normal">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                ID
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                Name
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td className="border-b border-gray-200 bg-white px-3 py-3 text-sm">
                  {d.ID}
                </td>
                <td className="border-b border-gray-200 bg-white px-3 py-3 text-sm">
                  {d.name}
                </td>
                <td className="border-b border-gray-200 bg-white px-3 py-3 text-sm">
                  {d.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav className="w-1/2">
          <ul className="list-none rounded bg-white p-2 shadow-sm">
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
