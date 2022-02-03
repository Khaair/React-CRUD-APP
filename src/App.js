import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./Componet/Form";
import Home from "./Componet/Home";




function App() {
  const [data,setData]=useState([]);

const FetchData=(values)=>{
setData([...data,values]);
}

const Delete=(id)=>{
  //[{23},{45},{65}]-->2
  let deletedData=data.filter((eld,indd)=> indd!==id);
  setData(deletedData);
  

}
  return (
    <div className="App">
     <nav className="navv">
        <ul>
         <li><Link to="/" className="ll">View Data</Link></li>
         <li><Link to="/Form" className="ll">Add Data</Link></li>
        </ul>
     </nav>

    <Routes>
    <Route path="/" element= {<Home datas={data} DeleteFn={Delete} />}/>
    <Route path="/Form" element= {<Form fetch={FetchData} />}/>
    </Routes>

    </div>
  );
};

export default App;