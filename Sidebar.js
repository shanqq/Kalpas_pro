import React, { useState } from 'react';
import logo from './logo.svg';
import { Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import horizontalpx from './horizontalpx.svg.png';
import squares from './squares.png';
import './Sidebar.css';
import Sidebar2 from './Sidebar2'
import props from 'prop-types';


function Sidebar() {

    const [click, setclick] = useState(false);
    console.log(click);
    return (
        <div className="sidebar">
            <div className="reader">
                <img src={logo}></img>
                <h6>Hi Reader </h6>
                <p> Here's your News!</p>
            </div>

            <div className="feedback">
                <h3>Have a Feedback ?</h3>
                <Button className="listening" onClick={() => setclick(!click)}>We're Listening</Button>
            </div>


            <div className="toggle">
                <h3>View Toggle</h3>
                <div className="toggle-button">
                    <ToggleButtonGroup type="radio" name="options">
                        <ToggleButton variant="info"><img src={horizontalpx} /> </ToggleButton>
                        <ToggleButton variant="info"><img src={squares} /></ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>

            <div>
                {click && <Sidebar2 clickfeed={click} />}
            </div>

        </div>
    );
}


export default Sidebar;
