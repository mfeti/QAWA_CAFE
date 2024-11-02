import { GrSecure } from "react-icons/gr";
import { CoffeeWhite } from "../assets";
import { CoffeeTexture } from "../assets/website/";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
const bgImage = {
  backgroundImage: `url(${CoffeeTexture})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

function Banner() {
  return (
    <section style={bgImage}>
      <div className="container sm:py-14 py-7 min-h-[550px] flex justify-center items-center">
        <div className="flex md:flex-row flex-col items-center justify-center">
          {/* image section */}
          <div data-aos="zoom-in" className="md:w-1/2">
            <img
              src={CoffeeWhite}
              alt="Coffee"
              className="mx-auto spin max-w-[430px] w-full"
            />
          </div>
          {/* text content */}
          <div className="md:w-1/2 flex flex-col justify-center gap-6 sm:pt-0">
            <h2
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-cursive font-bold"
            >
              Premium Blen Coffee
            </h2>
            <p data-aos="fade-up" className="text-gray-500 text-sm leading-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
            <div className="flex gap-6">
              {/* 1st section */}
              <div className="w-1/2 space-y-5">
                <div data-aos="fade-up" className="flex gap-3 items-center">
                  <GrSecure className="text-2xl w-12 h-12 p-3 bg-red-100 rounded-full" />
                  <span className="">Premium Coffee</span>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="flex gap-3 items-center"
                >
                  <IoFastFood className="text-2xl w-12 h-12 p-3 bg-orange-100 rounded-full" />
                  <span className="">Hot Coffee</span>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="flex gap-3 items-center"
                >
                  <GiFoodTruck className="text-2xl w-12 h-12 p-3 bg-yellow-100 rounded-full" />
                  <span className="">Cold Coffee</span>
                </div>
              </div>
              {/* 2nd section */}
              <div
                data-aos="slide-left"
                className="w-1/2 border-l-4 border-primary/50 space-y-2 pl-6"
              >
                <h3 className="text-2xl font-cursive font-semibold">
                  Tea Lover
                </h3>
                <p className="text-sm text-gray-500 leading-5 ">
                  Much like writing code, brewing the perfect cup of tea
                  requires patience, precision, and a dash of passion to create
                  a comforting blend of flavors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
