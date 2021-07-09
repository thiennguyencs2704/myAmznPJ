import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const Browse = ({ browseData }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    xl: {
      breakpoint: { max: 3000, min: 1280 },
      items: 8,
    },
    lg: {
      breakpoint: { max: 1280, min: 1024 },
      items: 4,
    },
    md: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    sm: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
    },
    mobilePlus: {
      breakpoint: { max: 640, min: 450 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 450, min: 300 },
      items: 3,
    },
  };

  return (
    <div className="flex flex-col bg-white p-5 px-8 sm:px-5">
      <h1 className="text-xl font-semibold mb-2">Browse by category</h1>
      <div className="flex">
        <Carousel className="container mx-auto z-0" responsive={responsive}>
          {browseData.map((item, i) => (
            <div key={i}>
              <Image
                width={160}
                height={160}
                loading="lazy"
                objectFit="contain"
                src={item.img}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Browse;
