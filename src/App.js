import './App.css';
import SearchImages from './components/SearchImages';
import React,{useState} from 'react';
import DisplayImages from './components/DisplayImages';
let App=()=> {

  let [images, setImages]= useState([]);

  return (
   
    <div className='imageBazar'>
      <SearchImages addImages={setImages}/>
      <DisplayImages images={images}/>


    </div>
  );
}

export default App;