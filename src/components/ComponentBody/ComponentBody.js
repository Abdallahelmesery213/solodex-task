import React from 'react';
import "./ComponentBody.css";
import ComponentThree from './ComponentThree';
import ComponentTwoL from './ComponentTwoL';
import ComponentTwoR from './ComponentTwoR';

const ComponentBody = () => {
  return (
      <div className='componentBody'>

            <div className='row row1'>
                <div className='col-md-6 text-md-start text-sm-center col-left'>
                    <h6>SOLODEX</h6>
                    <h6>HYDRACTIV UREA CREAM</h6>
                    <p>For Dry And Very Dry Skin</p>
                </div>
                <div className='col-md-6 text-md-start text-sm-center col-right'>
                    <h6>SOLODEX</h6>
                    <h6>HYDRACTIV CLEANSER</h6>
                    <p>For Dry And Very Dry Sensitive Skin</p>
                </div>
            </div>

            <div className='row'>
                <div className='col-lg-3'>
                    <ComponentTwoL />
                </div>
                <div className='col-lg-6 compon3'>
                    <ComponentThree />
                </div>
                <div className='col-lg-3'>
                    <ComponentTwoR />
                </div>
            </div>
      </div>
  )
}

export default ComponentBody;