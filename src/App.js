import logo from './logo.svg';
import './App.css';
import applegrey from './applegrey.jpeg'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
// import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
function App() {
  const [mode,setMode]=useState("light");
  const toggleMode=()=>{
    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor="rgb(5 3 20 / 96%)";
      document.body.style.color ='white';
      showAlert("Dark mode has been enabled","success");
      setInterval(() => {
        document.title="Text_Utility_Dark_Mode"
      }, 2000);
      setInterval(() => {
        document.title="is enabled"
      }, 1500);
     
    }
    else
    {
      setMode("light");
      //to change the whole background color
      document.body.style.backgroundColor="white";
      document.body.style.color ='black';
      showAlert("light mode has been enabled","primary");
      //to change title dynamically
      document.title="Text_Utility_Light_Mode"
    }
  }
  const [alert,setAlert]=useState({});
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert({})
    },1500);
  }
  return (
    <>
    {/* <div className="card" style={{width:18+'rem'}}>
  <img src={applegrey}  className="card-img-top" alt="appleimage"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
{/* <BrowserRouter> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>

<Alert alert={alert}/>
    {/* <Routes> */}
        {/* <Route path="/About" element={<About/>}></Route> */}
          {/* <Route path="/TextForm" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />}> */}
          <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />

          {/* </Route> */}
    {/* </Routes> */}
{/* </BrowserRouter> */}
    </>
  );
}

export default App;
