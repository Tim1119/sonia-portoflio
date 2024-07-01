import { FaArrowRightLong } from 'react-icons/fa6'
import { Button } from '../components/ui/button';




const Hero = () => {
  return (
    <div className="font-[nunito] w-full mt-[80px] h-[calc(100vh_-_80px)]  min-h-fit bg-black  grid place-items-center" >
        <div className='containerize grid grid-cols-1 lg:grid-cols-2 gap-4 h-full '>

        <div className='grid place-items-center md:justify-items-start' >
            <div className='gap-5 lg:text-left text-center  h-full xl:h-fit flex flex-col justify-center w-full'  >
                <h1 data-aos="fade-up" className='text-4xl xl:text-[42px]  uppercase font-bold text-white leading-[56px]' >Elevate your business <br /> with Executive Zen </h1>
                <p className='text-lg xl:text-xl text-white font-semibold ' data-aos="fade-up" data-aos-delay="400" >
                    Your virtual assitant offering seamless support for acheiving executive success
                </p>
                <div className="w-full flex justify-center lg:justify-start">

                <Button size={"lg"} className="flex w-fit bg-lemon hover:bg-lemon gap-3 px-10 text-base py-4 tracking-wider mt-7" >Get Started <FaArrowRightLong className="group-hover:animate-pulse transition-all " /> </Button>
                </div>
             
            </div>
            {/* lg:mx-0 mx-auto items-center spacing-3 gap-3 btn px-8 py-3 roRRRRrunded-md my-3 text-white bg-lemon hover:bg-lemon group */}
        </div>
        <div className='hidden lg:flex items-center justify-end h-full ' data-aos="zoom-out" data-aos-delay="200" >
            
            <img src="/sonia-hero.png" width={500} height={500} className='object-contain lg:h-[90%] h-[60%] my-0 p-0' alt="Sonia-Hero-Image" />
        </div>
        </div>
    </div>
  )
}

export default Hero