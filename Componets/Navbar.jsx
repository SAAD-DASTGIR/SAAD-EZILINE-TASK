import React from "react";
import {Link} from "react-router-dom"
export default ()=>{
    return(
        <div className="navbar">
            <nav>
                <ul className="list">
                    <li className="nav-logo"><img className="logo-nav"src="jessylogo.PNG"></img></li>
                    <li className="listitem">
                        <Link to="/"> Home</Link>
                    </li>
                        
                    <li className="listitem">
                        <Link to="/Details"> Portfolio</Link>
                    </li>

                    <li className="listitem">
                        <Link to="/contactme">Contact</Link>
                    </li>
                    <li ><button className="nav-btn1">
                    <Link to="/contactme">🌍</Link></button></li>
                    <li >
                    <Link to="/contactme"><button className="nav-btn2">Contact me</button></Link></li>
                    
                </ul>
            </nav>
        </div>
    )
}