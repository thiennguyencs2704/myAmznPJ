import Image from "next/image";

const CategoryDetail = ({ categoryDetail }) => {
  const { title, img } = categoryDetail;

  return (
    <div className="sm:m-3 mx-auto">
      <div className="flex flex-col bg-white mx-auto p-5 h-full lg:pt-7">
        <h1 className="flex text-xl sm-text-base md:text-lg lg:text-xl font-bold white h-14">
          {title}
        </h1>
        <div className="pt-2">
          <Image src={img} width={380} height={320} objectFit="cover" />
        </div>
        <p className="text-xs text-blue-700 mt-3">Shop now</p>
      </div>
    </div>
  );
};

export default CategoryDetail;
