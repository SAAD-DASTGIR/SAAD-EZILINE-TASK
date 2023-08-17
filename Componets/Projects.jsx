import React from "react";
import { Link } from "react-router-dom";
export default ()=>{
    return(
        <div className="projects">
            <img className="image-project1" src="portfolio-1-img.jpg"></img>
            <div className="project-one">

            <p className="project-number">__Project 1</p>
            <h1 className="project-heading">Branding Nice Studio</h1>
            <p className="project-paragraph">
                The technological revolution is changing aspect of our lives, and the fabric of society itself. 
                it's also changing the way we learn and what we learn. 
                Factual knowledge is less prized when everything you ever need to know can be found on your phone. 
                There's no imperative to be an expert at doing everything when you can.
            </p>
            <Link to="Details">
            <button className="readmore-btn">Read More</button>
            </Link>
            </div>
            <img className="image-project2" src="portfolio-2-img.jpg"></img>
            <div className="project-two">

            <p className="project-number">__Project 2</p>
            <h2 className="project-heading">Mobile Card App</h2>
            <p className="project-paragraph">
                The technological revolution is changing aspect of our lives, and the fabric of society itself. 
                it's also changing the way we learn and what we learn. 
                Factual knowledge is less prized when everything you ever need to know can be found on your phone. 
                There's no imperative to be an expert at doing everything when you can.
            </p>
            <Link to="Details">
            <button className="readmore-btn" >Read More</button>
            </Link>
            </div >
            <img className="image-project3" src="portfolio-3-img.jpg"></img>
            <div className="project-three">
            <p className="project-number" >__Project 3</p>
            <h2 className="project-heading" >Restaurant Landing Page</h2>
            <p className="project-paragraph">
                The technological revolution is changing aspect of our lives, and the fabric of society itself. 
                it's also changing the way we learn and what we learn. 
                Factual knowledge is less prized when everything you ever need to know can be found on your phone. 
                There's no imperative to be an expert at doing everything when you can.
            </p>
            <Link to="Details">
            <button className="readmore-btn">Read More</button><br/>
            </Link>
            </div>
           <Link to="Details">
             <button className="remove-all-btn" >View All</button>
             </Link>
        
        </div>
    )
}