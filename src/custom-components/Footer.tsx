import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white font-[nanum-pen-script] w-full h-[40vh] min-h-fit  grid place-items-center bg-gradient-to-r from-black/80 to-black/90">

      <div className="containerize  h-full flex flex-col justify-center items-center">

        <div className='text-center font-script font-light' >
        <div className='text-base lg:text-base font-light font-[script] text-justify leading-[32px] lg:leading-8 line-clamp-[10]'  >
                    <p>
                    Hi, I'm Sonia, your Executive Zen Assistant. I specialize in streamlining your workload and coordinating executive schedules, making your life easier. Whether it's managing administrative tasks, organizing your lifestyle, or fostering creativity, I'm here to ensure every aspect of your schedule comes alive through impeccable organization. I offer a comprehensive range of services tailored to your needs. Let's work together to achieve your goals, while reclaiming your time and embracing a well-balanced life.
                    </p>
                </div>
              <h3 className="text-white font-bold uppercase font-[script] text-4xl">
                <span className="text-green-600 font-[script]">Executive</span>{" "}
                <span className="text-white">Zen</span>
              </h3>
        </div>
        <div className="grid place-items-center gap-4 text-white font-[script]" >
            <h3 className="font-vujahday text-2xl" >Follow my Socials</h3>
            <div className='flex items-center my-4 gap-3' >
              <Link to='https://www.instagram.com/executivezen?igsh=ODBjMjBiZWg3bDRs' >
                <FaInstagram  size={25} className="text-white" />
              </Link>
              <Link to='https://www.linkedin.com/company/executive-zen/' >
                <FaLinkedinIn size={25} className="text-white" />
              </Link>
              <Link to='https://x.com/zen_executive?t=T4uWsbRD2R9gFscLZ4oB3Q&s=09' >
                <FaXTwitter size={25} className="text-white" />
              </Link>
              {/* <Link to='' >
                <FaMediumM size={25} className="text-white" />
              </Link> */}
              <Link to='https://www.tiktok.com/@executive.zen?_t=8lmnzgxSqak&_r=1' >
                <IoLogoTiktok size={25} className="text-white" />
              </Link>
            </div>
            <div className='text-center' >
                <p>© Sonia  Anthony Inc</p>
                <p>executivezenservices@gmail.com</p>
            </div>
        </div>
      </div>
    </div>
    
  
  )
}

export default Footer