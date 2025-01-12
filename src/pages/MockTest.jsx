import React from 'react'
import { Header, Sidebar } from '../Components'

function MockTest() {
  return (
    <div className='w-full h-screen  flex gap-5 lg:flex-row flex-wrap md:flex-col'>
      <Sidebar />
      <Header />
    </div>
  )
}

export default MockTest