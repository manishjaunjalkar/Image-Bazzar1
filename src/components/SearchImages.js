import React,{useState,useEffect} from "react";
import axios from "axios";
let SearchImages=({addImages})=>{
let[searchTerm, setSearchTerm]=useState("cat")

useEffect(()=>{
getImages();
},[])

let getImages=()=>{
        axios.get("https://api.unsplash.com/search/photos",{
            params:{
                client_id : process.env.REACT_APP_ACCESS_KEY,
                query : searchTerm ,
                per_page: 100,
            }
        })
        .then(res=> addImages(res.data.results))
        .catch(err=> console.log(err))
    } 
    let reset=()=>{
        axios.get("https://api.unsplash.com/search/photos",{
            params:{
                client_id : process.env.REACT_APP_ACCESS_KEY,
                query :"" ,
                per_page: 100,
            }
        })
        .then(res=> addImages(res.data.results))
        .catch(err=> console.log(err))
        setSearchTerm("");
    } 


    return(
        <div className="search">
            <h1>Image Bazzar</h1>
            <input onChange={(e)=>setSearchTerm(e.target.value)} value={searchTerm} type="text" placeholder="Search image" />
            <button onClick={getImages}>Search</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default SearchImages