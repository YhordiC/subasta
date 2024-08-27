import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'
export default function Sesion() {
    const [VistaisRegister, setVistaisRegister] = useState(true)
  return (
    <div className='bg-green-950 w-full h-screen text-white flex flex-col justify-center '>
        <h5 className='text-center'>Subastas online</h5>
        <div className='max-w-[500px] mx-auto h-[600px]'>
            <div className='w-full border-2 text-xl '>
                <button className='bg-emerald-600 w-2/4 py-3' onClick={()=>setVistaisRegister(true)}>Registrate</button>
                <button className='w-2/4 py-3' onClick={() => setVistaisRegister(false)}>Iniciar Sesión</button>
            </div>
            <div>
              { VistaisRegister 
                ? <Register/>
                : <Login/>}
            </div>
        </div>
    </div>
  )
}
