import CategoryDetail from "./CategoryDetail";
import Image from "next/image";
import Browse from "./Browse";
import Link from "next/link";

const CategoryList = ({ categoryData, browseData }) => {
  return (
    <div className="relative grid grid-flow-row-dense mx-auto -mt-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:-mt-40 xl:-mt-48">
      {categoryData.slice(0, 3).map((cate, index) => (
        <CategoryDetail key={index} categoryDetail={cate} />
      ))}

      <div className="flex flex-col h-full max-w-full sm:col-span-1 md:col-span-2 xl:col-span-full lg:mx-3 sm:m-3">
        <img src={belowCategoryImg} />

        <div className="mx-auto mt-6 sm:mx-0">
          <Browse browseData={browseData} />
        </div>
      </div>

      <div className="flex-col hidden mx-auto md:flex sm:m-3">
        <div className="flex flex-col w-full px-5 pt-3 pb-6 mx-auto text-xl bg-white md:pt-5 h-36 2xl:pb-7">
          <Link href="/auth/signin">
            <a className="pb-4 mt-2 text-sm font-bold text-center md:text-sm lg:text-base">
              Sign in for the best experience
            </a>
          </Link>
          <div className="flex items-center w-4/5 mx-auto ">
            <button className="w-full text-xs button h-9 span">
              Sign in securely
            </button>
          </div>
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
