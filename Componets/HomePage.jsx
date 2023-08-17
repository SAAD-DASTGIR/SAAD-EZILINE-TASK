import React from "react";
import { Link } from "react-router-dom";
export default ()=>{
    return(
        <div className="homepage">
            <p className="introducing">__introducing</p>
            <h1 className="heading-homepage">
                Hello<br/>
                I'm Jessy<br/>
                Walter
            </h1>
            <div className="homepage-paragraph">
            
            <p >
                Since beginning my journey as a freelance designer nearby 7 years ago
                , I 've done remote work for agencies, consulted for startup,
                and collaborated with talented people to create digital products  
            </p>
            </div>
            <Link to="/contactme"> <button className="homepage-button">Contact Me</button></Link>
            <img src="hero-img.png" className="homepage-image1"></img>
            {/* <img src="hero-img-bg.svg" className="homepage-image2"></img> */}

        </div>
    )
}