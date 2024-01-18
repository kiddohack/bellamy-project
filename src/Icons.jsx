import React from "react";
import { Link } from "react-router-dom";
import './Icons.css';

function Icons(){
    return(
        <>
            <div className="icons">
                <Link to="https://www.instagram.com/bellamyeco/" target="_blank"><i class="ri-instagram-line"></i></Link>
            </div>
        </>
    )
}

export default Icons;
