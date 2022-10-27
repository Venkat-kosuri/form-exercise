import platform from "platform";
import { useEffect, useState } from "react";
import FormController from "../components/form-controller/controller";
import axios from "axios";
import axiosPrivate from "../axios";

const Home = () => {
  //creating IP state
  const [ip, setIP] = useState("");
  // console.log(ip);
  let platform_info;

  const sendData = async () => {
    const pingurl = "https://dev.api.klaim.yousted.org/api/visitor/store";
    const res = await axiosPrivate.post(pingurl, platform_info);
    // console.log(res);
  };

  if (ip !== "") {
    platform_info = {
      ip_address: ip,
      device_type: platform.os.family,
      browser_type: platform.name, // 'IE'
      user_agent: platform.description,
    };
    sendData();
  }

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setIP(res.data.IPv4);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);
  return (
    <div className="w-screen min-h-screen bg-gray-50">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-3xl text-sky-400 py-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h1>
        <p className="w-9/12 text-center">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>
      <div className="w-full flex items-center justify-center mt-8">
        <FormController />
      </div>
    </div>
  );
};

export default Home;
