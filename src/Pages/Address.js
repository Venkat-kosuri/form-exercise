import React from "react";
import Controller from "../components/address-controller/Controller";

const Address = () => {
  const firstname = localStorage.getItem("firstname");
  return (
    <div className="w-screen min-h-screen bg-gray-50">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-sky-400 text-3xl py-4">
          Hi {firstname} Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </h1>
        <p className="w-10/12 text-center">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>
      <div className="w-full flex items-center justify-center py-5">
        <Controller />
      </div>
    </div>
  );
};

export default Address;
