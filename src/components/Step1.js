import React from "react";
import DayInput from "./DayInput";
import MonthInput from "./MonthInput";
import YearInput from "./YearInput";

const Step1 = ({ setStep, handleChange, formData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };
  return (
    <div className="w-7/12 rounded-lg border border-black py-3 px-6 text-lg">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col py-3">
          <label className="mb-3 peer peer-invalid:flex">First Name</label>
          <input
            placeholder="First Name"
            name="first_name"
            value={formData.first_name}
            required
            onChange={(event) => handleChange(event)}
            className="w-11/12 flex  peer-invalid:border-red-500 border-[0.5px] border-gray-400 focus:border-black rounded-lg p-2"
          />
          <p className="invisible peer-invalid:visible text-red-700 font-light py-2">
            This field cannot be empty
          </p>
        </div>
        <div className="flex flex-col py-3">
          <label className="mb-3">Last Name</label>
          <input
            placeholder="Last Name"
            name="last_name"
            value={formData.last_name}
            required
            onChange={(event) => handleChange(event)}
            className="w-11/12 flex peer-invalid:border-red-500 border-[0.5px] border-gray-400 focus:border-black rounded-lg p-2"
          />
          <p className="invisible peer-invalid:visible text-red-700 font-light py-2">
            This field cannot be empty
          </p>
        </div>
        <div className="relative py-3 w-11/12">
          <div className="py-3">
            <h1>Enter your Date of Birth</h1>
          </div>
          <div className="h-6 w-32 flex items-center justify-center text-lg absolute left-10 bg-white">
            <h1>Date of Birth</h1>
          </div>
          <div className="mt-3 mb-4 w-full border-[0.8px] border-gray-300 rounded-md py-3">
            <div className="w-full flex items-center justify-center gap-x-4 py-3 text-lg px-4">
              <DayInput formData={formData} handleChange={handleChange} />
              <MonthInput formData={formData} handleChange={handleChange} />
              <YearInput formData={formData} handleChange={handleChange} />
            </div>
          </div>
          <div className="w-full flex items-center justify-center py-6">
            <button
              type="submit"
              className="px-20 rounded-md py-3 text-xl bg-yellow-500"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step1;
