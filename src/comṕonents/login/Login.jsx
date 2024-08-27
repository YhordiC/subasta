import React from 'react'

export default function Login() {
  return (
   <form className='flex flex-col gap-2 text-black'>
    <label htmlFor="correo" className='text-white'>Correo<br/>
    <input type='email' name='correo' placeholder='Escribe tu correo' className='w-full h-10 rounded-md px-3 text-black'/>
    </label>
    <label htmlFor="password" className='text-white'>Contraseña<br/> 
    <input type='password' name='contraseña' placeholder='Escribe tu contraseña' className='w-full h-10 rounded-md px-3 text-black'/>
    </label>
    <button type="submit" className='w-full bg-teal-500 text-white h-10 hover:bg-teal-700 transition-colors'>Iniciar Sesión</button>
   </form>
  )
}
