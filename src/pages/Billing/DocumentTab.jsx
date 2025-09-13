import React, { useState } from 'react';
import { Plus, X, Paperclip, User, MoreHorizontal, Download, ChevronDown } from 'lucide-react';

const DocumentTab = () => {
  const [isDocumentsOpen, setIsDocumentsOpen] = useState(true);
  
  return (
    <div className="bg-gray-50 mt-2">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="">
          {/* Documents Header */}
          <div 
            className="bg-gray-100 flex items-center justify-between p-4 cursor-pointer rounded-t-lg border-b border-gray-200"
            onClick={() => setIsDocumentsOpen(!isDocumentsOpen)}
          >
            <h3 className="text-base font-medium text-gray-800">Documents</h3>
            <ChevronDown 
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isDocumentsOpen ? 'rotate-180' : ''}`}
            />
          </div>
          
          {/* Documents Table */}
          {isDocumentsOpen && (
            <div className="p-6 rounded-b-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-0 py-3 text-left text-sm font-medium text-gray-500">Document Type</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Document number</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Upload Date</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="px-0 py-4 text-sm font-medium text-gray-900">GSTIN</td>
                      <td className="px-4 py-4 text-sm text-gray-700">07AB5473793738</td>
                      <td className="px-4 py-4 text-sm text-gray-700">May 19,2021</td>
                      <td className="px-4 py-4">
                        <select className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700 border-none outline-none cursor-pointer">
                          <option>Verified</option>
                          <option>Pending</option>
                          <option>Rejected</option>
                        </select>
                      </td>
                      <td className="px-4 py-4">
                        <button className="text-green-600 hover:text-green-700">
                          <Download size={16} />
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-0 py-4 text-sm font-medium text-gray-900">EIC</td>
                      <td className="px-4 py-4 text-sm text-gray-700">07AB5473793738</td>
                      <td className="px-4 py-4 text-sm text-gray-700">May 19,2021</td>
                      <td className="px-4 py-4">
                        <select className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700 border-none outline-none cursor-pointer">
                          <option>Verified</option>
                          <option>Pending</option>
                          <option>Rejected</option>
                        </select>
                      </td>
                      <td className="px-4 py-4">
                        <button className="text-green-600 hover:text-green-700">
                          <Download size={16} />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentTab;