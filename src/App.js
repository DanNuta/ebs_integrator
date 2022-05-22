import React from "react";

// context
import {Products} from "./context/productsContext";
import { useContext } from "react";


import "./App.scss"

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


import Navbar from "./components/Navbar";
import Shop from "./pages/shop";
import Home from "./pages/home";



function App() {
  
  const { setDataPr, setFilter} = useContext(Products)

React.useEffect(() =>{
 

  async function dbProducts(){

   try{
     
     const data = await fetch("http://localhost:3001/api/data");
     let res = await data.json();
    
     setDataPr(res)
     setFilter(res)

   }catch(e){
     console.log(e.message)
     }
   }

   dbProducts();

  
}, [])



  

    
   








  return (
    <BrowserRouter>

        <Navbar/>
    

    <Routes>

       <Route path="/" element={<Home/>}/>
       <Route path="/shop" element={<Shop/>}/>

    </Routes>
      </BrowserRouter>
  );
}

export default App;
