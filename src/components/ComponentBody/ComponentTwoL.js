import React from 'react';
import "./ComponentTwoL.css";
import { useSpring, animated } from 'react-spring';
import Left2 from"../../images/left2b.PNG"

const ComponentTwoL = () => {
    const styles = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 2000,
    });
  return (
        <animated.div className="componentTwoL" style={styles}>
            <div className='number'>2</div>
            <div className='items-left'>
                <span className='span-left'>Urea 10%</span>
                <span className='span-right'>
                    <img src={Left2} className='img-fluid' alt='Left2' />
                </span>
            </div>
            <div className='items-left'>
                <span className='span-left'>Lavander Oil</span>
                <span className='span-right'>
                    <img src={Left2} className='img-fluid' alt='Left2' />
                </span>
            </div>
            <div className='items-left'>
                <span className='span-left'>Coconut Oil</span>
                <span className='span-right'>
                    <img src={Left2} className='img-fluid' alt='Left2' />
                </span>
            </div>
            <div className='items-left'>
                <span className='span-left'>Olive Oil</span>
                <span className='span-right'>
                    <img src={Left2} className='img-fluid' alt='Left2' />
                </span>
            </div>
            <div className='items-left'>
                <span className='span-left'>Sun Flower oil</span>
                <span className='span-right'>
                    <img src={Left2} className='img-fluid' alt='Left2' />
                </span>
            </div>
            <div className='items-left'>
                <span className='span-left'>Shea Butter</span>
                <span className='span-right'>
                    <img src={Left2} className='img-fluid' alt='Left2' />
                </span>
            </div>
            <div className='items-left'>
                <span className='span-left'>Tea Tree Oil</span>
                <span className='span-right'>
                    <img src={Left2} className='img-fluid' alt='Left2' />
                </span>
            </div>
        </animated.div>
  )
}

export default ComponentTwoL;