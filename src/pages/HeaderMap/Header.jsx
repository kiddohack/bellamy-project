import React, {useState} from 'react'
import './Header.css'
import {Link} from "react-router-dom"

function Header () {

    const[open, setOpen] = useState(false);

    return (
        <header className='container'>
            <Link to={"/"} className='logo' >Bellamy Eco</Link>

            <ul className={`navlist ${open ? 'active' : 'inactive'}`}>
                <MenuItem text={"Acasă"} link={"/bellamy-project/"}/>
                <MenuItem text={"Despre Noi"} link={"/bellamy-project/despre"} />
                <MenuItem text={"Lucrări"} link={"/bellamy-project/lucrari"} />
                <MenuItem text={"Contacte"} link={"/bellamy-project/contacte"} />
            </ul>

            <div className={`bx ${open ? 'bx-x' : 'bx-menu'}`} id="menu-icon" onClick={() => {setOpen(!open)}}></div>
        </header>
    )
}

function MenuItem (props){
    return(
        <li className="menuItem"><Link to={props.link}>{props.text}</Link></li>
    )
}

export default Header;