import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import DutyCalculationComponent from "./DutyCalculationComponent";

const AWBShipmentForm = () => {
  const [activeTab, setActiveTab] = useState("AWB");
  const [recipientExpanded, setRecipientExpanded] = useState(true);
  const [shipperExpanded, setShipperExpanded] = useState(true);

  const dutyCalculationData = [
    { label: "BBCD, BCD", adValorem: 0, specificTate: 0, dutyAmt: 0 },
    { label: "CVD", adValorem: 0, specificTate: 0, dutyAmt: 0 },
    { label: "Cust Edu Cess", adValorem: 0, specificTate: 0, dutyAmt: 0 },
    { label: "Cust H Edu Cess", adValorem: 0, specificTate: 0, dutyAmt: 0 },
    { label: "SAD", adValorem: 0, specificTate: 0, dutyAmt: 0 },
    { label: "IGST", adValorem: 0, specificTate: 0, dutyAmt: 0 },
    { label: "IGST Cess", adValorem: 0, specificTate: 0, dutyAmt: 0 },
    { label: "SW Charges", adValorem: 0, specificTate: 0, dutyAmt: 0 },
    { label: "Total Duty", adValorem: 0, specificTate: 0, dutyAmt: 0 },
    { label: "Octroi", adValorem: 0, specificTate: 0, dutyAmt: 0 },
  ];

  const renderShipmentTab = () => (
    <div className="p-6 space-y-6">
      {/* Description Section */}
      <div>
        <label className="block text-sm text-gray-600 mb-2">Description</label>
        <textarea
          className="w-full h-20 p-3 border border-gray-300 rounded-md resize-none"
          placeholder="Enter description..."
        />
      </div>

      {/* First Row - Total pieces and Weight */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Total pieces
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Weight (Kg)
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      {/* Second Row - Decl Value and X Rate */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-gray-600 mb-2">Decl Value</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="relative">
          <label className="block text-sm text-gray-600 mb-2">X Rate</label>
          <div className="flex">
            <input
              type="text"
              className="flex-1 p-3 border border-gray-300 rounded-l-md"
            />
            <button className="px-4 bg-gray-100 border border-l-0 border-gray-300 rounded-r-md text-sm text-gray-600">
              INR
            </button>
          </div>
        </div>
      </div>

      {/* Third Row - Inco Term and Freight */}
      <div className="grid grid-cols-3 gap-6">
        <div className="relative">
          <label className="block text-sm text-gray-600 mb-2">Inco Term</label>
          <select className="w-full p-2 border border-gray-300 rounded-lg appearance-none bg-white">
            <option>Select...</option>
          </select>
          <ChevronDown className="absolute right-3 top-11 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Freight (%)
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">Freight</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      {/* Fourth Row - Insurance and Actual Freight */}
      <div className="grid grid-cols-3 gap-6">
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Insurance %
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">Insurance</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Actual Freight
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      {/* Fifth Row - CIF, Landing Chg, Landing Chg */}
      <div className="grid grid-cols-3 gap-6">
        <div>
          <label className="block text-sm text-gray-600 mb-2">CIF</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Landing Chg (%)
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Landing Chg
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      {/* Sixth Row - Total Assessable, Noting Nbr, Customs Rpt No. */}
      <div className="grid grid-cols-3 gap-6">
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Total Assessable
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">Noting Nbr</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Customs Rpt No.
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      {/* Seventh Row - Fine and Penalty, Format BOE Chg, Service Tax */}
      <div className="grid grid-cols-3 gap-6">
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Fine and Penalty
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Format BOE Chg
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Service Tax
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      {/* Eighth Row - IEC Code, IEC Branch, First Check */}
      <div className="grid grid-cols-3 gap-6">
        <div>
          <label className="block text-sm text-gray-600 mb-2">IEC Code</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">IEC Branch</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            First Check
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      {/* Ninth Row - Interest on Duty, Charge Type, Charge Amount */}
      <div className="grid grid-cols-3 gap-6">
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Interest on Duty
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="relative">
          <label className="block text-sm text-gray-600 mb-2">
            Charge Type
          </label>
          <select className="w-full p-2 border border-gray-300 rounded-lg appearance-none bg-white">
            <option>Select...</option>
          </select>
          <ChevronDown className="absolute right-3 top-11 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Charge Amount
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      {/* Tenth Row - Disposal chg, Whse Rpt No, Whse Chg */}
      <div className="grid grid-cols-3 gap-6">
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Disposal chg
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Whse Rpt No
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">Whse Chg</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      {/* Eleventh Row - Ancillary 1 (A1), Ancillary 2 (A3), IPD Flag */}
      <div className="grid grid-cols-3 gap-6">
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Ancillary 1 (A1)
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Ancillary 2 (A3)
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">IPD Flag</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      {/* Last Row - Bill To, CC Bill To, Sub Class */}
      <div className="grid grid-cols-3 gap-6">
        <div>
          <label className="block text-sm text-gray-600 mb-2">Bill To</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">CC Bill To</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="relative">
          <label className="block text-sm text-gray-600 mb-2">Sub Class</label>
          <select className="w-full p-2 border border-gray-300 rounded-lg appearance-none bg-white">
            <option>Select...</option>
          </select>
          <ChevronDown className="absolute right-3 top-11 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>
    </div>
  );

  const renderAWBTab = () => (
    <div className="p-6 space-y-6">
      {/* AWB and MAWB Fields */}
      <div className="grid grid-cols-4 gap-6">
        <div>
          <label className="block text-sm text-gray-600 mb-2">AWB</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">Flight</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">Date</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Classification
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div>
          <label className="block text-sm text-gray-600 mb-2">MAWB</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">Route</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">Date</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      {/* Recipient Section */}
      <div className="border border-gray-300 rounded-lg">
        <div
          className="flex items-center justify-between p-4 bg-gray-100 cursor-pointer"
          onClick={() => setRecipientExpanded(!recipientExpanded)}
        >
          <h3 className="text-sm font-medium text-gray-800">Recipient</h3>
          {recipientExpanded ? (
            <ChevronUp className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-600" />
          )}
        </div>

        {recipientExpanded && (
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Phone
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Dest Loc
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Address
              </label>
              <textarea className="w-full p-2 border border-gray-300 rounded-lg h-20 resize-none" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">City</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  State
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Postal
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Shipper Section */}
      <div className="border border-gray-300 rounded-lg">
        <div
          className="flex items-center justify-between p-4 bg-gray-100 cursor-pointer"
          onClick={() => setShipperExpanded(!shipperExpanded)}
        >
          <h3 className="text-sm font-medium text-gray-800">Shipper</h3>
          {shipperExpanded ? (
            <ChevronUp className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-600" />
          )}
        </div>

        {shipperExpanded && (
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Phone
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Orig Loc
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Address
              </label>
              <textarea className="w-full p-2 border border-gray-300 rounded-lg h-20 resize-none" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">City</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  State
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Postal
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Duty Amount Calculation Table */}
     <DutyCalculationComponent/>
    </div>
  );

  return (
    <div className=" mx-auto bg-white overflow-hidden">
      {/* Action Buttons */}
      <div className="flex justify-end space-x-3">
        <button className="px-4 py-2  font-bold border border[#D50C0C] text-red-600 rounded-md hover:bg-red-50 text-sm">
          CP Match
        </button>
        <button className="px-4 py-2  font-bold border border-[#D50C0C] text-red-600 rounded-md hover:bg-orange-50 text-sm">
          Early Completion
        </button>
        <button className="px-4 py-2  font-bold border border-[#D50C0C] text-red-600 rounded-md hover:bg-green-50 text-sm">
          Complete
        </button>
        <button className="px-4 py-2  font-bold bg-red-600 text-white rounded-md hover:bg-red-700 text-sm">
          Save
        </button>
        <button className="px-4 py-2  font-bold border border-[#D50C0C] text-red-600 rounded-md hover:bg-gray-50 text-sm">
          Close
        </button>
      </div>
      {/* Tab Navigation */}
      <div className="flex">
        <button
          className={`px-6 py-3 text-sm font-medium border-b-2 ${
            activeTab === "AWB"
              ? "bg-[#FFFDEB] border-b-3 border-[#F8E117]"
              : "border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300"
          }`}
          onClick={() => setActiveTab("AWB")}
        >
          AWB
        </button>
        <button
          className={`px-6 py-3 text-sm font-medium border-b-2 ${
            activeTab === "Shipment"
              ? "bg-[#FFFDEB] border-b-3 border-[#F8E117]"
              : "border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300"
          }`}
          onClick={() => setActiveTab("Shipment")}
        >
          Shipment
        </button>
      </div>

      {/* Tab Content */}
      <div className="min-h-screen">
        {activeTab === "AWB" ? renderAWBTab() : renderShipmentTab()}
      </div>
    </div>
  );
};

export default AWBShipmentForm;
