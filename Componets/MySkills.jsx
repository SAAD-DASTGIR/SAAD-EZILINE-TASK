import React from "react";
import { Link } from "react-router-dom";
export default ()=>{
    return(
        <div className="myskills">
             <div className="description-skills">
            <p className="paragraph-myskills">__My skills</p>
            <h1 className="heading-description">Why Hire Me For Next Project?</h1>
            <p className="paragraph-description">
                The technological revolution is changing aspect of our lives, 
                and the fabric of society itself. it's also changing the way we learn and what we learn. 
                Factual knowledge is less prized when everything you ever need to know can be found on your phone. 
                There's no imperative to be an expert at doing everything when you can.
            </p>
            <Link to="/contactme">
            <button className="cv-btn">Download CV</button>
            </Link>
            </div>
            <section className="skills">
                <div className="skill1">

                    <img className="skill-image" src="product-design.PNG"></img>
                    <h2 className="skill-headings">Product Design</h2>
                    <p className="skill-paragraph">The technological revolution is changing aspect</p>
                </div>

                <div className="skill2">

                    <img className="skill-image" src="logo-design.PNG"></img>
                    <h2 className="skill-headings">Logo Design</h2>
                    <p className="skill-paragraph">The technological revolution is changing aspect</p>

                </div>
                <div className="skill3">
                <    img className="skill-image" src="ui-design.PNG"></img>
                    <h2 className="skill-headings">UI Design</h2>
                    <p className="skill-paragraph">The technological revolution is changing aspect</p>
                </div>
                 <div className="skill4">
                    <img  className="skill-image"src="icon-design.PNG"></img>
                    <h2 className="skill-headings">Icon Design</h2>
                    <p className="skill-paragraph">The technological revolution is changing aspect</p>
                </div>
            </section>
           
            

        </div>
    )
}