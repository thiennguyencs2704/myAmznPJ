import Image from "next/image";

const CategoryDetail = ({ categoryDetail }) => {
  const { title, img } = categoryDetail;

  return (
    <div className="mx-auto sm:mx-3 m-3 h-full">
      <div className="flex flex-col bg-white mx-auto p-5 lg:pt-7">
        <h1 className="flex text-xl sm-text-base md:text-lg lg:text-xl font-bold white h-14">
          {title}
        </h1>
        <div className="md:pt-2 lg:pt-0">
          <Image src={img} width={380} height={320} objectFit="cover" />
        </div>
        <p className="text-xs text-blue-700 mt-3">Shop now</p>
      </div>
    </div>
  );
};

export default CategoryDetail;
