import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-500 text-white p-6 rounded-md shadow">
          <p className="text-lg">In last 24 hours</p>
          <h2 className="text-4xl font-bold">27</h2>
          <p>cases</p>
        </div>
        <div className="bg-blue-200 text-blue-800 p-6 rounded-md shadow">
          <p className="text-lg">In last 24 hours</p>
          <h2 className="text-4xl font-bold">7</h2>
          <p>cases Solved</p>
        </div>
      </div>

      {/* Athlete Performance */}
      <div className="bg-white p-6 rounded-md shadow mb-6">
        <h3 className="text-lg font-bold mb-4">Athlete Performance Report</h3>
        <div className="grid grid-cols-7 gap-4">
          <div>
            <div className="bg-red-500 h-20 rounded-t-md"></div>
            <p>Sat</p>
          </div>
          <div>
            <div className="bg-red-500 h-24 rounded-t-md"></div>
            <p>Sun</p>
          </div>
          {/* Continue for other days */}
        </div>
      </div>

      {/* New Athletes */}
      <div className="bg-white p-6 rounded-md shadow">
        <h3 className="text-lg font-bold mb-4">New Athletes</h3>
        <div className="flex space-x-4">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            <p>Ritika Sharma</p>
            <p>Runner</p>
          </div>
          {/* Add other athlete cards */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;