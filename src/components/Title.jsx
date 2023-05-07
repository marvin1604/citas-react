import React from 'react'
import styled from 'styled-components'

const Title = () => {
  return (
    <TitleContainer>
        <h1 className='font-black text-5xl text-center mx-auto mb-5'>Seguimiento Pacientes <span className='text-cyan-700'> Odontologia </span></h1>
        <h2 className='font-black text-3xl text-center mx-auto'><span className='text-cyan-700'> Dra. Joselyn Ramirez </span></h2>
    </TitleContainer>
  )
}

export default Title

const TitleContainer = styled.div`
  margin-top: 100px;
`

