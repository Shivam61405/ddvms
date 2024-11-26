import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import DataSource from "./pages/DataSource"; 
import ABP from "./pages/ABP"; 
import CaseList from "./pages/CaseList";
const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/data-source" element={<DataSource />} />
            <Route path="/abp" element={<ABP />} />
            <Route path="/case-list" element={<CaseList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;