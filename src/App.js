import './App.css';
import CountComponent from './Components/CountComponent/CountComponent';
import RoutingPractice from './Components/UEpractice/uepractice';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShowErrors from './Components/showerrors/showerrors';
import React, { useEffect } from "react";
import axios from 'axios';


function App() {
  useEffect(() => {
    axios
      .get("https://dummyjson.com/todos")
      .then(res => console.log(res.data))
      .catch(error => console.log(error));
  }, [])
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CountComponent />} />
          <Route path='/uepractice' element={<RoutingPractice></RoutingPractice>} />
          <Route path='/*' element={<ShowErrors></ShowErrors>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
