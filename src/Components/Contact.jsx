import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;`;

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width: 768px) {
  justify-content: center;
}
`;

const Right = styled.h1`
flex: 1;
margin: 60px;
@media only screen and (max-width: 768px) {
    display: none;
}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  margin-left: 250px;
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
  width: 300px;
  margin-left:0px
}
`;

const Input = styled.input`
padding: 20px;
background-color: #e1e3e5;
border: none;
border-radius: 5px;
`;

const TextArea = styled.textarea`
padding: 20px;
border: none;
border-radius: 5px;
background-color: #e1e3e5;
`;

const Button = styled.button`
background-color: #b83258;
color: white;
font-weight: bold;
cursor: pointer;
border-radius: 5px;
padding: 20px;
`;


const Contact = () => {

  const ref = useRef()
  const [sucess, setSuccess] = useState()

  const handleSubmit = e =>{
  e.preventDefault()
  emailjs.sendForm('service_aef91fa', 'template_1f4rqvf', ref.current, '8azAjqNgOm4xTIHh3')
      .then((result) => {
        console.log(result.text);
        setSuccess(true)
      }, (error) => {
        setSuccess(false)
        console.log(error.text);
      });
    
}
    return (
        <Section>
          <Container>
            <Left>
              <Form ref={ref} onSubmit={handleSubmit}>
              <Title>Contact me</Title>
              <Input placeholder="Name" name="name"/>
              <Input placeholder="Email" name="email"/>
              <TextArea placeholder="Leave your message here" name="message" rows={10} />
              <Button type="submit">Send</Button>
              {sucess && "Your message has been sent"}
              </Form>
            </Left>
            <Right>
              <Map/>
            </Right>
          </Container>
        </Section>
    )
};

export default Contact;