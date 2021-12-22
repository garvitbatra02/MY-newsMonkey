
import './App.css';

import React from 'react'
import Navbar from "./components/Navbar"
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route ,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';




 const App =()=>{
  const  pagesize=15;
  

  const [progress, setprogress] = useState(0);

    return (
      <div>
      <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
      
       <Switch>   
          <Route exact path="/business"><News setProgress={setprogress} key="business" pagesize={pagesize} country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News setProgress={setprogress}   key="entertainment" pagesize={pagesize} country="in" category="entertainment"/></Route>
          <Route exact path="/general"><News setProgress={setprogress} key="general" pagesize={pagesize} country="in" category="general"/></Route>
          <Route exact path="/health"><News setProgress={setprogress} key="health" pagesize={pagesize} country="in" category="health"/></Route>
          <Route exact path="/sports"><News setProgress={setprogress} key="sports" pagesize={pagesize} country="in" category="sports"/></Route>
          <Route exact path="/science"><News setProgress={setprogress} key="science" pagesize={pagesize} country="in" category="science"/></Route>
          <Route exact path="/technology"><News setProgress={setprogress} key="technology" pagesize={pagesize} country="in" category="technology"/></Route>

        </Switch>
      
   
      </Router>
      </div>

    )
  
}


export default App