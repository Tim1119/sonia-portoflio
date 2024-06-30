import React from 'react'
import { Button } from '../../components/ui/button'
import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <div className='border shadow-sm p-5 mt-5 font-[nunito] bg-white' >
        <div>

        <img className=' w-full h-[300px] rounded-lg' src="https://10web-site.ai/31/wp-content/uploads/sites/34/2024/06/soroush-karimi-crjPrExvShc-unsplash_3CIAUiEI.webp" alt="" />
        </div>
        <div className='gap-2 grid mt-2 font-[nunito]' >
            <h3 className='text-[#34495E] text-2xl font-bold' >Lifestyle Management</h3>
            <div className='text-base lg:text-base font-light text-justify leading-[32px] lg:leading-8 line-clamp-[10]'  >
              <p>
                Odur lifestyle management services help you strike a balance between work and personal life by taking care of personal errands, shopping, entertainment planning, and home.
              </p>
            </div>
        {/* <Button asChild className='w-fit bg-lemon'>
            <Link to="/login">Read More</Link>
        </Button> */}
        </div>
    </div>
  )
}

export default Service