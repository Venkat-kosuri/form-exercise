import React from "react";
import { useNavigate } from "react-router-dom";

const Page1 = ({ setStep }) => {
  const navigate = useNavigate();

  return (
    <div className="border-[.8px] w-1/2 flex flex-col items-center justify-center border-gray-800 pt-6 rounded-md">
      <h1 className="py-3 text-2xl">Do you have a Previous Address?</h1>
      <div className="w-full flex flex-col items-center justify-center pb-6">
        <button
          onClick={() => setStep(false)}
          className="bg-blue-500 px-36 text-lg my-3 py-3 text-white"
        >
          Yes
        </button>
        <button
          onClick={() => navigate("/success")}
          className="bg-blue-500 px-36 text-lg my-3 py-3 text-white"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Page1;
