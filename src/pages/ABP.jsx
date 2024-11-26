import React from "react";

const ABP = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">ABP</h1>

      {/* Graphs */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Haematological Graph */}
        <div className="bg-white p-6 rounded-md shadow">
          <h3 className="text-lg font-bold mb-4">Haematological Graph</h3>
          <div className="h-40 bg-gray-200 flex items-center justify-center">
            {/* Placeholder for Haematological Graph */}
            <p className="text-gray-500">Graph Placeholder</p>
          </div>
        </div>

        {/* Steroidal Graph */}
        <div className="bg-white p-6 rounded-md shadow">
          <h3 className="text-lg font-bold mb-4">Steroidal Graph</h3>
          <div className="h-40 bg-gray-200 flex items-center justify-center">
            {/* Placeholder for Steroidal Graph */}
            <p className="text-gray-500">Graph Placeholder</p>
          </div>
        </div>
      </div>

      {/* ABP Reports */}
      <div className="bg-white p-6 rounded-md shadow">
        <h3 className="text-lg font-bold mb-4">ABP Reports</h3>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Report ID</th>
              <th className="p-2 text-left">Return</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Simran</td>
              <td className="p-2 text-blue-600">#ATH76</td>
              <td className="p-2 text-green-500">+5%</td>
            </tr>
            <tr>
              <td className="p-2">Umesh</td>
              <td className="p-2 text-blue-600">#ATH87</td>
              <td className="p-2 text-green-500">+10%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ABP;