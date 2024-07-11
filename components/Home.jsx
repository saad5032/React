import Search from "./Search"
import Users from "./Users"
import Loading from "./Loading";

function Home({users,clearUsers,searchUsers,loading,alert,showAlert}){
    // console.log(props); //do this and see console of browser you will find the users data object.
    // props looks like this in browser console --> {users: Array(30)} 
    // V.V.V imp -> props is basciaclly an object whose key is users which we defined as prop name in route of home!!
    return(
        <>
        {/* the function we created in app.js are now sent to search.jsx */}
        <Search clearUsers={clearUsers} searchUsers={searchUsers} alert={alert} showAlert={showAlert}/>

        {loading ? <Loading/> : ""}

        {/* By doing props.users we are accessing Array(30) which have user login, image id infromation and passing it as prop value to Uers.jsx file*/}
        <Users users={users}/>

        </>
    )
}
export default Home; 