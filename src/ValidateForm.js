import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import CountrySelect from 'react-bootstrap-country-select';
import './Sidebar2.css'
import * as EmailValidator from 'email-validator';
import { Button } from 'react-bootstrap';
import validator from 'validator';
function ValidateForm() {

    const [validated, setValidated] = useState(false);
    const [value, setValue] = useState(null);
    const [number, setnumber] = useState(null);
    
    const handleChange = (e) => {
        let email = e.target.value;

        if (EmailValidator.validate(email)) {
            setValue("emial is correct");
        } // true

    }

    const handleChange1 = (e) => {
        let value1 = (e.target.value);

        if (value1.length > 10 && validator.isMobilePhone(value1)) {
            setnumber("phone no is valid");
        }


    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className="form">
            <h5> Thank you so much for taking the time!</h5>
            <p> Please Provide the below details</p>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="col-8" controlId="fomBasicfirstname">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" placeholder="John" />
                </Form.Group>

                <Form.Group className="col-8" controlId="fomBasicLastname">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="text" placeholder="Doe" />
                </Form.Group>

                <Form.Group className="col-12" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter the postal address" rows={3} />
                </Form.Group>

                <Form.Group className="col-10">
                    <Form.Label>Country:</Form.Label>
                    <CountrySelect
                        type="search"
                        value={value}
                        onChange={setValue}
                        matchNameFromStart={false}
                        matchAbbreviations
                    />

                </Form.Group>

                <Form.Group className="col-10" controlId="formBasicEmail">
                    <Form.Label>Email ID:</Form.Label>
                    <Form.Control required name="email" type="email" placeholder="Enter email" onChange={handleChange} isInvalid />
                    <Form.Control.Feedback type="invalid" >please enter email  </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid" > {value} </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="col-6" controlId="formBasicPassword">
                    <Form.Label>Phone number:</Form.Label>
                    <Form.Control required name="phone" type="phonenumber" placeholder="Phone_number" onChange={handleChange1} isInvalid />
                    <Form.Control.Feedback type="invalid"> please enter no  </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid"> {number} </Form.Control.Feedback>

                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit Feedback
                </Button>
            </Form>

        </div>
    );
}

export default ValidateForm;