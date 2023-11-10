import React, { useState } from "react";
import Data from "../data/Data.json";
import "../styles/pagination.css"

const Pagination = ({activeStyles}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(Data.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  console.log(Data, "data");

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
      <div>
        <table className=" w-full leading-normal bg-gray-500">
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
                <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">{d.ID}</td>
                <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">{d.name}</td>
                <td className="px-3 py-3 border-b border-gray-200 bg-white text-sm">{d.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav className="">
          <ul className="list-none bg-white p-2 shadow-sm rounded">
            <li className="pagination-item">
              <a href="#" onClick={(e) => prevPage(e)} className="page-linkrounded-l rounded-sm border border-gray-100 px-3 py-2  no-underline text-gray-600 h-10">
                Prev
              </a>
            </li>
            {numbers.map((n, i) => (
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
            ))}
            <li className="pagination-item">
              <a href="#" 
              onClick={(e) => nextPage(e)} 
              className="page-linkrounded-l rounded-sm border border-gray-100 px-3 py-2  no-underline text-gray-600 h-10">
                Next
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  );
};

export default Pagination;
