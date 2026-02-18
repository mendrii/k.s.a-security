
import React, { Suspense, lazy } from 'react';
import { Slider } from './components/Slider';
import { sliderData } from "./data/SliderData";
const Ubicacion = lazy(() => import('./components/Ubicacion'));
import { Services } from './components/Services';  
import {About} from './components/About'; 
import { Contact } from './components/Contact';
import { Proyectos } from './components/Proyectos';
import { Beneficios } from './components/Beneficios';
import { Proceso } from './components/Proceso';

export const LandingPage = () =>{
    return (
        <div className='landing-page'>

            <section id='inicio'>
                <Slider slides={sliderData} />
            </section>

            <section id='servicios' style={{padding:'4rem 2rem'}}>
               
                <Services />
               </section>
               
            <section>
                <Proceso />
            </section>
            
            <section>
                <Proyectos />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="beneficios">
                <Beneficios />
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