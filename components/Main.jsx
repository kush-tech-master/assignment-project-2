"use client"

import { useState,useEffect } from "react";
import Search from "./Search";
import SearchList from "./SearchList";
import Sort from "./Sort";


export default function Main(){

    let [data,setData] = useState([]);
    let [input,setInput] = useState("");
    let [result,setResult] = useState([]);
    let [searchReasult,setSearchResult] = useState("");
    let [temp,setTemp] = useState("");
    let [sort,setSort] = useState("");

   const handleChange = (value)=>{
        setInput(value);
        searchData(value)
    
    }

    const handleSubmit =(value)=>{
        setSearchResult(value);
        setResult([]);
        setInput("");
    }
    const searchData = (value)=>{
        fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json")
        .then((res)=>(res.json()))
        .then((ress)=>{  
         setResult( ress.filter((item)=>{  return value && item  && item.title && item.title.toLowerCase().includes(value.toLowerCase())}))      
    })           
    }

  


    useEffect(()=>{
        const fetchData = (value)=>{
            fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json")
            .then((res)=>(res.json()))
            .then((ress)=>(setData(ress)))
            .catch((e)=>{
                console.log("error",e)})
               
        }
         fetchData();
    },[])



   const searchResult = (value)=>{
        setTemp(value);
         setInput(value);
         setResult([]);
        
   }

   const handleSort = (value)=>{
        console.log(value)
        setSort(value);

   }
   const sortedData = sort === "" || sort === "normal"
  ? [...data] 
  : [...data].sort((a, b) => {
      const platformA = a.platform || ""; 
      const platformB = b.platform || ""; 
      
      return sort === "a-z"
        ? platformA.localeCompare(platformB)
        : platformB.localeCompare(platformA);
    });



     
    return(
        <>
        <div className="border-b-2 h-12 flex  justify-between  border-blue-300 mb-10">
            <div className=" h-15 ">
            <Sort handleSort={handleSort} />
            </div>
            <div className="h-15">
                <div className="flex flex-col justify-center items-center">
                <p></p> <Search temp={temp} input={input} handleSubmit={handleSubmit} handleChange={handleChange}/>
                </div>
                <div className=" flex flex-col justify-center items-center">
                <SearchList searchResult={searchResult}  result={result}/>
                </div>
            </div>
          
        </div>
        <div>
           <table className="table-auto m-auto"> 
            <thead>

            <tr className="h-4 ">
            <th className="w-[35rem] text-center  border border-slate-200 rounded-md">Title</th>
            <th className="w-[20rem] text-center   border border-slate-200 rounded-md">Platform</th>
            <th className="w-[6rem] text-center   border border-slate-200 rounded-md">Score</th>
            <th className="w-[20rem] text-center   border border-slate-200 rounded-md">Genre</th>
            <th className="w-[6rem] text-center   border border-slate-200 rounded-md">editors_choice</th>
            </tr>

            </thead>
            <tbody>

                {   
                    sortedData.filter((item)=>( 
                        item.title && item.title.toLowerCase().includes(searchReasult.toLowerCase())
                    )).map((item,idx)=>( 
 
                        <tr key={idx}>

                        <td className="w-[35rem] text-start px-3  border border-slate-200 rounded-md">{item.title}</td>
                        <td className="w-[20rem] text-start px-3   border border-slate-200 rounded-md">{item.platform}</td>
                        <td className="w-[6rem] text-center  border border-slate-200 rounded-md">{item.score} </td>
                        <td className="w-[20rem] text-start px-3   border border-slate-200 rounded-md">{item.genre} </td>
                        <td className="w-[6rem] text-center  border border-slate-200 rounded-md">{item.editors_choice}</td>
        
                    </tr>
                    ))
                }

            </tbody>
           </table>
        </div>
        </>
    );

}


