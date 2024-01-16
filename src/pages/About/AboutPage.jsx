import React from 'react'
import './AboutPage.css'
import Header from '../HeaderMap/Header'

export default function About() {
    return(
        <div className="about--container">
            <Header />
            <div className="about--body">
                <h2 className="about--h2">Despre Noi</h2>
                <p className="about--text">Bellamy reprezintă o poveste pasionată despre frumos și unicitate. Ne dedicăm cu drag creației de torbe eco, brodate și cusute meticulos, din bumbac. Cu o atenție deosebită la detalii și posibilitatea de a personaliza designul, aducem în lumea ta accesorii unice și funcționale. În fiecare cusătură, descoperi pasiunea noastră pentru frumos și angajamentul față de mediu!</p>
                <h2 className="about--thanks">Mulțumesc!</h2>
            </div>
        </div>
    )
}