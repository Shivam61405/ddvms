import React from "react";

const CaseList = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Case List</h1>

      {/* Table */}
      <div className="bg-white p-6 rounded-md shadow">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Case ID</th>
              <th className="p-2">Date</th>
              <th className="p-2">Sport</th>
              <th className="p-2">DRA</th>
              <th className="p-2">Athlete ID</th>
              <th className="p-2">Case Report</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">CID87</td>
              <td className="p-2">27 Feb, 2024</td>
              <td className="p-2">Swimming</td>
              <td className="p-2">92%</td>
              <td className="p-2">AID32</td>
              <td className="p-2">
                <button className="text-blue-600">Download</button>
              </td>
            </tr>
            <tr>
            <td className="p-2">CID87</td>
              <td className="p-2">27 Feb, 2024</td>
              <td className="p-2">Swimming</td>
              <td className="p-2">92%</td>
              <td className="p-2">AID32</td>
              <td className="p-2">
                <button className="text-blue-600">Download</button>
              </td>
            </tr>
            <tr>
            <td className="p-2">CID87</td>
              <td className="p-2">27 Feb, 2024</td>
              <td className="p-2">Swimming</td>
              <td className="p-2">92%</td>
              <td className="p-2">AID32</td>
              <td className="p-2">
                <button className="text-blue-600">Download</button>
              </td>
            </tr>
            <tr>
            <td className="p-2">CID87</td>
              <td className="p-2">27 Feb, 2024</td>
              <td className="p-2">Swimming</td>
              <td className="p-2">92%</td>
              <td className="p-2">AID32</td>
              <td className="p-2">
                <button className="text-blue-600">Download</button>
              </td>
            </tr>
            <tr>
            <td className="p-2">CID87</td>
              <td className="p-2">27 Feb, 2024</td>
              <td className="p-2">Swimming</td>
              <td className="p-2">92%</td>
              <td className="p-2">AID32</td>
              <td className="p-2">
                <button className="text-blue-600">Download</button>
              </td>
            </tr>
            <tr>
            <td className="p-2">CID87</td>
              <td className="p-2">27 Feb, 2024</td>
              <td className="p-2">Swimming</td>
              <td className="p-2">92%</td>
              <td className="p-2">AID32</td>
              <td className="p-2">
                <button className="text-blue-600">Download</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CaseList;