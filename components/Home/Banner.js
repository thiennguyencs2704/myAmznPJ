import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Banner = () => {
  const bannerURLs = [
    "https://m.media-amazon.com/images/I/61jovjd+f9L._SX1500_.jpg",
    "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX1500_.jpg",
    "https://m.media-amazon.com/images/I/711Y9Al9RNL._SX1500_.jpg",
    "https://m.media-amazon.com/images/I/71qid7QFWJL._SX1500_.jpg",
    "https://images-fe.ssl-images-amazon.com/images/G/65/SG-hq/2021/img/Associates_Mass_/XCM_Manual_1328012_1684437_SG_sg_associates_gwhero_2_3833239_1500x600_en_SG._CB669113358_.jpg",
  ];

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
        {bannerURLs.map((url) => (
          <div>
            <Image
              // loading="lazy"
              width={1500}
              height={600}
              layout="responsive"
              src={url}
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
