import React from 'react';
import "./ComponentThree.css";
import { useSpring, animated } from 'react-spring';
import Left3 from '../../images/left3.PNG';
import Right3 from '../../images/right3.PNG';


const ComponentThree = () => {
    const styles = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 3000,
    });
    return (
        <animated.div className="componentThree" style={styles}>
            <div className='number'>3</div>
            <div className='items-center'>
                <span className='span-left'>
                    <img src={Left3} className='img-fluid' alt='Left3' />
                </span>
                <span className='span-center'>Pentavitin</span>
                <span className='span-right'>
                    <img src={Right3} className='img-fluid' alt='Right3' />
                </span>
            </div>
            <div className='items-center'>
                <span className='span-left'>
                    <img src={Left3} className='img-fluid' alt='Left3' />
                </span>
                <span className='span-center'>Pro lipid 141</span>
                <span className='span-right'>
                    <img src={Right3} className='img-fluid' alt='Right3' />
                </span>
            </div>
            <div className='items-center'>
                <span className='span-left'>
                    <img src={Left3} className='img-fluid' alt='Left3' />
                </span>
                <span className='span-center'>Panthenol</span>
                <span className='span-right'>
                    <img src={Right3} className='img-fluid' alt='Right3' />
                </span>
            </div>
            <div className='items-center'>
                <span className='span-left'>
                    <img src={Left3} className='img-fluid' alt='Left3' />
                </span>
                <span className='span-center'>SK – Influx (Ceramides)</span>
                <span className='span-right'>
                    <img src={Right3} className='img-fluid' alt='Right3' />
                </span>
            </div>
            <div className='items-center'>
                <span className='span-left'>
                    <img src={Left3} className='img-fluid' alt='Left3' />
                </span>
                <span className='span-center'>Vitamin E</span>
                <span className='span-right'>
                    <img src={Right3} className='img-fluid' alt='Right3' />
                </span>
            </div>
            <div className='items-center'>
                <span className='span-left'>
                    <img src={Left3} className='img-fluid' alt='Left3' />
                </span>
                <span className='span-center'>Hydagen Aquaporin (Glyceryl Glucoside)</span>
                <span className='span-right'>
                    <img src={Right3} className='img-fluid' alt='Right3' />
                </span>
            </div>
            
            
        </animated.div>
    )
}

export default ComponentThree;