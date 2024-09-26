import "../src/App.css"
import Home from "./components/Home";

import Header from '../src/components/Header'
// routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllStudent from "./components/AllStudent";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";



function App(props) {
  return (
    <>
  <BrowserRouter>
    <Header />
   <Routes>
    
     <Route path="/" element={<Home />} />
     <Route path="/allstudents" element={<AllStudent />} />
     <Route path="/addstudent" element={<AddStudent />} />
     <Route path="/editstudent/:id" element={<EditStudent />} />
   </Routes>
   
   
   </BrowserRouter>
    
    </>
    
  
  )
}

export default App
