import React from 'react'
import Paciente from './Paciente'
import { useEffect } from 'react'

const ListadoPacientes = ({pacientes, setPaciente}) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 max-[640px]:mt-20'>

      { pacientes && pacientes.length? (
        <>
          <h2 className='font-black text-3xl text-center'>Listado de Pacientes</h2>
          <p className='text-lg mt-5 text-center'>Administra tus <span className='text-cyan-700 font-bold'> Pacientes y Citas</span></p>

          <div>
            {pacientes.map((paciente)=>(
              <Paciente 
                key={paciente.id} 
                paciente={paciente}
                setPaciente={setPaciente}
                />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
          <p className='text-lg mt-5 text-center'>Comienza agregando pacientes <span className='text-cyan-700 font-bold'> y apareceran en este lugar.</span></p>
        </>
      )}
      
    </div>
  )
}

export default ListadoPacientes