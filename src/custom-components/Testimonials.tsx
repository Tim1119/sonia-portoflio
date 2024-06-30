import Slider from "react-slick";
import TestimonialCard from "./cards/TestimonialCard";

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
    };

    return (
        <div className="w-full my-6 py-5 font-serif">
            <div className="container mx-auto px-4">
                <h3 className="section-header text-center mb-8">Testimonials</h3>
                <Slider {...settings}>
                    <TestimonialCard
                        key={Math.random()}
                        name={'Tim John'}
                        image={"https://sonia-anthony-portfolio-gig.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fkdvepv6w%2Fproduction%2Fb4983b12f9f72c99e82985f153ff09075857c35a-90x85.png&w=640&q=75"}
                        position={"Free Lancer"}
                        testimony={
                            "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore.labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore.  esse veniam culpa  fugiat legam esse veniam culpa."
                        }
                    />
                    <TestimonialCard
                        key={Math.random()}
                        name={'Tim John'}
                        image={"https://sonia-anthony-portfolio-gig.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fkdvepv6w%2Fproduction%2Fb4983b12f9f72c99e82985f153ff09075857c35a-90x85.png&w=640&q=75"}
                        position={"Free Lancer"}
                        testimony={
                            "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore.labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore.  esse veniam culpa  fugiat legam esse veniam culpa."
                        }
                    />
                    <TestimonialCard
                        key={Math.random()}
                        name={'Tim John'}
                        image={"https://sonia-anthony-portfolio-gig.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fkdvepv6w%2Fproduction%2Fb4983b12f9f72c99e82985f153ff09075857c35a-90x85.png&w=640&q=75"}
                        position={"Free Lancer"}
                        testimony={
                            "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore.labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore.  esse veniam culpa  fugiat legam esse veniam culpa."
                        }
                    />
                    {/* Add more TestimonialCard components here */}
                </Slider>
            </div>
        </div>
    )
}

export default Testimonials