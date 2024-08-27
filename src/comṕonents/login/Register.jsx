import React from 'react'

export default function Register() {
  return (
    <form  className='flex flex-col gap-2'>
      <label htmlFor="correo"  className='text-white'>Nombre
        <input type='text' name='name' placeholder='Escribe tu nombre'  className='text-black w-full h-10 rounded-md px-3'/>
      </label>
      <label htmlFor="correo"  className='text-white'>Apellido
        <input type='text' name='apellido' placeholder='Escribe tu apellido'  className='text-black w-full h-10 rounded-md px-3'/>
      </label>
      <label htmlFor="correo"  className='text-white'>Fecha de nacimiento
        <input type='date' name='fecha de nacimiento' placeholder='Escribe tu fecha de nacimiento'  className=' text-black w-full h-10 rounded-md px-3'/>
      </label>
      <label htmlFor="correo"  className='text-white'>Correo
        <input type='email' name='correo' placeholder='Escribe tu correo'  className='w-full h-10 rounded-md px-3 text-black'/>
      </label>
      <label htmlFor="password"  className='text-white'>Contraseña
        <input type='password' name='contraseña' placeholder='Escribe tu contraseña'  className='w-full h-10 rounded-md px-3 text-black'/>
      </label>
      <button type="submit" className='w-full bg-teal-500 text-white h-10 hover:bg-teal-700 transition-colors'>Crear Usuario</button>
    </form>
  )
}
