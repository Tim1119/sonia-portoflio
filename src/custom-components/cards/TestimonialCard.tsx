import { FaStar } from "react-icons/fa";
// import Image from 'next/image'
// import { urlFor } from '../../../../client';


interface TestimonialCardProps{
  name:string;
  image:string;
  position:string;
  testimony:string;
}

const TestimonialCard = ({name,image,position,testimony}:TestimonialCardProps) => {
    
  return (
    <div className="w-full p-4 h-[500px]">
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden px-6 pb-5 h-full flex flex-col content-between justify-between">

      <div className="mt-5 flex-" >
          <div className=" text-xl flex items-center justify-center mt-6 mb-3">
          {[...Array(5)].map((_, index) => (
            
            <FaStar key={index} size={20} className="text-[#FFC107]" />
          ))}
            
          </div>
          
          <p className=" leading-sm text-base font-[nunito] mb-5 italic text-center line-clamp-[8]">
         {testimony}
        </p>
      </div>
      <div className="grid place-items-center gap-5 font-[nunito] mb-5" >
          <div className="flex-shrink-0">
            <img width={200} height={200} src={image} alt={"Tesimonial Picture"}  className="w-16 h-16 rounded-full" />
             
            </div>
            <div className="gap-1 grid place-items-center" >

            <h3 className="text-lg font-semibold capitalize">{name}</h3>
            <h3 className="text-gray-500 capitalize text-sm">{position}</h3>
            </div>
      </div>
    
      </div>
  </div>
  )
}

export default TestimonialCard