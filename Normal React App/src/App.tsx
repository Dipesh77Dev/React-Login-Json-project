import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Form from "./components/Form";
import DisplayJSONDataByAPI from "./components/DisplayJSONDataByAPI";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";

const App: React.FC = () => {
  return (
    <>
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





/*
import Navbar from "./components/Navbar";
import AccessRoute from "./components/AccessRoute";

<Navbar />
<AccessRoute path="/api" element={<DisplayJSONDataByAPI />} />

*/
