import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import AllPuppys from "./puppyHome";
import PuppyDetails from "./PuppyDetails";



const App = () => {
  const [puppys, setPuppys] = useState([])
  return (
    <>
      <h1>Puppy Bowl</h1>
      <Routes>
      
      <Route path = "/" element ={<AllPuppys setPuppys={setPuppys} puppys={puppys}/>}/>

      <Route path = "/puppy/:id" element ={<PuppyDetails/>}/>

      </Routes>
    </>
  )
 
};

export default App
