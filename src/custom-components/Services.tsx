import React from 'react'
import Service from './Service'

const Services = () => {
  return (
    <div className='bg-slate-50 grid grid-cols-1 xl:grid-cols-3 container gap-4 min-h-[60vh] w-full' >
        <div>

        <Service />
        <Service />
        <Service />
        </div>
    </div>
  )
}

export default Services