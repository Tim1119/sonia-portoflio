import Service from './cards/Service'


const Services = () => {
  return (
    <div className='bg-[#F7FAFC] min-h-[60vh] w-full' >
      <div className='container py-10' >
        <div className='my-10'>

        <h3 className='text-center text-3xl font-bold font-[merriweather] font-[nunito] text-black' >Our Services</h3>
        </div>
      <div>

      </div>
        <div className='grid grid-cols-1 xl:grid-cols-3 gap-6 font-[nunito]' >

    
        <Service />
        <Service />
        <Service />
        </div>
      </div>
    </div>
  )
}

export default Services