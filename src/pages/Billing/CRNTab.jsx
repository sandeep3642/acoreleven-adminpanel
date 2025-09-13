import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const CRNTab = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [lengthUnit, setLengthUnit] = useState('cm');
  const [widthUnit, setWidthUnit] = useState('cm');
  const [heightUnit, setHeightUnit] = useState('cm');

  return (
    <div className="bg-gray-50 mt-2">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Header with toggle */}
        <div 
          className="bg-gray-100 flex items-center justify-between p-4 cursor-pointer border-b border-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-base font-medium text-gray-800">Package Details</h3>
          <ChevronDown 
            className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>

        {/* Content */}
        {isOpen && (
          <div className="p-4 space-y-6">
            {/* CRN Number */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">CRN Number</label>
              <input 
                type="text" 
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                placeholder=""
              />
            </div>

            {/* Package Dimensions Section */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-4">Package Dimensions</h4>
              
              <div className="grid grid-cols-2 gap-4">
                {/* Length */}
                <div>
                  <label className="block text-xs text-gray-500 mb-2">Length (cm or inches)</label>
                  <div className="flex">
                    <input 
                      type="number" 
                      placeholder="0"
                      className="flex-1 px-3 py-2.5 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                    <div className="relative">
                      <select 
                        value={lengthUnit}
                        onChange={(e) => setLengthUnit(e.target.value)}
                        className="appearance-none bg-white border border-l-0 border-gray-300 rounded-r-md px-3 py-2.5 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="cm">cm</option>
                        <option value="inches">inches</option>
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Width */}
                <div>
                  <label className="block text-xs text-gray-500 mb-2">Width (cm or inches)</label>
                  <div className="flex">
                    <input 
                      type="number" 
                      placeholder="0"
                      className="flex-1 px-3 py-2.5 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                    <div className="relative">
                      <select 
                        value={widthUnit}
                        onChange={(e) => setWidthUnit(e.target.value)}
                        className="appearance-none bg-white border border-l-0 border-gray-300 rounded-r-md px-3 py-2.5 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="cm">cm</option>
                        <option value="inches">inches</option>
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Height */}
                <div>
                  <label className="block text-xs text-gray-500 mb-2">Height (cm or inches)</label>
                  <div className="flex">
                    <input 
                      type="number" 
                      placeholder="0"
                      className="flex-1 px-3 py-2.5 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                    <div className="relative">
                      <select 
                        value={heightUnit}
                        onChange={(e) => setHeightUnit(e.target.value)}
                        className="appearance-none bg-white border border-l-0 border-gray-300 rounded-r-md px-3 py-2.5 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="cm">cm</option>
                        <option value="inches">inches</option>
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Volumetric Weight */}
                <div>
                  <label className="block text-xs text-gray-500 mb-2">Volumetric Weight</label>
                  <input 
                    type="number" 
                    placeholder="0"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CRNTab;