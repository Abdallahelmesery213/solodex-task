import React from 'react';
import "./ComponentTwoR.css";
import { useSpring, animated } from 'react-spring';
import TwoRight from '../../images/right2.PNG'

const ComponentTwoR = () => {
    const styles = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 2000,
    });

    return (
        <animated.div className="componentTwoR" style={styles}>
            <div className='number'>2</div>
            <div className='items-left'>
                <span className='span-right'>
                    <img src={TwoRight} className='img-fluid' alt='Left2' />
                </span>
                <span className='span-left'>Polyquaternium-67</span>
            </div>
            <div className='items-left'>
                <span className='span-right'>
                    <img src={TwoRight} className='img-fluid' alt='Left2' />
                </span>
                <span className='span-left'>Chamomile Extract</span>
            </div>
            
        </animated.div>
    )
}

export default ComponentTwoR;