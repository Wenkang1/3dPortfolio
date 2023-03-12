import Hero from "./Components/Hero"
import Contact from "./Components/Contact"
import Work from "./Components/Work"
import styled from "styled-components"
import Who from "./Components/Who"

export const Container = styled.div`
height: 100vh;
scroll-snap-type: mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
color: white;
background: url("./img/bg.jpeg");
&::-webkit-scrollbar{
  display: none;
}
`;



function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Work/>
      <Contact/> 
    </Container>

  )
}

export default App
