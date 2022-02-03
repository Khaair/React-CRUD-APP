import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./Componet/Form";
import Home from "./Componet/Home";





 function App() {
  return (
    <div className="App">
     <nav className="navv">
       <ul>
         <li><Link to="/" className="ll">View Data</Link></li>
         <li><Link to="/Form" className="ll">Add Data</Link></li>
        
       </ul>
     </nav>

     <Routes>
    <Route path="/" element= {<Home/>}/>
    <Route path="/Form" element= {<Form/>}/>
    

     </Routes>

    </div>
  );
};

export default App;