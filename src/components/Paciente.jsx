import React from 'react'
import styled from 'styled-components'

const Paciente = ({paciente, setPaciente}) => {
  return (
    <div className='m-5 p-10 bg-white rounded-md shadow-lg'>
      <p className='font-bold mb-3 text-gray-700 uppercase
      '>Nombre: <span className='font-normal normal-case'>{paciente.nombre}</span></p>

      <p className='font-bold mb-3 text-gray-700 uppercase
            '>Email: <span className='font-normal normal-case'>{paciente.email}</span></p>

      <p className='font-bold mb-3 text-gray-700 uppercase
            '>Dia de Atencion: <span className='font-normal normal-case'>{paciente.fechaAtencion}</span></p>

      <p className='font-bold mb-3 text-gray-700 uppercase
            '>Tratamiento: <span className='font-normal normal-case'>{paciente.tratamiento}</span></p>
      <ContainerButtons>
        <Button 
        type='button'
        onClick={() => setPaciente(paciente)}
        >Editar</Button>
        <ButtonEliminar type='button'>Eliminar</ButtonEliminar>
      </ContainerButtons>
    </div>
  )
}

export default Paciente 

const ContainerButtons= styled.div`
  display:flex;
  justify-content: space-between
`

const Button = styled.button`
  background: #112DAB;
  color: white;
  padding: 2px 30px;
  border-radius: 4px;

  &:hover{
    background: #120DAB;
  }
`

const ButtonEliminar = styled(Button)`
  background: red;
  &:hover{
    background: #990000;
  }
`