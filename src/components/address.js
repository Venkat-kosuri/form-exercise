import React, { Fragment } from "react";
import axiosPrivate from "../axios";
import { useNavigate } from "react-router-dom";

const Address = ({ setStep }) => {
  const navigate = useNavigate();
  const [address2, setAddress2] = React.useState(false);
  const [address3, setAddress3] = React.useState(false);
  const [removeItem, setRemoveItem] = React.useState(true);
  const [removeAddress2, setRemoveAddress2] = React.useState(false);
  const [addAddress2, setAddAddress2] = React.useState(false);
  const [address1Data, setAddress1Data] = React.useState({
    address_line_1: "",
    address_line_2: "",
    address_line_3: "",
    address_line_4: "",
    address_line_5: "",
    address_line_6: "",
    address_line_7: "",
    address_line_8: "",
    address_line_9: "",
  });

  const handleChange = (event) => {
    setAddress1Data({
      ...address1Data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axiosPrivate.post(
      "https://dev.api.klaim.yousted.org/api/prev-user/store",
      address1Data
    );
    if (res.status === "Success") {
      navigate("/success");
    }
  };

  const handleAddress = () => {
    if (!address2 && !address3) {
      setAddress2(true);
      setRemoveAddress2(true);
    }
    if (address2 && !address3) {
      setAddress2(true);
      setRemoveAddress2(false);
      setAddress3(true);
      setRemoveItem(false);
    }
  };
  const handleRemoveAddress = () => {
    if (address2 && address3) {
      setAddress3(false);
      setAddAddress2(false);
    }
    if (address2 && !address3) {
      setAddress2(false);
      setRemoveItem(true);
      setAddAddress2(true);
    }
  };
  return (
    <div className="w-1/2 border-[.8px] border-gray-600 rounded-md p-4">
      <div className="w-full flex items-center justify-center py-4">
        <h1 className="text-2xl">Enter your Previous Address</h1>
      </div>
      <form on onSubmit={(event) => handleSubmit(event)}>
        <div className="flex flex-col py-3">
          <label className="mb-3">Previous Address 1</label>
          <input
            placeholder="Address line 1"
            name="address_line_1"
            value={address1Data.address_line_1}
            onChange={(event) => handleChange(event)}
            className="w-11/12 border-[0.5px] border-gray-400 focus:border-black rounded-lg p-2 my-2"
          />
          <input
            placeholder="Address line 2"
            name="address_line_2"
            value={address1Data.address_line_2}
            onChange={(event) => handleChange(event)}
            className="w-11/12 border-[0.5px] border-gray-400 focus:border-black rounded-lg p-2 my-2"
          />
          <input
            placeholder="Address line 3"
            name="address_line_3"
            value={address1Data.address_line_3}
            onChange={(event) => handleChange(event)}
            className="w-11/12 border-[0.5px] border-gray-400 focus:border-black rounded-lg p-2 my-2"
          />
        </div>
        {address2 && (
          <div className="flex flex-col py-3">
            <label className="mb-3">Previous Address 2</label>
            <input
              placeholder="Address line 1"
              name="address_line_4"
              value={address1Data.address_line_4}
              onChange={(event) => handleChange(event)}
              className="w-11/12 border-[0.5px] border-gray-400 focus:border-black rounded-lg p-2 my-2"
            />
            <input
              placeholder="Address line 2"
              name="address_line_5"
              value={address1Data.address_line_5}
              onChange={(event) => handleChange(event)}
              className="w-11/12 border-[0.5px] border-gray-400 focus:border-black rounded-lg p-2 my-2"
            />
            <input
              placeholder="Address line 3"
              name="address_line_6"
              value={address1Data.address_line_6}
              onChange={(event) => handleChange(event)}
              className="w-11/12 border-[0.5px] border-gray-400 focus:border-black rounded-lg p-2 my-2"
            />
          </div>
        )}
        {address3 && (
          <div className="flex flex-col py-3">
            <label className="mb-3">Previous Address 3</label>
            <input
              placeholder="Address line 1"
              name="address_line_7"
              value={address1Data.address_line_7}
              onChange={(event) => handleChange(event)}
              className="w-11/12 border-[0.5px] border-gray-400 focus:border-black rounded-lg p-2 my-2"
            />
            <input
              placeholder="Address line 2"
              name="address_line_8"
              value={address1Data.address_line_8}
              onChange={(event) => handleChange(event)}
              className="w-11/12 border-[0.5px] border-gray-400 focus:border-black rounded-lg p-2 my-2"
            />
            <input
              placeholder="Address line 3"
              name="address_line_9"
              value={address1Data.address_line_9}
              onChange={(event) => handleChange(event)}
              className="w-11/12 border-[0.5px] border-gray-400 focus:border-black rounded-lg p-2 my-2"
            />
          </div>
        )}
        <div className="flex flex-col items-center justify-center">
          <button
            type="submit"
            className="text-lg text-white px-12 py-3 rounded-sm bg-green-800"
          >
            Submit
          </button>
          <div>
            {removeItem ? (
              <Fragment>
                <h1
                  onClick={handleAddress}
                  className="border-b border-blue-600 text-blue-600 my-2 cursor-pointer"
                >
                  Add Another Address
                </h1>
                {removeAddress2 && (
                  <h1
                    onClick={() => setAddress2(false)}
                    className="border-b border-blue-600 text-blue-600 my-2 cursor-pointer"
                  >
                    Remove address
                  </h1>
                )}
              </Fragment>
            ) : (
              <Fragment>
                <h1
                  onClick={handleRemoveAddress}
                  className="border-b border-blue-600 text-blue-600 my-2 cursor-pointer"
                >
                  Remove address
                </h1>
                {addAddress2 && (
                  <h1
                    onClick={() => setAddress2(true)}
                    className="border-b border-blue-600 text-blue-600 my-2 cursor-pointer"
                  >
                    Remove address
                  </h1>
                )}
              </Fragment>
            )}
          </div>
          <div>
            <h1
              onClick={() => setStep(false)}
              className="border-b border-blue-600 text-blue-600 my-2 cursor-pointer"
            >
              {`<< Back`}
            </h1>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Address;
