import React from 'react';
import "./ComponentOneR.css";
import { useSpring, animated } from 'react-spring';
import ComponOne from "../../images/componOne.PNG";

const ComponentOneR = () => {
    const styles = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 1000,
    });
    return (
        <animated.div className="componentOneR" style={styles}>
            <div className='img'>
                <img src={ComponOne} className='img-fluid' alt='ComponOne' />
            </div>
            <div className='number'>1</div>
        </animated.div>
    )
}

export default ComponentOneR;