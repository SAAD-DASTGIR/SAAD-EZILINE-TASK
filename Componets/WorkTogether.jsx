import React from "react";
import { Link } from "react-router-dom";
export default()=>{
    return(
        <div className="worktogether">
            <div className="container-worktogether">

            <h1 className="work-heading">Lets Work Together</h1>
            <p className="work-paragraph">
                The technological revolution is changing aspect of our lives, and the fabric of 
                <br/>
                society itself. it's also changing the way we learn and what we learn
            </p>
            <Link to="/contactme" ><button className="work-btn" >Contact Me</button></Link>
            </div>
        </div>
    )
}