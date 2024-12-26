import React, { useRef, useState,useEffect } from 'react'

const App = () => {

  const [theme , settheme ] = useState(localStorage.getItem('theme'))

  const toggleTheme = () => {
    if(theme === 'light'){
      settheme('dark')
      localStorage.setItem('theme','dark')
    }
    else{
      settheme('light')
      localStorage.setItem('theme','light')
    }
  }

  const mainRef=useRef(null)

  useEffect(() => {
    mainRef.current.setAttribute("id",theme)
  })

  return (
    <div ref={mainRef} className=' h-screen w-full p-8'>
      <nav className='   flex w-full items-center justify-between '>
        <h1 className='text-4xl text-center'>hello <br /> Sheryians</h1>
        <ul className='flex justify-center gap-4'>
          <li className='text-xl font-medium '><a href='#'>Home</a></li>
          <li className='text-xl font-medium '><a href='#'>About</a></li>
          <li className='text-xl font-medium '><a href='#'>Contact</a></li>
          <button onClick={toggleTheme} className='text-xl font-medium'>Mode</button>
        </ul>
      </nav>
     <div className='h-[100%] w-full flex items-center justify-center '>
      <h1 className='text-6xl font-semibold'>SHERYIANS</h1>
     </div>
    </div>
  )
}

export default App
