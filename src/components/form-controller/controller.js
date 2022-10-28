import React from "react";
import Step1 from "../Step1";
import Step2 from "../step2";

const FormController = () => {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    visitor_id: 1,
    first_name: "",
    last_name: "",
    email: "",
    telephone: "",
    day: "",
    month: "",
    year: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <React.Fragment>
      {step === 1 && (
        <Step1
          setStep={setStep}
          handleChange={handleChange}
          formData={formData}
        />
      )}
      {step === 2 && <Step2 handleChange={handleChange} formData={formData} />}
    </React.Fragment>
  );
};

export default FormController;
