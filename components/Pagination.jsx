import React, { useState } from "react";
import Data from "../data/Data.json";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(Data.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  console.log(Data, "data");

  const changeCurrentPage = (e,id) =>{
    e.preventDefault();
    e.stopPropagation();
    setCurrentPage(id)

  }
  const prevPage = (e) =>{
    e.preventDefault();
    e.stopPropagation();
    if(currentPage!==firstIndex){
      setCurrentPage(currentPage-1)
    }
  }
  const nextPage = (e) =>{
    e.preventDefault();
    e.stopPropagation();
    if(currentPage!== lastIndex){
      setCurrentPage(currentPage + 1)
    }
  }

  //total:number let
  //limit:number (items per page)
  //onCHange  function to setCurrentPage

  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => (
            <tr key={i}>
              <td>{d.ID}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" onClick={(e)=>prevPage(e)} className="page-link">
              Prev
            </a>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? `active` : ""}`}
              key={i}
            >
              <a href="#" onClick={(e)=>changeCurrentPage(e,n)} className="page-item">
                {n}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a href="#" onClick={(e)=>nextPage(e)} className="page-link">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
