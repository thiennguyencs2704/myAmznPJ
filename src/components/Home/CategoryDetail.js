import Image from "next/image";

const CategoryDetail = ({ categoryDetail }) => {
  const { title, img } = categoryDetail;

  return (
    <div className="m-3 mx-auto sm:mx-3">
      <div className="flex flex-col p-5 mx-auto bg-white xl:pt-7">
        <h1 className="flex text-xl font-bold sm-text-base md:text-lg lg:text-xl white h-14">
          {title}
        </h1>
        <div className="md:pt-2 lg:pt-0">
          <Image src={img} width={400} height={350} objectFit="cover" />
        </div>
        <p className="mt-4 text-xs text-blue-800">Shop now</p>
      </div>
    </div>
  );
};

export default CategoryDetail;
