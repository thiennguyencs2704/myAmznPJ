import CategoryDetail from "./CategoryDetail";
import Image from "next/image";
import Browse from "./Browse";
import Link from "next/link";

const CategoryList = ({ categoryData, browseData }) => {
  return (
    <div className="relative grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mx-auto -mt-16 lg:-mt-40 xl:-mt-48">
      {categoryData.slice(0, 3).map((cate, index) => (
        <CategoryDetail key={index} categoryDetail={cate} />
      ))}

      <div className="flex flex-col sm:col-span-1 md:col-span-2 xl:col-span-full max-w-full lg:mx-3 sm:m-3 h-full">
        <img src={belowCategoryImg} />

        <div className="sm:mx-0 mx-auto mt-6">
          <Browse browseData={browseData} />
        </div>
      </div>

      <div className="hidden md:flex flex-col sm:m-3 mx-auto">
        <div className="flex flex-col bg-white mx-auto md:pt-5 pt-3 px-5 w-full h-36 text-xl 2xl:pb-7 pb-6">
          <Link href="/auth/signin">
            <a className="md:text-sm lg:text-base text-sm font-bold mt-2 pb-4 text-center">
              Sign in for the best experience
            </a>
          </Link>
          <span className="flex span items-center w-4/5 mx-auto">
            <button className="button w-full h-9 text-xs ">
              Sign in securely
            </button>
          </span>
        </div>

        <div className="flex justify-center mt-auto">
          <Image
            src={belowSigninImg}
            width={250}
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
