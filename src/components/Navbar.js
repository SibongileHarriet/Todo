import React from "react"
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"

const Navbar =()=>{
    return(
       <nav>
           {/* <a href="">about</a> */}

           <div className="logo">  
           <Link to = "/About">

            <h1>logo</h1>

               </Link> 
           </div>
           <ul>
               <li>
                   <NavLink to='/'>Home</NavLink>
               </li>
           </ul>
         
       </nav>
      
    )
}

export default Navbar
