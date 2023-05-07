import { useState } from "react"
import styled from "styled-components"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import Title from "./components/Title"
// import "./App.css"

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente,setPaciente] = useState({})

  return (
    <DivContain >
      <Header />
      <Title/>
      <FormularioContainer>
        <Formulario 
          pacientes={pacientes} 
          setPacientes={setPacientes}
          paciente={paciente}
          />
        <ListadoPacientes 
          pacientes= {pacientes}
          setPaciente={setPaciente}
          />
      </FormularioContainer>
      
    </DivContain>
  )
}


export default App

const DivContain = styled.div`
    position:relative;
    margin:10px;
    display:flex;
    max-width:1400px;
    flex-direction:column;
    align-items:center;
    width:100%;
    margin:auto;
  `

  const FormularioContainer = styled.div`
    display:flex;
    width:100%;
  `