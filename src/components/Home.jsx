import Button from "../ui/Button";
import { Coffee2 } from "../assets";

function Home() {
  return (
    <section className="bg-brandDark min-h-[550px]">
      <div className="container sm:py-24 py-12">
        <div className="flex md:flex-row flex-col-reverse">
          {/* text content */}
          <div className="md:w-1/2 flex flex-col justify-center gap-6">
            <h1
              data-aos="fade-up"
              className="text-5xl sm:text-6xl lg:text-7xl tracking-wide text-light font-bold"
            >
              We serve the richest{" "}
              <span className="font-cursive text-primary">Coffee</span> in the
              city
            </h1>
            <div data-aos="fade-up" data-aos-delay="300" className="">
              <Button styles="ring-2 ring-primary bg-gradient-to-r from-primary to-secondary ">
                Coffee And Code
              </Button>
            </div>
          </div>
          {/* image content */}
          <div className="md:w-1/2 flex justify-center items-center relative">
            <img
              src={Coffee2}
              alt="coffee"
              className="w-[300px] sm:w-[450px] sm:scale-110 spin"
            />
            {/* hey coder */}
            <div
              data-aos="fade-up-left"
              className="absolute lg:top-5 lg:left-5 -top-3 left-0"
            >
              <Button styles="py-3 rounded-xl whitespace-nowrap bg-gradient-to-r from-primary to-secondary">
                Hey Coder
              </Button>
            </div>
            {/* Best coffee  */}
            <div
              data-aos="fade-down-right"
              className="absolute lg:bottom-5 bottom-0 lg:right-5 -right-2"
            >
              <Button styles="py-3 rounded-xl whitespace-nowrap bg-gradient-to-r from-primary to-secondary">
                Best Coffee
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
