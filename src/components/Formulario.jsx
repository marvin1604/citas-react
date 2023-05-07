import React, { useState, useEffect } from "react";
import Error from "./Error";
import { keyframes } from "styled-components";

const Formulario = ({pacientes, setPacientes, paciente}) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [atencion, setAtencion] = useState("");
  const [tratamiento, setTratamiento] = useState("");

  const [error, setError] = useState(false);

  useEffect(()=>{
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setEmail(paciente.email)
      setAtencion(paciente.fechaAtencion)
      setTratamiento(paciente.tratamiento)
    }
  },[paciente])
  
  const generarId =()=>{
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    //validacion del formulario
    if([nombre, email, atencion, tratamiento].includes('')){
      setError(true)
    }else{
      setError(false)
      let fechaAtencion = new Date(atencion + 'T00:00:00-05:00').toLocaleDateString('es-Es')
      const objetoPaciente = {
        nombre,
        email,
        fechaAtencion,
        tratamiento,
        id : generarId()
      }
      setPacientes([...pacientes, objetoPaciente])
      setNombre('')
      setEmail('')
      setAtencion('')
      setTratamiento('')
    }
  }

  return ( 
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-5">
        Añade Pacientes y{" "}
        <span className="text-cyan-700 font-bold">Administralos</span>
      </p>
      <form 
      onSubmit={handleSubmit}
      className="bg-white py-5 px-5 shadow-md rounded-md">
        {error && <Error mensaje='Todos los campos son obligatorios'/> }
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-gray-700 font-bold uppercase"
          >
            Nombre Paciente
          </label>
          <input
            id="name"
            type="text"
            placeholder="Nombre del paciente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 font-bold uppercase"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Paciente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="atencion"
            className="block text-gray-700 font-bold uppercase"
          >
            Dia de atencion
          </label>
          <input
            id="atencion"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={atencion}
            onChange={(e)=> setAtencion(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="tratamiento"
            className="block text-gray-700 font-bold uppercase"
          >
            Tratamiento
          </label>
          <textarea
            id="tratamiento"
            className="border-2 w-full rounded-md mt-2 p-3"
            value={tratamiento}
            onChange={(e)=> setTratamiento(e.target.value)}
          ></textarea>
        </div>

        <input
          type="submit"
          className="bg-cyan-700 w-full p-3 text-white uppercase font-bold rounded-sm mb-5 hover:bg-cyan-600 cursor-pointer transition-all"
          value="Agregar Paciente"
        />
      </form>
    </div>
  );
};

export default Formulario;
