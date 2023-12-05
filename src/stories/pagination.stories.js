import Pagination from "../components/Pagination/Pagination.jsx";
import React, {useState} from "react";

export default {
    title:"Test/Pagination",
    component:Pagination
}

export const sample =()=> {

    const [dataArray, setDataArray] = useState([]);
    const [recordsPerPage, setRecordsPerPage] = useState(5); 
    const recordsPerPageArray=[5,10,15,20]


    return (<Pagination recordsPerPageArray={recordsPerPageArray} recordsPerPage={recordsPerPage} setRecordsPerPage={setRecordsPerPage}/>)
}

//TODO: MAKE IT REUSABLE FOR DEVELOPERS, SHOULD BE ABLE TO PROVIDE AN ARRAY OF DATA FOR MANIPULATION, AND A NUMBER OF VALUES TO BE DISPLAYEDPER PAGE


