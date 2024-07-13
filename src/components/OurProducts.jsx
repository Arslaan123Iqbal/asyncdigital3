import React from "react";
import ProductCard from "./atomic/ProductCard";
import Heading from "./atomic/Heading";
import Button from "./atomic/Button";

const OurProducts = () => {
  const list = [
    { image: "", title: "", subtitle: "" },
    { image: "", title: "", subtitle: "" },
    { image: "", title: "", subtitle: "" },
    { image: "", title: "", subtitle: "" },
  ];
  return (
    <div className="flex gap-16 max-lg:flex-col-reverse pb-80">
      <div className="bg-[#E8F0FE] p-4 rounded-lg grid grid-cols-2 gap-4 w-[50%] max-lg:w-full max-lg:grid-cols-1">
        {list.map((lis, i) => (
          <ProductCard key={`lis-${i}`} />
        ))}
      </div>

      <div className="flex flex-col items-start gap-8 max-lg:text-center max-lg:items-center">
        <div className="w-[350px] max-lg:w-full">
          <h1 className="text-tblue">Our Products</h1>
          <Heading>Accelerate your growth with</Heading>
        </div>
        <p className="text-tgray w-[350px] max-lg:w-full">
          Unlock the power of innovation and propel your journey towards success
          with our revolutionary apps.
        </p>
        <Button classname={"p-3"}>Explore our Products</Button>
      </div>
    </div>
  );
};

export default OurProducts;
