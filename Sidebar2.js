import React, { useState } from 'react';
import logo from './logo.svg';
import { Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import horizontalpx from './horizontalpx.svg.png';
import './Sidebar2.css';
import ValidateForm from './ValidateForm'
import props from 'prop-types';

function Sidebar2(clickfeed) {

    let boolean=clickfeed.clickfeed;

    const [click, setclick] = useState(boolean);
    console.log(boolean);
    console.log(click);
           
    return (
        <div>
        {click &&
            <div className="sidebar2">
            <div className="reader2">
                <img src={logo}></img>
                <h6>Hi Reader </h6>
                <p> Here's your News!</p>
            </div>

            <div className="feedback2">
                <h3>Have a Feedback ?</h3>
                <Button className="listening" onClick={() => setclick(!boolean)}>We're Listening</Button>
            </div>
            <ValidateForm />
        </div>
        }
        </div>
    );
}


export default Sidebar2;
