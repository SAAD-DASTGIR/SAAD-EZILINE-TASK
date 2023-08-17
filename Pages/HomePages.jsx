import React from "react";
import Navbar from "../Componets/Navbar";
import HomePage from "../Componets/HomePage";
import MySkills from "../Componets/MySkills";
import Projects from "../Componets/Projects";
import Summary from "../Componets/Summary";
import WorkTogether from "../Componets/WorkTogether";
import Foot from "../Componets/Foot";
import FigmaCEOAdvice from "../Componets/FigmaCEOAdvice";
export default ()=>{
    return(
        <>
            <Navbar/>
            <HomePage/>
            <MySkills/>
            <Projects/>
            <Summary/>
            <WorkTogether/>
            <FigmaCEOAdvice/>
            <Foot/>
        </>
    )
}