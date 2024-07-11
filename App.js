import './App.css';
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import User from './components/User'
import axios from 'axios';
import { useState, useEffect } from 'react';


function App(){
  // All the data fetching, api calls is done in app.js and these data is send to components.
  // These compontent have other functions, styling and html, evenlisteners to decide what needs to be done with this data.

  // initializing a users variable  which we gonna change in future using useState to an empty array where we gonna update it with github users
  const [users, setUsers] = useState([])
  const [loading,setLoading] = useState(false)
  const [alert, setAlert] = useState(null)

  const [user,setUser] = useState({})
  const [repos,setRepos] = useState([])

  useEffect(()=>{
    async function fetchData(){
      try{
        // before i get the data i want to show the loading animnation so i set the loading boolean true here
        // If i go to home.jsx and call the loading animation there when this loading boolean is true then before i get data 
        // loading animation will be shown  
        setLoading(true)
        const res = await axios.get("https://api.github.com/users")

        setUsers(res.data)  // i am updating users variable with this data using setUsers function.
        showAlert({msg : "users fetched",type : "success"})
        setLoading(false) // after i get data i dont want the animation to be shown
      }catch (err){
        console.log(err);
        showAlert({type : "danger", msg : "something went wrong"})
        setLoading(false) // even after error animation wont stop so i set it to false here as well
      }
    }
    fetchData()
  }, [])

  // If this function is called then users varible which is array of users data will become an empty array. We gonna pass this function as prop in home component route '/'
  const clearUsers = () => {
    setUsers([])
  }

  // WE make a custom alert function and call this showalert function when data is fetched to show client it is success
  const showAlert = (alert)=>{
    setAlert(alert)
    setTimeout(()=>{
      setAlert(null)
    },2500)
  }

  const fetchUser = async(uname) => {
    try {
      const res = await axios.get(`https://api.github.com/users/${uname}`)
      setUser(res.data)
    }catch (error) {
      console.log(error);
      showAlert({type : "danger", msg : "something went wrong"})
    }
  }
  const toRepos = async(uname)=>{
    try {
      const res = await axios.get(`https://api.github.com/users/${uname}/repos?per_page=5&sort=desc`)
      setRepos(res.data)
    } catch (error) {
      console.log(error);
    }
  }


  // search user function will be used in search.jsx inside search button --> submit handler
    async function searchUsers(username){
      try {
        setUsers([])
        setLoading(true)  // this way i can use the animation here which i made it a component
        const res = await axios.get(`https://api.github.com/search/users?q=${username}`)
        setUsers(res.data.items)
        setLoading(false)
      } catch (error) {
        console.log(error);
        showAlert({type : "danger", msg : "something went wrong"})
        setLoading(false)

      }
    }

  

  return(
  <>
  {/* Navbar.jsx we made, will be used here inside return */}
  {/* Style the tags of Navbar.jsx in App.css. As we imported App.css here and Navbar, we can now style our tags of Navbar in App.css */}
  <Navbar/> 

  {/* These is the paths we made for our react application in browser. These paths are used by Navbar.jsx in above line. */}
  <Routes>
  {/* defining a prop in Home tag as we need to send the data stored in users variable so we keep it under prop value */}
    <Route path = "/" element = {<Home users={users} clearUsers={clearUsers} searchUsers={searchUsers} 
    loading={loading} alert={alert} showAlert={showAlert}/>}/> 
    <Route path = "/about" element = {<h1>About page</h1>}/>
    <Route path = "/contact" element = {<h1>contact page</h1>}/>
    <Route path = "/user/:uname" element = {<User toRepos={toRepos} fetchUser={fetchUser} user={user} repos={repos} loading={loading}/>}/>

  </Routes>
  <Footer/>
  </>
  )
}
export default App;
// This App is now in index.js file