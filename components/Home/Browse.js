import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Browse = ({ browseData }) => {
  return (
    <div className="flex">
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        {browseData.map((item, i) => (
          <div key={i}>
            <Image width={100} height={100} loading="lazy" src={item.img} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Browse;
