import React from "react";

const MonthInput = ({ formData, handleChange }) => {
  return (
    <div className="w-1/3">
      <select
        name="month"
        value={formData.month}
        onChange={(event) => handleChange(event)}
        className="w-full h-10 border-[0.5px] outline-none border-gray-300 flex rounded-md focuse:border-gray-600"
      >
        <option value="">Month </option>
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  );
};

export default MonthInput;
