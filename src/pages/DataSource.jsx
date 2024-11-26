import React from "react";

const DataSource = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Data Source</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-md">
          ABP
        </button>
        <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-md">
          Reports
        </button>
        <button className="bg-pink-100 text-pink-700 px-4 py-2 rounded-md">
          Tests
        </button>
        <button className="bg-green-100 text-green-700 px-4 py-2 rounded-md">
          Informer
        </button>
      </div>

      {/* Physical Performance Report */}
      <div className="bg-white p-6 rounded-md shadow mb-6">
        <h3 className="text-lg font-bold mb-4">Physical Performance Report</h3>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Report ID</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Shivam Sharma</td>
              <td className="p-2 text-blue-600">#ATH32</td>
              <td className="p-2 text-yellow-500">Pending</td>
              <td className="p-2 text-red-500">1 hour ago</td>
            </tr>
            <tr>
              <td className="p-2">Jatin Mehra</td>
              <td className="p-2 text-blue-600">#ATH44</td>
              <td className="p-2 text-green-500">Completed</td>
              <td className="p-2 text-gray-500">40 min ago</td>
            </tr>
            <tr>
              <td className="p-2">Ritika Singh</td>
              <td className="p-2 text-blue-600">#ATH65</td>
              <td className="p-2 text-green-500">Completed</td>
              <td className="p-2 text-gray-500">5 min ago</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Whistleblower Section */}
      <div className="grid grid-cols-2 gap-4">
        {/* Whistleblower Info */}
        <div className="bg-blue-500 text-white p-6 rounded-md shadow">
          <h3 className="text-lg font-bold">Whistleblower</h3>
          <p className="text-4xl font-bold">5</p>
          <p>New whistleblowers</p>
        </div>

        {/* Bar Chart Placeholder */}
        <div className="bg-white p-6 rounded-md shadow">
          <h3 className="text-lg font-bold mb-4">Cases & Informer Overview</h3>
          <div className="h-40 bg-gray-200 flex items-center justify-center">
            {/* Placeholder for chart */}
            <p className="text-gray-500">Bar Chart Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSource;