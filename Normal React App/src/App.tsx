import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Form from "./components/Form";
import DisplayJSONDataByAPI from "./components/DisplayJSONDataByAPI";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
// import AccessRoute from "./components/AccessRoute";

const App: React.FC = () => {
  return (
    <>
    {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/home" element={<Home />} />
          <Route path="/api" element={<DisplayJSONDataByAPI />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
