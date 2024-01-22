import photoOne from'./2.4.webp';
import photoTwo from './2.1.webp';
import photoThree from './3.8.webp';
import photoFour from './2.10.webp';
import photoFive from './2.7.webp';
import photoSix from './2.3.webp';
import photoSeven from './1.7.webp';
import photoEight from './1.8.webp';
import photoNine from './2.9.webp';

import { useState, useEffect } from 'react';

export const About = () => {

    const images = [
        photoOne,
        photoTwo, 
        photoThree,
        photoFour, 
        photoFive, 
        photoSix, 
        photoSeven,
        photoEight,
        photoNine
    ];

    const [currentPicture, setCurrentPicture] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPicture(prevIndex => (prevIndex +1)% images.length);
        }, 2000);
        return() => {
            clearInterval(interval);
        };
    }, [images.length])

    return(
        <div className='container_slides'>
            <div className='hours-info'>
            <p className='par'>Our Sweet Little Shop</p>
            <p className='par'>Visit us every day of the week! Our hours are:</p>
            <p className='par'>Monday-Friday 8am-6pm</p>
            <p className='par'>Sunday 8am-4pm</p>
            <p className='par'> We are located at 221B Baker Street, London NW1 6XE</p>
            <div>
                <a href='https://www.google.com/maps/place/221B+Baker+St,+London+NW1+6XE,+%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F/@51.523767,-0.1611306,17z/data=!3m1!4b1!4m6!3m5!1s0x48761acf33628211:0x445d7677a88322e1!8m2!3d51.523767!4d-0.1585557!16s%2Fg%2F11bw4hsx_m?entry=ttu'target="_blank" rel="noopener noreferrer">
                <button className='btn_location'>get location</button>
                </a>
                </div>
            </div>
            <div>
            <img className="slides"src={images[currentPicture]} alt="seasonal favorites"/>
            </div>
        </div>
    )
}