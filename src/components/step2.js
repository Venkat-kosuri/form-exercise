import React, { useState } from "react";
import axiosPrivate from "../axios";
import { useNavigate } from "react-router-dom";

const Step2 = ({ formData, handleChange }) => {
  const [statusMsg, setStatusMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [data, setData] = React.useState({});
  const navigate = useNavigate();
  const checkDuplicate = async () => {
    const post_url = "https://dev.api.klaim.yousted.org/api/duplicate-check";
    const response = await axiosPrivate.post(post_url, data);
    setStatusMsg(response.status);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({
      email: formData.email,
      telephone: formData.telephone,
    });
    checkDuplicate();
    if (statusMsg === "Success") {
      localStorage.setItem("firstname", formData.firstname);
      const response = await axiosPrivate.post(
        "https://dev.api.klaim.yousted.org/api/prev-user/store",
        formData
      );
      console.log(response);
      if (response.status === "Success") {
        navigate("/address");
      } else {
        setErrorMsg("Something went wrong");
      }
    } else {
      setErrorMsg("username or phone already exist");
    }
  };
  return (
    <div className="w-7/12 rounded-lg border border-black py-3 px-6 text-lg">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col py-3">
          <label className="mb-3">Email Address</label>
          <input
            placeholder="Email Address"
            name="email"
            type={"email"}
            required
            value={formData.email}
            onChange={(event) => handleChange(event)}
            className="w-11/12 border-[0.5px] border-gray-400 focus:border-black rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col py-3">
          <label className="mb-3">Phone Number</label>
          <input
            placeholder="Phone Number"
            name="telephone"
            type={"tel"}
            value={formData.telephone}
            required
            onChange={(event) => handleChange(event)}
            className="w-11/12 border-[0.5px] border-gray-400 focus:border-black rounded-lg p-2"
          />
        </div>
        {errorMsg !== "" && (
          <div>
            <h1 className="font-light text-red-500">{errorMsg}</h1>
          </div>
        )}
        <div className="w-full flex items-center justify-center py-6">
          <button
            type="submit"
            className="px-20 rounded-md py-3 text-xl bg-green-700 text-white capitalize"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
