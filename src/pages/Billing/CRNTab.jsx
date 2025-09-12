

const CRNTab = () => {
  return (
    <div className=" bg-gray-50">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Package Details</h3>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-2">CRN Number</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <h4 className="text-md font-medium text-gray-700 mb-4">Package Dimensions</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Length (cm or inches)</label>
              <div className="flex">
                <input type="number" className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <select className="px-3 py-2 border border-gray-300 rounded-r-md bg-white">
                  <option>cm</option>
                  <option>inches</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Width (cm or inches)</label>
              <div className="flex">
                <input type="number" className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <select className="px-3 py-2 border border-gray-300 rounded-r-md bg-white">
                  <option>cm</option>
                  <option>inches</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Height (cm or inches)</label>
              <div className="flex">
                <input type="number" className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <select className="px-3 py-2 border border-gray-300 rounded-r-md bg-white">
                  <option>cm</option>
                  <option>inches</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Volumetric Weight</label>
              <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CRNTab;