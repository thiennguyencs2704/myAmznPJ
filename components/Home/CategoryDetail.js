import Image from "next/image";

const CategoryDetail = ({ title, img }) => {
  return (
    <div className="flex flex-col bg-white p-5">
      <h1 className="text-xl font-bold">{title}</h1>
      <Image src={img} width={300} height={320} objectFit="contain" />
      <p className="text-xs text-blue-700">Shop now</p>
    </div>
  );
};

export default CategoryDetail;
