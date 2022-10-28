import Page1 from "../Page1";
import Address from "../address";
import { Fragment, useState } from "react";

const Controller = () => {
  const [step, setStep] = useState(true);
  return (
    <Fragment>
      {step ? <Page1 setStep={setStep} /> : <Address setStep={setStep} />}
    </Fragment>
  );
};

export default Controller;
