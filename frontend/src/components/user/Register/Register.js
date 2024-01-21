import React from 'react'
import "../Login/login.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom"

const Register = () => {
    return (
        <div className='login'>
            <h2>Register Member</h2>
            <div className="login-form">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <div className="form-btn">
                        <Button id="login-btn" type="submit">
                            Register
                        </Button>
                        <div className="register-btn">
                            <Link to="/login" id='register-btn'>Login</Link>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Register