import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5 max-[640px]:mt-20'>
      <h2 className='font-black text-3xl text-center'>ListadoPacientes</h2>
      <p className='text-lg mt-5 text-center'>Administra tus <span className='text-cyan-700 font-bold'> Pacientes y Citas</span></p>
      <div className='h-screen overflow-y-scroll'>
      <Paciente/>
      <Paciente/>
      <Paciente/>
      </div>
      
    </div>
    
  )
}

export default ListadoPacientes