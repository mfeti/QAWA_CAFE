import { CoffeeBeanBg, PlayStore, AppStoreImg } from "../assets/website";

const bgImage = {
  backgroundImage: `url(${CoffeeBeanBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
function AppStore() {
  return (
    <section style={bgImage}>
      <div className="container sm:py-14 py-7 min-h-[250px] flex items-center">
        <div
          data-aos="fade-up"
          className="flex justify-start items-center gap-24"
        >
          <div className="sm:w-1/2 space-y-4">
            <h2 className="sm:text-4xl text-2xl w-full font-semibold text-gray-300">
              Coffee Cafe is available for Android and IOS
            </h2>
            <div className="flex gap-1">
              <a href="#">
                <img
                  src={AppStoreImg}
                  alt="app store"
                  className="sm:max-w-[200px] max-w-[150px] object-contain"
                />
              </a>
              <a href="#">
                <img
                  src={PlayStore}
                  alt="play store"
                  className="sm:max-w-[200px] max-w-[150px] object-contain"
                />
              </a>
            </div>
          </div>
          <div className="sm:w-1/2"></div>
        </div>
      </div>
    </section>
  );
}

export default AppStore;
