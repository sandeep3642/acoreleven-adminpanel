import React from "react";

const DutyCalculationComponent = () => {
  return (
    <div className="p-4 bg-white">
      {/* Top section with title and badges */}
      <div className="flex ">

        <div className="flex items-center justify-between mb-4 w-[50%]">
          <h3 className="text-lg font-medium text-[#393939]">
            Duty Amount Calculation
          </h3>
        </div>

        <div className="flex items-center  mb-4 w-[50%]">
          <h3 className="text-lg font-medium text-[#393939]">
            Items Details
          </h3>
        </div>
      </div>

      {/* Main layout with two columns */}
      <div className="flex gap-4">
        {/* Left side - Duty Amount Calculation Table (45%) */}
        <div className="w-[49%]">
          <div className=" overflow-hidden">
            <table className="w-full text-xs">
              <thead style={{ backgroundColor: "#F8F8F8" }}>
                <tr>
                  <th className="p-3 text-left text-sm font-medium text-gray-700 "></th>
                  <th className="p-3 text-left text-sm font-medium text-gray-700 ">
                    Ad Valorem
                  </th>
                  <th className="p-3 text-left text-sm font-medium text-gray-700 ">
                    Specific Tate
                  </th>
                  <th className="p-3 text-left text-sm font-medium text-gray-700 ">
                    Duty Amt
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-sm text-gray-900 font-medium ">
                    BBCD, BCD
                  </td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-sm text-gray-900 font-medium ">
                    CVD
                  </td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-sm text-gray-900 font-medium ">
                    Cust Edu Cess
                  </td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-sm text-gray-900 font-medium ">
                    Cust H Edu Cess
                  </td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-sm text-gray-900 font-medium ">
                    SAD
                  </td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-sm text-gray-900 font-medium ">
                    IGST
                  </td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-sm text-gray-900 font-medium ">
                    IGST Cess
                  </td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-sm text-gray-900 font-medium ">
                    SW Charges
                  </td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-sm text-gray-900 font-medium ">
                    Total Duty
                  </td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-sm text-gray-900 font-medium ">
                    Octroi
                  </td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                  <td className="p-3 text-sm text-gray-900  ">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right side - Item Details and unnamed table (45%) */}
        <div className="w-[49%]">
          {/* Item Details Table */}
          <div className="mb-4">
            <div className=" overflow-hidden">
              <table className="w-full text-xs">
                <thead style={{ backgroundColor: "#F8F8F8" }}>
                  <tr>
                    <th className="p-3 text-left text-sm font-medium text-gray-700 ">
                      T/N/L
                    </th>
                    <th className="p-3 text-left text-sm font-medium text-gray-700 ">
                      Notification
                    </th>
                    <th className="p-3 text-left text-sm font-medium text-gray-700 ">
                      Serial Number
                    </th>
                    <th className="p-3 text-left text-sm font-medium text-gray-700 ">
                      List Number
                    </th>
                    <th className="p-3 text-left text-sm font-medium text-gray-700">
                      Notification type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 text-sm text-gray-900  h-6"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Third unnamed table below Item Details */}
          <div className="overflow-hidden">
            <table className="w-full text-xs">
              <thead style={{ backgroundColor: "#F8F8F8" }}>
                <tr>
                  <th className="p-3 text-left text-sm font-medium text-gray-700 ">
                    SB Item No.
                  </th>
                  <th className="p-3 text-left text-sm font-medium text-gray-700 ">
                    Shipping Bill No.
                  </th>
                  <th className="p-3 text-left text-sm font-medium text-gray-700 ">
                    SB Date
                  </th>
                  <th className="p-3 text-left text-sm font-medium text-gray-700 ">
                    Invoice SLNo.
                  </th>
                  <th className="p-3 text-left text-sm font-medium text-gray-700 ">
                    SB Invoice No.
                  </th>
                  <th className="p-3 text-left text-sm font-medium text-gray-700">
                    Import Against License
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-sm text-gray-900  h-6"></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-sm text-gray-900  h-6"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DutyCalculationComponent;
