
import React, { Suspense, lazy } from 'react';
import { Slider } from './components/Slider';
import { sliderData } from "./data/SliderData";
import Ubicacion from './components/Ubicacion';
import { Services } from './components/Services';   
import './style/Ubicacion.css';
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));

export const LandingPage = () =>{
    return (
        <div className='landing-page'>

            <section id='inicio'>
                <Slider slides={sliderData} />
            </section>

            <section id='servicios' style={{padding:'4rem 2rem'}}>
                <h2>Nuestros servicios</h2>
                <Services />
               
               <Suspense fallback={<div>Cargando...</div>}>
                <div id="contacto">
                    <Contact />
                </div>
                </Suspense>

            </section>
            <section id='ubicacion'>
                <Ubicacion />
            </section>

        </div>
    )
};

export default LandingPage;