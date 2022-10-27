import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Address from "./Pages/Address";
import AddressForm from "./Pages/AddressForm";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/address" element={<Address />} />
          <Route path="/success" element={<AddressForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
