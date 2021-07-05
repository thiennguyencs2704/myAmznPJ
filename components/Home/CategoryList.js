import CategoryDetail from "./CategoryDetail";
import Image from "next/image";
import Browse from "./Browse";

const CategoryList = ({ categoryData, browseData }) => {
  return (
    <div className="relative grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mx-auto -mt-16 lg:-mt-40 xl:-mt-48">
      {categoryData.slice(0, 3).map((cate, index) => (
        <CategoryDetail key={index} categoryDetail={cate} />
      ))}

      <div className="xl:col-span-full my-5 lg:col-span-2">
        <img src={belowCategoryImg} />

        <Browse browseData={browseData} />
      </div>

      <div className="flex flex-col sm:m-3 mx-auto h-full">
        <div className="flex flex-col bg-white mx-auto pt-5 px-5 w-full h-1/3 text-xl 2xl:pb-7 pb-4">
          <h1 className="text-base font-bold mb-4 text-center">
            Sign in for the best experience
          </h1>
          <span className="flex span justify-center items-center">
            <button className="button w-2/3 h-9">Sign in securely</button>
          </span>
        </div>

        <div className="flex justify-center h-1/2 mt-10">
          <Image
            src={belowSigninImg}
            width={300}
            height={250}
            objectFit="contain"
            className="flex-shrink"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryList;

const belowSigninImg =
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg";

const belowCategoryImg =
  "https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/magellan/country/france/TheTomorrowWar/TTW_H1Banner_en-FR_EndCard_Desktop_1500x300_002._CB665717360_.jpg";
