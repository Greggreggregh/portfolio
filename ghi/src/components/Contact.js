import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/greg-calling-memoji.png";

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    const mailServerUrl = process.env.MAIL_SERVER_URL

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch(`${mailServerUrl}/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails)
        });
        setButtonText("Send");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ success: true, message: "Message sent successfully"});
        } else {
            setStatus({ success: false, message: "Something went wrong, please try again later"});
        }
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col xs={{span: 6, offset: 6, order: 'last'}} lg={{span: 6, offset: 0, order: 'first'}} className="align-self-end d-flex justify-content-center">
                        <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col lg={{span: 6}}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col xs={{span: 10, offset: 1}} sm={{span: 6, offset: 0}} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col xs={{span: 10, offset: 1}} sm={{span: 6, offset: 0}} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col xs={{span: 10, offset: 1}} sm={{span: 6, offset: 0}} className="px-1">
                                    <input type="text" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col xs={{span: 10, offset: 1}} sm={{span: 6, offset: 0}} className="px-1">
                                    <input type="text" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col xs={{span: 10, offset: 1}} sm={{span: 12, offset: 0}} className="px-1">
                                    <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                        <Col className="px-2">
                                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                        </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
