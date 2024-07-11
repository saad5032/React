import { Link } from "react-router-dom";
function Users({users}){
    // we are accepting array in {} brackects from Home.jsx
    console.log(users);  // users now is an array 
    return(
        <center>
            <div className="row">
            {/* we are apply map method of array to get image and login of every user*/}
            {/* {} brackets are used before useers.map bcoz it is javascript in html */}
            {users.map((ele,i)=>{
                return(
                <div className="side" key={i}>
                    {/* {} again flower brackets for src value to access values like avaatr and login of array which is all javascript */}
                    <img src={ele.avatar_url} alt="test" height="200px" />
                    <h2>{ele.login}</h2>
                    <Link to={`/user/${ele.login}`}>Click Profile</Link>
                </div>  
                )
            })}       
            </div>
        </center>
    )}
export default Users;