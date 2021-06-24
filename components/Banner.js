import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="relative z-0">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-10" />

      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        <div>
          <img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
