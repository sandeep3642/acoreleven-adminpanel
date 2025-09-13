import React, { useState } from 'react';
import { Plus, X, Paperclip, User, MoreHorizontal, Download, ChevronDown } from 'lucide-react';

const BillingTab = () => {
  const [isBillingDetailsOpen, setIsBillingDetailsOpen] = useState(true);
  const [isBillingAddressOpen, setIsBillingAddressOpen] = useState(true);
  
  return (
    <div className="bg-gray-50 mt-2">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="">
          {/* Billing Details Section */}
          <div 
            className="bg-gray-100 flex items-center justify-between p-4 cursor-pointer border-b border-gray-200 rounded-t-lg"
            onClick={() => setIsBillingDetailsOpen(!isBillingDetailsOpen)}
          >
            <h3 className="text-base font-medium text-gray-800">Billing Details</h3>
            <ChevronDown 
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isBillingDetailsOpen ? 'rotate-180' : ''}`}
            />
          </div>
          
          {/* Billing Table */}
          {isBillingDetailsOpen && (
            <div className="p-6 border-b border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-0 py-3 text-left text-sm font-medium text-gray-500">AWB Number</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Invoice number</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Amount</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Payment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="px-0 py-4 text-sm font-medium text-gray-900">#E1284947</td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        <div className="flex items-center gap-2">
                          5473793738
                          <Download size={16} className="text-green-600 cursor-pointer hover:text-green-700" />
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">May 19,2021</td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-900">₹7500</td>
                      <td className="px-4 py-4">
                        <select className="px-3 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-700 border-none outline-none cursor-pointer">
                          <option>Paid</option>
                          <option>Pending</option>
                          <option>Failed</option>
                        </select>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-green-600">₹7500 Paid</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Billing Address Section */}
          <div 
            className={`mt-2 bg-gray-100 flex items-center justify-between p-4 cursor-pointer border-gray-200 ${!isBillingDetailsOpen ? 'border-t rounded-t-lg' : ''} ${!isBillingAddressOpen ? 'rounded-b-lg' : 'border-b'}`}
            onClick={() => setIsBillingAddressOpen(!isBillingAddressOpen)}
          >
            <h4 className="text-base font-medium text-gray-800">Billing Address</h4>
            <ChevronDown 
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isBillingAddressOpen ? 'rotate-180' : ''}`}
            />
          </div>
          
          {/* Form Fields */}
          {isBillingAddressOpen && (
            <div className="p-6 rounded-b-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-normal text-gray-600 mb-2">Shipper Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" 
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="block text-sm font-normal text-gray-600 mb-2">Company Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" 
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="block text-sm font-normal text-gray-600 mb-2">Email address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" 
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="block text-sm font-normal text-gray-600 mb-2">Mobile Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" 
                    placeholder=""
                  />
                </div>
              </div>

              {/* Address Field */}
              <div className="mb-6">
                <label className="block text-sm font-normal text-gray-600 mb-2">Shipper Address</label>
                <textarea 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24 text-sm resize-none" 
                  placeholder=""
                ></textarea>
              </div>

              {/* Bottom Row Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-normal text-gray-600 mb-2">Landmark (optional)</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" 
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="block text-sm font-normal text-gray-600 mb-2">City</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" 
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="block text-sm font-normal text-gray-600 mb-2">Zipcode</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" 
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="block text-sm font-normal text-gray-600 mb-2">Country</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" 
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BillingTab;