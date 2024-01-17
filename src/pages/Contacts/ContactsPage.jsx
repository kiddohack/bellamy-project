import emailjs from '@emailjs/browser'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from "../HeaderMap/Header"
import "./ContactsPage.css"

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default function Contacte() {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sfgrl2m', 'template_nfni78i', form.current, 'Ei8qCdN925asiPDG8')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          Swal.fire({
            title: "Multumim!",
            text: "Mesajul tau a ajuns la noi!",
            icon: "success"
          });
      }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Mesajul tau nu a putut fi livrat!",
            footer: JSON.stringify(error)
          });
      });
  };

  const [text, setText] = useState('');

  const handleTextareaChange = (event) => {
    setText(event.target.value);
    adjustTextareaHeight(event.target);
  };

  const adjustTextareaHeight = (element) => {
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  };

    return (
        <div className="contacte--container">
            <Header />
            <div className="contacte--body">
                <div className="contacte--text">
                    <h2 className="contacte--h2">Contactează-ne pentru un design personalizat</h2>
                </div>
                <div className="contacte--link">
                    <Link 
                        to="https://www.instagram.com/bellamyeco/" 
                        className='link--insta' 
                        target='_blank'
                    >
                        <i class='bx bxl-instagram'></i>Instagram
                    </Link>
                    <Link 
                        target='_blank'
                        to='#' 
                        className='link--mail' 
                        onClick={(e) => {
                            window.open('mailto:bellamyeco@gmail.com', '_blank')
                            e.preventDefault();
                        }}>
                        <i class='bx bxl-gmail'></i>bellamyeco@gmail.com
                    </Link>
                </div>
                <div className="form--img">
                    <div className="contacte--form">
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Nume</label>
                            <input type="text" name="user_name" placeholder="Numele/Prenumele" required autocomplete="off" />
                            <label>Email</label>
                            <input type="email" name="user_email" placeholder='Email' required />
                            <label>Mesaj</label>
                            <textarea name="message" placeholder='Scrie mesajul' onChange={handleTextareaChange} required />
                            <input type="submit" value="Trimite" />
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
