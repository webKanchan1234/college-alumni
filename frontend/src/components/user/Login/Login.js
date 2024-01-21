import React from 'react'
import "./login.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className='login'>
            <h2>Login Member</h2>
            <div className="login-form">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <div className="form-btn">
                        <Button id="login-btn" type="submit">
                            Login
                        </Button>
                        <div className="register-btn">
                            <Link to="/register" id='register-btn'>Register</Link>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login