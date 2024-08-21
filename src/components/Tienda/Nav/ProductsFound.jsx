import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";

const ProductsFound = ({ data }) => {
  return (
    <div className="flex border border-t-0 border-l-0 border-r-0 border-b-black/20">
      <NavLink
        className={"flex justify-start w-full h-20 gap-3"}
        title={data.name}
      >
        <div className="w-1/5 h-full ">
          <LazyLoadImage
            src={"/img/" + data.imageName}
            className="w-full h-full"
          />
        </div>
        <div className="w-4/5 h-full flex flex-col justify-center gap-1">
          <span>{data.name}</span>
          <p>{data.description}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default ProductsFound;
