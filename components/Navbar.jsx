import {Link} from "react-router-dom"

function Navbar(){
    return(
        <div className="navbar">

            {/* To use this i tags go to public folder and inside index.html paste a link for using logos in head tag */}
            {/* The link will utilize the route "/", "/about" , "/contact we established in App.js file. */}
            {/* Links of react works in same fashion as anchor tags of html. so if we click Github Search Engine we will navigate to the "/" route we made. */}
            <Link to="/"><i className="fa-brands fa-github fa-2x"> Github Search Engine  </i></Link>

            <div>  
                {/* clicking Contact we can go to this path /contact which is our contact page */}
                <Link to="/contact">Contact information</Link>  
                <Link to="/about">About our page</Link>
            </div>

            {/* Githun Search Engine , Contact information ,About our page . These words will appear on our react webpage 
            and clicking thsese words we are going to switch pages using paths we made by Routes  */}
         

             {/* Style the tags of Navbar.jsx in App.css  */}
        </div>
    )
}

export default Navbar
// we are going to use this Navbar in App.js file 