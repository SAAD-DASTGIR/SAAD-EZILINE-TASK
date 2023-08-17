import React from "react";
export default ()=>{
    return(
        <div className="get-in-touch" >
            
             <div className="contact-content">

                <h3 className="Contactme">--Contact me</h3>
                <h1 className="intouchheading">Get In Touch With Me</h1>
                <p className="pararagraphintouch">
                    The technological revolution is changing aspect of our lives, 
                    and the fabric of society itself. it's also changing the way we 
                    learn and what we learn. Factual knowledge is less prized when 
                    everything you ever need to know can be found on your phone. 
                    There's no imperative to be an expert 
                    Factual knowledge is less prized when everything you ever 
                    need to know can be found at doing everything.
                </p>
                <h2 className="phone">Phone</h2>
                <p className="number">+99 (0) 101 0000 888</p>
                <p className="number">+99 (0) 101 0000 777</p>
                <h2 className="email"> Email</h2>
                <p className="number">Info@yourdomain.com</p>
                <p className="e-number">Info@yourdomain.net</p>
             </div>
             <form className="form">
                <div className="twoinputs">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                </div>
            
            <textarea placeholder="Message" className='meassage'></textarea>
            <button type="submit" className='btn4'>Submit</button>
             </form>
            

        </div>
    )
}