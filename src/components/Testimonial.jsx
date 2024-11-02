import Slider from "react-slick";
import { TestimonialData } from "../constant";

var settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Testimonial() {
  return (
    <section className="sm:py-14 py-7">
      <div className="container">
        {/* header title section */}
        <div data-aos="fade-up" className="mb-5">
          <h2 className="font-bold font-cursive text-4xl text-center">
            Testimonials
          </h2>
        </div>
        {/* testimonial card section */}
        <div data-aos="zoom-in" className="my-10">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="mb-6" key={data.name}>
                <div className="flex flex-col gap-4  bg-primary/10 rounded-xl px-6 py-8 mx-4 shadow-lg relative">
                  {/* img section */}
                  <div className="">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* text-section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h3 className="text-2xl font-cursive2 font-semibold capitalize">
                        {data.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
