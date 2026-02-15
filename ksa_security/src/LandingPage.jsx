
import React, { Suspense, lazy } from 'react';
import { Slider } from './components/Slider';
import { sliderData } from "./data/SliderData";
const Ubicacion = lazy(() => import('./components/Ubicacion'));
import { Services } from './components/Services';  
import {About} from './components/About'; 
import './style/Ubicacion.css';
import { Contact } from './components/Contact';

export const LandingPage = () =>{
    return (
        <div className='landing-page'>

            <section id='inicio'>
                <Slider slides={sliderData} />
            </section>

            <section id='servicios' style={{padding:'4rem 2rem'}}>
               
                <Services />
               </section>
            
            

            <section id="about">
                <About />
            </section>

           

            <Suspense fallback={<div>Cargando...</div>}>
                <div id="contacto">
                    <Contact />
                </div>
            </Suspense>

            <section id='ubicacion'>
                <Ubicacion />
            </section>

        </div>
    )
};

export default LandingPage;