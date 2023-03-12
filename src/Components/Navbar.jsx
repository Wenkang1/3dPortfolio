import React from "react";
import styled from "styled-components";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Section = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 10px;
    }
`;

const Links = styled.div`
display: flex;
align-items: center;
gap: 50px;
`;

const List = styled.ul`
display: flex;
gap: 20px;
list-style: none;

@media only screen and (max-width: 768px) {
        display: none;
        
    }
`;

const ListItem = styled.li`
cursor: pointer;
`;

const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.3);
    cursor: pointer;
  }
`

const Button = styled.button`
width: 100px;
padding: 10px;
background-color: #6f212e;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
`
const Icons = styled.div`
display: flex;
align-items: center;
gap: 15px;
`

const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <SocialIcons href="https://github.com/Wenkang1">
                        <AiFillGithub size={25}/>
                    </SocialIcons>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Studio</ListItem>
                    <ListItem>Works</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
                </Links>
                <Icons>
                    <SocialIcons href="https://www.linkedin.com/in/wenkang1">
                        <AiFillLinkedin size={25}/>
                    </SocialIcons>
                    <Button href='mailto:wenkang1@ualberta.ca'>Contact Now</Button>
                </Icons>
            </Container>
        </Section>
    )
};

export default Navbar;