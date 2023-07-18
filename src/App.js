
import React, { useState } from 'react';
import './App.css';
import Alert from './Compnents/Alert';
import About from './Compnents/About';
import Navbar from './Compnents/Navbar';
import TextForm from './Compnents/TextForm';
import {
   BrowserRouter as Router,
   Routes,
   Route,
} from "react-router-dom";



function App() {

   const [mode, setmode] = useState('light')

   const togglemode = () => {
      if (mode === 'light') {
         setmode('dark')
         document.body.style.backgroundColor = '#23395d'
         document.title = 'Textutils-Dark Mode'
      }
      else {
         setmode('light')
         document.body.style.backgroundColor = 'white'
         document.title = 'Textutils-Light Mode'
      }
   }
   return (

      <>


         <Router>
         
               <Navbar title="TextUtilis" home="Home" mode={mode} togglemode={togglemode} />
               <Alert Alert="This Is Alert" />



               <div className="container  my-4">


                  <Routes>
                     <Route path="/about" element={<About />}> 
                     </Route>
                     <Route path="/" element={ <TextForm heading='Enter The Text To Analyze' mode={mode} />}>
                     </Route>
                  
                  </Routes>


               </div>



         </Router>
      </>
   );
}

export default App;
