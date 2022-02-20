import React from 'react';
import "./FooterGal.css";
import Col1 from '../../images/col1.PNG';
import Col2 from '../../images/col2.PNG';
import Col3 from '../../images/col3.PNG';
import Col4 from '../../images/col4.PNG';

const FooterGal = () => {
  return (
    <React.Fragment>
        <div className='col-md-3 col1'>
            <img src={Col1} className='img-fluid' alt='Col1' />
        </div>
        <div className='col-md-3 col2'>
            <img src={Col2} className='img-fluid' alt='Col2' />
        </div>
        <div className='col-md-3 col3'>
            <img src={Col3} className='img-fluid' alt='Col3' />
        </div>
        <div className='col-md-3 col4'>
            <img src={Col4} className='img-fluid' alt='Col4' />
        </div>
    </React.Fragment>
  )
}

export default FooterGal;