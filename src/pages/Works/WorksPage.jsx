import React, { useEffect, useState } from 'react'
import img1 from "../../assets/IMG_1715.webp"
import img2 from '../../assets/IMG_1716.webp'
import img3 from '../../assets/IMG_1717.webp'
import Header from '../HeaderMap/Header.jsx'
import './WorksPage.css'

export default function Lucrari() {
    return (
        <div className="works--container">
            <Header />
            <div className="works--body">
                 <Product
                    id='1' 
                    img={img1}
                    price='200MDL'
                    title='Torbă eco, brodată cu ață și cusută cu biser, din bumbac 🪡'
                    description='Culorile vibrante și cusăturile atent realizate cu ață adaugă un aer vesel, iar căpșunile cusute cu biser îi conferă un sentiment dulce. Perfectă pentru cei care adoră accentele vesele și detalii jucăușe în accesorii eco.' 
                    marime='53x35cm'
                />
                <Product 
                    id='2' 
                    img={img2}
                    price='200MDL'
                    title='Torbă eco, brodată, din bumbac🪡'
                    description='Torba eco cu broderie tradițională - piesă de artă ambulantă. Fiecare cusătură reprezintă o poveste tradițională, o expresie autentică a tradiției într-un context contemporan.' 
                    marime='53x35cm'
                />
                <Product
                    id='3' 
                    img={img3}
                    price='200MDL'
                    title='Torbă eco, cusută cu biser, din bumbac 🪡'
                    description='Frunzele delicate brodate adaugă un farmec natural acestei torbe, transformând-o într-o piesă plină de prospețime și stil.' 
                    marime='53x35cm'
                />
            </div>
        </div>
    )
}

function Product(props) {
    if (props.id % 2 === 0) {
        var check = false;
    } else check = true;

    const [isTextVisible, setIsTextVisible] = useState(true);

    const handleTextTap = () => setIsTextVisible(!isTextVisible)

    useEffect(() => {
        const handleResize = () => {
          // Adjust initial state based on screen size
          setIsTextVisible(window.innerWidth > 600);
        };
    
        // Initial setup
        handleResize();
    
        // Event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <div className={`products--box ${check ? 'impar' : 'par'}`}>
            {!check && <img src={props.img} alt={props.title} />}
            <div className="products--text" onClick={handleTextTap} >
                <p className='products--par'>{props.title}</p>
                {isTextVisible && <p className='products--par description'>{props.description}</p>}
                <p className="products--par size">Marime: {props.marime}</p>
                <p className="products--par">Pret: {props.price}</p>
            </div>
            {check && <img src={props.img} alt={props.title} />}
        </div>

    )
}