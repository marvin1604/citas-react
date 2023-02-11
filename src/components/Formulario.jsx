import React, { useState } from 'react'

const Formulario = () => {
  const [nombre, setNombre] = useState('Pedro')

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-5'>Añade Pacientes y <span className='text-cyan-700 font-bold'>Administralos</span></p>
      <form className='bg-white py-5 px-5 shadow-md rounded-md'>
        
        <div className='mb-5'>
          <label htmlFor='name' className='block text-gray-700 font-bold uppercase'>Nombre Paciente</label>
          <input id='name' type="text" placeholder='Nombre del paciente' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 font-bold uppercase'>Email</label>
          <input id='email' type="email" placeholder='Email Paciente' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
        </div>

        <div className='mb-5'>
          <label htmlFor='atencion' className='block text-gray-700 font-bold uppercase'>Dia de atencion</label>
          <input id='atencion' type="date" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
        </div>

        <div className='mb-5'>
          <label htmlFor='tratamiento' className='block text-gray-700 font-bold uppercase'>Tratamiento</label>
          <textarea id='tratamiento' className='border-2 w-full rounded-md mt-2'></textarea>
        </div>

        <input type="submit"
        className='bg-cyan-700 w-full p-3 text-white uppercase font-bold rounded-sm mb-5 hover:bg-cyan-600 cursor-pointer transition-all' value='Agregar Paciente'/>
      </form>
    </div>
  )
}

export default Formulario