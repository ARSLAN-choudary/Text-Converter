import './App.css';
import Navbar from './components/Navbar';
import Contactus from './components/Contactus'
import Aboutus from './components/Aboutus';
import Home from './components/Home';
import { Routes,Route,} from "react-router-dom";
import { Link } from 'react-router-dom';
import Img1 from './components/Img1';
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';



function App() {
 const[mode,setMode]=useState('light');
const[alert,setAlert]=useState(null);
const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type,
});
setTimeout(() => {
  setAlert(null);
}, 1500);
};

 const toggleMode=()=>{
  if (mode ==='light') {
    setMode('dark');
    document.body.style.backgroundColor='#2b2e30';
    showAlert("Dark mode has been enabled","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
    
  }
 }
 
  
  return (
    <>
    <Navbar title="MyApp" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <Routes>
      <Route path="/Home" element={<Home />}/>
      <Route path="/Contactus" element={<Contactus />} />
      <Route path="/Aboutus" element={<Aboutus />} />
   </Routes>
   <div className="container">
    <div className="row">
      <div className="col">
        <Textform showAlert={showAlert} name="Text Counter And Converter" mode={mode}/>
      </div>
    </div>
    
   </div>
    </>
  );
}

export default App;
