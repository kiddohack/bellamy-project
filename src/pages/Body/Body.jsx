import React from "react";
import "./Body.css";
import logo from "../../assets/main.png"
import {Link} from 'react-router-dom'

function Section() {
    return(
        <section className="hero" >
                <div className="hero-text">
                    <h1>Bellamy</h1>
                    <h4>100% Personalizat</h4>
                    <p>La noi găsești cea mai Eco-Friendly pungă de Shopping</p>
                    {/* <h5>#1 pe Piata Autohtona</h5> */}
                    {/* <a href="#">Comanda</a> */}
                    <Link to={'/contacte'} className="hero-buy">Comandă</Link>
                    {/* <a href="#" className="ctaa"><i class='bx bx-select-multiple'></i>Alege combinatia</a> */}
                    <Link to={'/lucrari'} className="hero-buy second"><i class='bx bx-select-multiple'></i>Vizualizeaza lucrările</Link>
                </div>

                <div className="hero-img">
                    <img src={logo} />
                </div>
        </section>
    )
}

export default Section;