
import Saaduddin from './components/Saaduddin';


import {Routes, Route} from "react-router-dom"



import './App.css';

function App() {


  

  return (
    <>
    {/* Navbar.jsx we made, will be used here inside return */}
    {/* Style the tags of Navbar.jsx in App.css. As we imported App.css here and Navbar, we can now style our tags of Navbar in App.css */}

  
    {/* These is the paths we made for our react application in browser. These paths are used by Navbar.jsx in above line. */}
    <Routes>
    {/* defining a prop in Home tag as we need to send the data stored in users variable so we keep it under prop value */}
      <Route path = "/" element = {<Saaduddin/>}/>
    </Routes>


    </>
    )
}

export default App;
