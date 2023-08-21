import "./App.css";
import React from "react";
import Form from "../src/components/Form";
import DisplayJSONDataByAPI from "./components/DisplayJSONDataByAPI";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  const isFormValid = localStorage.getItem("formData") !== null;

  return (
    <>
      <div>{isFormValid ? <DisplayJSONDataByAPI /> : <Form />}</div>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/api" element={<DisplayJSONDataByAPI />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
