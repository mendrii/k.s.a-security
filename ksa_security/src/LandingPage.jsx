import React from 'react';
import { Slider } from '../components/Slider';
import { sliderData } from "../data/SliderData";

export const LandingPage = () =>{
    return (
        <div className='landing-page'>

            <section id='inicio'>
                <Slider slides={sliderData} />
            </section>

            <section id='servicios' style={{padding:'4rem 2rem'}}>
                <h2>Nuestros servicios</h2>

            </section>

        </div>
    )
};

export default LandingPage;