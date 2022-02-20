import React from 'react';
import "./Header.css";
import HeaderLeft from '../../images/top-left3.PNG';
import HeaderRight from '../../images/top-right4.PNG';
import Logo from '../../images/logo2.PNG';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-content'>
                <div className='text-start p-3'>
                    <img src={HeaderLeft} className='img-fluid' alt='HeaderLeft' />
                </div>
                <div className='text-center mt-4'>
                    <h6>seal ... shield ... feel</h6>
                    <img src={Logo} className='img-fluid' alt='logo' />
                    <p>solo masterpiece</p>
                </div>
                <div className=' text-end'>
                    <img src={HeaderRight} className='img-fluid' alt='HeaderRight' />
                </div>
            </div>
            <div className='footer'>
                <p>HYDRACTIV</p>
            </div>
        </div>
    )
}

export default Header;