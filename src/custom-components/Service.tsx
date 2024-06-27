import React from 'react'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <div className='border shadow-sm p-4 mt-5' >
        <div>

        <img className='font-[nunito] w-full h-[300px]' src="https://10web-site.ai/31/wp-content/uploads/sites/34/2024/06/soroush-karimi-crjPrExvShc-unsplash_3CIAUiEI.webp" alt="" />
        </div>
        <div className='gap-2 grid mt-2 font-[nunito]' >
            <h3 className='text-lemon text-2xl font-bold' >Lifestyle Management</h3>
        <p className='line-clamp-4 font-[nunito] text-lg' >
        Our lifestyle management services help you strike a balance between work and personal life by taking care of personal errands, shopping, entertainment planning, and home
        </p>
        <Button asChild className='w-fit bg-lemon'>
            <Link to="/login">Read More</Link>
        </Button>
        </div>
    </div>
  )
}

export default Service