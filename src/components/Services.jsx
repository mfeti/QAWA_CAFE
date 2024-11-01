import { ServicesData } from "../constant";
function Services() {
  return (
    <section className="">
      <div className="container sm:py-14 py-7">
        {/* heading section */}
        <h2 className="mb-16 font-cursive text-dark text-4xl font-bold tracking-wider text-center">
          Best Coffee For You
        </h2>
        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-14">
          {ServicesData.map((service) => (
            <div
              data-aos="fade-up"
              data-aos-delay={service.aosDelay}
              key={service.name}
              className="max-w-[300px] bg-white hover:bg-primary hover:text-white rounded-2xl shadow-xl relative px-4 pb-5 group"
            >
              {/* image section */}
              <div className="h-[122px]">
                <img
                  src={service.img}
                  alt="Coffee"
                  className="max-w-[200px] mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-200"
                />
              </div>
              {/* text section */}
              <div className="p-4 text-center">
                <h3 className="font-bold text-xl">{service.name}</h3>
                <p className="text-stone-500 group-hover:text-white duration-300 line-clamp-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
