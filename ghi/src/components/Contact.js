import { useState } from "react";
import { Container } from "react-bootstrap";
import contactImg from ../assets/img/contact-img.png";

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] useState('Send');
    const [status, setStatus] = useState({})


    return (
        <section className="contact" id="connect">
            <Containers>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us"/>
                    </Col>

                </Row>
            </Containers>
        </section>
    )
}
