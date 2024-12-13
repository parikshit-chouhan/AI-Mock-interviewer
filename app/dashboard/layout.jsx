import React from 'react'
import Header from './_components/Header'
import { Toaster } from '@/components/ui/toaster'
import Footer from './_components/Footer'

function DahsboardLayout({ children }) {
  return (
    <div>
      <Header />
      <div className='mx-5 md:mx-20 lg:mx-36'>
        <Toaster />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default DahsboardLayout