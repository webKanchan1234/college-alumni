import React, { useState } from 'react'
import "./sponsorship.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Sponsorship = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='sponsorship'>
                <div className="sponsorship-image">
                    <img src="https://sayidan.kenzap.com/wp-content/uploads/2016/07/galery-popup-14-4-1200x637.jpg" alt="" />
                </div>
                <h3>NOVEMBER 17, 2022</h3>
                <h2>CLUB SPONSORSHIP 2022-2023</h2>
                <p>727 South Roehampton Ave. Fuquay Varina, NC 27526</p>

                <div id="map">
                    <Button variant="primary" onClick={handleShow}>
                        View Map
                    </Button>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Event Location</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="event-location">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.087962560553!2d77.64690777508414!3d12.837592217802182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b9117e424a7%3A0x3931ea5aa5347159!2sButterfly%20PG!5e0!3m2!1sen!2sin!4v1705086919114!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
                <p>
                    View map
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velitesse molestie consequat, vel illum dolore eu feugiat. nulla facilisis at vero eros et accumsan. molestie consequat, vel illum dolore eu.

                    Duis autem vel eum iriure dolor in hendrerit in vulputate velitesse molestie consequat, vel illum dolore eu feugiat. nulla facilisis at vero eros et accumsan. molestie consequat, vel illum dolore eu. Duis autem vel eum iriure dolor in hendrerit in vulputate velitesse molestie consequat, vel illum dolore eu feugiat. nulla facilisis at vero eros et accumsan. molestie consequat, vel illum dolore eu.

                    Duis autem vel eum iriure dolor in hendrerit in vulputate velitesse molestie consequat, vel illum dolore eu feugiat. nulla facilisis at vero eros et accumsan. molestie consequat, vel illum dolore eu. Duis autem vel eum iriure dolor in hendrerit in vulputate velitesse molestie consequat, vel illum dolore eu feugiat. nulla facilisis at vero eros et accumsan. molestie consequat, vel illum dolore eu.</p>
            </div>
            <div className="parallax">
                <div className="parallax-content">
                    <h3>Don’t Miss Awesome Story From Our Alumni</h3>
                    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate.</p>
                    <div className="input">
                        <input type="text" placeholder='Email Address' />
                    </div>
                    <div className="input"><Button className='btn' id='login-btn'>Subscribe</Button></div>
                </div>
            </div>
        </>

    )
}

export default Sponsorship