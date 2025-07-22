import { HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";
import { Link, useLoaderData } from "react-router-dom";

const TeaDetails = () => {
  const singleTea = useLoaderData();
  return (
    <div className="w-[70%] mx-auto my-16">
      <Link className="title text-2xl flex items-center my-3" to="/">
        <HiMiniArrowLeftStartOnRectangle /> Back to home
      </Link>
      <div className="bg-[#F4F3F0] p-11">
        <div className="lg:flex items-center">
          <div className="w-full">
            <img src={singleTea?.photo} className="lg:w-[350px]" alt="" />
          </div>
          <div className="w-full space-y-2">
            <h1 className="title text-2xl mb-3 text-[#998f6f]">Niceties</h1>
            <p className="text-[14px] mt-1">
              <span className="font-semibold">Name: </span> {singleTea?.name}
            </p>
            <p className="text-[14px] mt-1">
              <span className="font-semibold">Chef: </span> {singleTea?.chef}
            </p>
            <p className="text-[14px] mt-1">
              <span className="font-semibold">Supplier: </span>{" "}
              {singleTea?.supplier}
            </p>
            <p className="text-[14px] mt-1">
              <span className="font-semibold">Category: </span>{" "}
              {singleTea?.category}
            </p>
            <p className="text-[14px] mt-1">
              <span className="font-semibold">Details: </span>{" "}
              {singleTea?.details}
            </p>
            <p className="text-[14px] mt-1">
              <span className="font-semibold">Taste: </span> {singleTea?.taste}
            </p>
            <p className="text-[14px] mt-1">
              <span className="font-semibold">Price: </span> {singleTea?.price}{" "}
              BDT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeaDetails;
