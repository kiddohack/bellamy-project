import React from "react";
import './Icons.css';
import { Link } from "react-router-dom";

function Icons(){
    return(
        <>
            <div className="icons">
                <Link to="https://www.instagram.com/bellamyeco/" target="_blank"><i class="ri-instagram-line"></i></Link>
                {/* <a href="#"><i class="ri-youtube-line"></i></a>
                <a href="#"><i class="ri-dribbble-line"></i></a> */}
            </div>

            {/* <div className="scroll-down">
                <a href="#"><i class="ri-arrow-down-s-fill"></i></a>
            </div> */}
        
        </>
    )
}

export default Icons;
