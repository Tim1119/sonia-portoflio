import { Button } from '../components/ui/button';
import { FaArrowRightLong } from 'react-icons/fa6';

// import PortableText from "react-portable-text";

export default function About () {
   
 
  return (
    <div className="font-[nunito] pt-5 grid place-items-center w-full min-h-[60vh] bg-white overflow-hidden" >
    <div className='container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4 h-full ' data-aos="fade-up">

    <div className='h-full grid place-items-center' data-aos="fade-up" data-aos-delay="200"> 
        <div className='flex flex-col justify-center gap-4 h-full' >
            <div>
                <h3 className='section-header text-left mt-7 mb-1 ' data-aos="fade-up" >About Us</h3> 
            </div>
            <div data-aos="fade-up" data-aos-delay="400" >
                <div className='text-base lg:text-base font-light font-[nunito] text-justify leading-[32px] lg:leading-8 line-clamp-[10]'  >
                    <p>
                    Hi, I'm Sonia, your Executive Zen Assistant. I specialize in streamlining your workload and coordinating executive schedules, making your life easier. Whether it's managing administrative tasks, organizing your lifestyle, or fostering creativity, I'm here to ensure every aspect of your schedule comes alive through impeccable organization. I offer a comprehensive range of services tailored to your needs. Let's work together to achieve your goals, while reclaiming your time and embracing a well-balanced life.
                    </p>
                </div>
            </div>
            <div className='flex justify-center lg:justify-start' >

            <Button size={"lg"} className="my-3 group flex w-fit bg-lemon hover:bg-lemon gap-3 px-10 text-base py-4 tracking-wider mt-7" >Read More <FaArrowRightLong className="group-hover:animate-pulse transition-all" /> </Button>
            </div>

        </div>
    </div>
    <div data-aos="zoom-out" data-aos-delay="200"   className='flex items-end justify-center lg:justify-end h-full'>
        <img src="/about-image.png" width={300} height={300} className='object-contain lg:h-[90%]' alt="Sonia-About-Image" />
        </div>
    </div>
</div>

  )
}

