import React from "react";

const ECSControlDashboard = () => {
  const moduleButtons = [
    { name: "Upload", position: "top-left" },
    { name: "User Manager", position: "top-center" },
    { name: "Scan client", position: "top-right" },
    { name: "Search AWB", position: "top-far-right" },
    { name: "Shipment Data", position: "middle-left" },
    { name: "Shortage Handling", position: "middle-center" },
    { name: "Hard copy", position: "middle-right" },
    { name: "EDI Images", position: "middle-far-right" },
    { name: "Mass Print Images", position: "bottom-left" },
    { name: "Label Manager", position: "bottom-center" },
    { name: "Station ROD Print", position: "bottom-right" },
  ];

  const handleModuleClick = (moduleName) => {
    console.log(`${moduleName} module clicked`);
    // Add your module-specific logic here
  };

  const handleStartECS = () => {
    console.log("Start ECS clicked");
    // Add your ECS start logic here
  };

  return (
    <div className="p-8">
      <div className="max-w-full mx-auto">
        {/* Module Buttons Grid */}
        <div className="grid grid-cols-4 gap-4 mb-12">
          {/* First Row */}
          <button
            onClick={() => handleModuleClick("Upload")}
            className="bg-white border border-[#606060] rounded-lg px-6 py-4 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 shadow-sm"
          >
            Upload
          </button>
          <button
            onClick={() => handleModuleClick("User Manager")}
            className="bg-white border border-[#606060] rounded-lg px-6 py-4 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 shadow-sm"
          >
            User Manager
          </button>
          <button
            onClick={() => handleModuleClick("Scan client")}
            className="bg-white border border-[#606060] rounded-lg px-6 py-4 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 shadow-sm"
          >
            Scan client
          </button>
          <button
            onClick={() => handleModuleClick("Search AWB")}
            className="bg-white border border-[#606060] rounded-lg px-6 py-4 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 shadow-sm"
          >
            Search AWB
          </button>

          {/* Second Row */}
          <button
            onClick={() => handleModuleClick("Shipment Data")}
            className="bg-white border border-[#606060] rounded-lg px-6 py-4 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 shadow-sm"
          >
            Shipment Data
          </button>
          <button
            onClick={() => handleModuleClick("Shortage Handling")}
            className="bg-white border border-[#606060] rounded-lg px-6 py-4 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 shadow-sm"
          >
            Shortage Handling
          </button>
          <button
            onClick={() => handleModuleClick("Hard copy")}
            className="bg-white border border-[#606060] rounded-lg px-6 py-4 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 shadow-sm"
          >
            Hard copy
          </button>
          <button
            onClick={() => handleModuleClick("EDI Images")}
            className="bg-white border border-[#606060] rounded-lg px-6 py-4 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 shadow-sm"
          >
            EDI Images
          </button>

          {/* Third Row */}
          <button
            onClick={() => handleModuleClick("Mass Print Images")}
            className="bg-white border border-[#606060] rounded-lg px-6 py-4 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 shadow-sm"
          >
            Mass Print Images
          </button>
          <button
            onClick={() => handleModuleClick("Label Manager")}
            className="bg-white border border-[#606060] rounded-lg px-6 py-4 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 shadow-sm"
          >
            Label Manager
          </button>
          <button
            onClick={() => handleModuleClick("Station ROD Print")}
            className="bg-white border border-[#606060] rounded-lg px-6 py-4 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 shadow-sm"
          >
            Station ROD Print
          </button>
          {/* Empty cell for alignment */}
          <div></div>
        </div>

        {/* Start ECS Button */}
        <div className="flex justify-end">
          <button
            onClick={handleStartECS}
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Start ECS
          </button>
        </div>
      </div>
    </div>
  );
};

export default ECSControlDashboard;
