import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactimg from '../assets/img/contact-img.svg'
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const StyledContactForm = styled.div`
label {
    margin-top: 1rem;
  }

  input[type="submit"] {
    margin-top: 2rem;
    cursor: pointer;
    background: rgb(249, 105, 14);
    color: white;
    border: none;
  }
}
`


export const Contact = () => {

  const [buttonText, setButtonText] = useState('Send');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .sendForm(
        "service_fnphssv",
        "template_ligpso6",
        form.current,
        "VicsPNdXovrmg_cR5"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
          setButtonText("Send");
        },
        (error) => {
          console.log(error.text);
          setButtonText("Send");
        }
      );
  };

    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-item-center">
                    <Col md={6}>
                        <img src={contactimg} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <StyledContactForm>
                        <form ref={form} onSubmit={sendEmail}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" placeholder="Full Name" required="required" name="user_name" />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="email" placeholder="Email" required="required" name="user_email"/>
                                </Col>
                                <Col size={12} className="px-1">
                                    <textarea row="6" placeholder="Message" required="required" name="message" />
                                    <button type="Submit" value="send"><span>{buttonText}</span></button> 
                                </Col>
                            </Row>
                            
                        </form>
                        </StyledContactForm>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}