import React from 'react';
import "./ComponentOneL.css";
import { useSpring, animated } from 'react-spring';
import ComponOne from "../../images/componOne.PNG";

const ComponentOneL = () => {
    const styles = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 1000,
    });
    return (
        <animated.div className="componentOneL" style={styles}>
            <div className='number'>1</div>
            <div className='img'>
                <img src={ComponOne} className='img-fluid' alt='ComponOne' />
            </div>
        </animated.div>
    )
}

export default ComponentOneL;