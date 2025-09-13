import React, { useState } from "react";
import { X } from "lucide-react";
import LogoIcon from "../assets/Logo.png";
import DownIcon from "../assets/icon.png";
import LeftIcon from "../assets/left.png";

const Sidebar = ({
  activeItem,
  setActiveItem,
  sidebarOpen,
  setSidebarOpen,
}) => {
  // Function to get all expandable items from the menu structure
  const getAllExpandableItems = (items) => {
    const expandableItems = {};

    const traverse = (itemList) => {
      itemList.forEach((item) => {
        if (item.children && item.children.length > 0) {
          expandableItems[item.id] = true;
          traverse(item.children);
        }
      });
    };

    traverse(items);
    return expandableItems;
  };

  // Hierarchical menu structure matching the image
  const menuItems = [
    {
      id: "workflow",
      label: "Workflow",
      type: "section",
      children: [
        {
          id: "ecm",
          label: "ECM",
          type: "subsection",
          children: [
            { id: "cb-xi-40", label: "CB XI (40)", path: "/cb-xi-40" },
            { id: "non-doc-17", label: "Non Doc (17)", path: "/non-doc-17" },
          ],
        },
      ],
    },
    {
      id: "declarationEntry",
      label: "Declaration Entry",
      type: "section",
      children: [
        { id: "cb-xi1-1", label: "CB XI1 (1)", path: "/cb-xi1-1" },
        { id: "cb-xi11-1", label: "CB XI11 (1)", path: "/cb-xi11-1" },
        {
          id: "cb-xiv-1",
          label: "CB XIV (1)",
          path: "/cb-xiv-1",
          active: false,
        },
        { id: "ct-missing-6", label: "CT Missing (6)", path: "/ct-missing-6" },
        { id: "calling-4", label: "Calling (4)", path: "/calling-4" },
      ],
    },
    {
      id: "preSubmitEdit",
      label: "Pre-Submit Edit",
      type: "section",
      children: [
        { id: "no-gst-7", label: "No GST (7)", path: "/no-gst-7" },
        { id: "no-kvc-8", label: "No KVC (8)", path: "/no-kvc-8" },
        { id: "no-kvc-gst-5", label: "No KVC- GST (5)", path: "/no-kvc-gst-5" },
        { id: "decl-trace-3", label: "Decl Trace (3)", path: "/decl-trace-3" },
        { id: "decl-brk-133", label: "Decl BRK (133)", path: "/decl-brk-133" },
        { id: "no-iec-1", label: "No IEC (1)", path: "/no-iec-1" },
        {
          id: "no-aud-code-1",
          label: "No AUD CODE (1)",
          path: "/no-aud-code-1",
        },
        { id: "checklist-11", label: "Checklist (11)", path: "/checklist-11" },
        {
          id: "checklist-sent-0",
          label: "Checklist sent (0)",
          path: "/checklist-sent-0",
        },
        { id: "pre-psl-1", label: "Pre PSL (1)", path: "/pre-psl-1" },
        {
          id: "port-arrival-1",
          label: "Port Arrival (1)",
          path: "/port-arrival-1",
        },
      ],
    },
    {
      id: "cbsePrint",
      label: "CBSE Print",
      type: "section",
      children: [
        { id: "cbe-i-print", label: "CBE I Print", path: "/cbe-i-print" },
        { id: "cbe-iii-print", label: "CBE III Print", path: "/cbe-iii-print" },
        { id: "cbe-iv-print", label: "CBE IV Print", path: "/cbe-iv-print" },
        { id: "cbe-v-print", label: "CBE V Print", path: "/cbe-v-print" },
        {
          id: "submitEdi",
          label: "Submit EDI",
          type: "subsection",
          children: [
            { id: "doc-11", label: "DOC (11)", path: "/doc-11" },
            { id: "lv-9", label: "LV (9)", path: "/lv-9" },
            { id: "hv-18", label: "HV (18)", path: "/hv-18" },
            { id: "hv-1", label: "HV (1)", path: "/hv-1" },
            {
              id: "customs-repla",
              label: "Customs Repla",
              path: "/customs-repla",
            },
          ],
        },
      ],
    },
    {
      id: "filterTree",
      label: "Filter Tree (YY/MM/DD)",
      type: "section",
      children: [
        {
          id: "25/02/10",
          label: "25/02/10",
          type: "subsection",
          children: [
            { id: "EK514", label: "EK514", path: "/EK514" },
            {
              id: "EK0514",
              label: "EK0514",
              path: "/EK0514",
              children: [
                { id: "doc", label: "DOC(1)", path: "/EK514" },
                { id: "lv", label: "LV(1)", path: "/lv" },
                { id: "mv", label: "MV(7)", path: "/mv" },
              ],
            },
          ],
        },
        {
          id: "25/02/06",
          label: "25/02/06",
          type: "subsection",
          children: [],
        },
      ],
    },
  ];

  // Initialize all expandable sections as open
  const [expandedSections, setExpandedSections] = useState(() =>
    getAllExpandableItems(menuItems)
  );

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const handleNavigation = (item) => {
    if (item.path) {
      setActiveItem(item.id);
      console.log("Navigating to:", item.path);
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      }
    }
  };

  const renderMenuItem = (item, depth = 0) => {
    const isSection = item.type === "section";
    const isSubsection = item.type === "subsection";
    const isExpanded = expandedSections[item.id];
    const hasChildren = item.children && item.children.length > 0;
    const isActive = activeItem === item.id || item.active;


    if (isSection) {
      return (
        <div key={item.id}>
          <div
            className="flex items-center cursor-pointer p-2 hover:bg-gray-50"
            onClick={() => toggleSection(item.id)}
          >
            <div className="w-4 flex justify-center mr-1">
              {isExpanded ? (
                <img src={DownIcon} alt="" className="w-3 h-2" />
              ) : (
                <img src={LeftIcon} alt="" className="w-2 h-3" />
              )}
            </div>
            <span className="text-sm font-medium text-gray-800 ml-4">
              {item.label}
            </span>
          </div>
          {isExpanded && hasChildren && (
            <div>
              {item.children.map((child) => renderMenuItem(child, depth + 1))}
            </div>
          )}
        </div>
      );
    }

    if (isSubsection) {
      return (
        <div key={item.id} className="ml-4">
          <div
            className="flex items-center cursor-pointer p-2 hover:bg-gray-50"
            onClick={() => toggleSection(item.id)}
          >
            <div className="w-4 flex justify-center mr-1">
              {isExpanded ? (
                <img src={DownIcon} alt="" className="w-3 h-2" />
              ) : (
                <img src={LeftIcon} alt="" className="w-2 h-3" />
              )}
            </div>
            <span className="text-sm text-gray-700">{item.label}</span>
          </div>
          {isExpanded && hasChildren && (
            <div>
              {item.children.map((child) => renderMenuItem(child, depth + 1))}
            </div>
          )}
        </div>
      );
    }

    // Regular menu item or item with children (but not marked as section/subsection)
    const indentClass =
      depth === 1
        ? "ml-3"
        : depth === 2
        ? "ml-6"
        : depth === 3
        ? "ml-9"
        : depth === 4
        ? "ml-11"
        : "";
    const marginClass = depth <= 2 ? "mb-2" : "mb-1";

    // If this item has children but is not a section/subsection, treat it like a subsection
    if (hasChildren) {
      return (
        <div key={item.id} className={`${indentClass} ${marginClass}`}>
          <div
            className={`flex items-center cursor-pointer py-1.5 px-2 hover:bg-gray-50 rounded-md ${
              isActive ? "bg-red-50 border-l-3 border-red-400" : ""
            }`}
            onClick={() => toggleSection(item.id)}
          >
            <div className="w-4 flex justify-center mr-2">
              {isExpanded ? (
                <img src={DownIcon} alt="" className="w-3 h-2" />
              ) : (
                <img src={LeftIcon} alt="" className="w-2 h-3" />
              )}
            </div>
            <span
              className={`text-sm font-medium ${
                isActive ? "text-red-600" : "text-gray-600"
              }`}
            >
              {item.label}
            </span>
          </div>
          {isExpanded && (
            <div className="ml-4 mt-1">
              {item.children.map((child) => renderMenuItem(child, depth + 1))}
            </div>
          )}
        </div>
      );
    }

    // Regular menu item without children
    return (
      <div
        key={item.id}
        className={`flex items-center cursor-pointer py-1 px-2 hover:bg-gray-50 rounded-md ${indentClass} ${marginClass} ${
          isActive ? "bg-red-50 border-l-3 border-red-300 text-red-600" : ""
        }`}
        onClick={() => handleNavigation(item)}
      >
        <div className="w-4 flex justify-center mr-2">
          <div
            className={`w-1.5 h-1.5 rounded-full ${
              isActive ? "bg-red-400" : "bg-gray-400"
            }`}
          ></div>
        </div>
        <span
          className={`text-xs font-normal ${
            isActive ? "text-red-600" : "text-gray-600"
          }`}
        >
          {item.label}
        </span>
      </div>
    );
  };

  return (
    <div
      className={`
        bg-white border-r border-gray-300 transition-transform duration-300 ease-in-out z-50
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static
        fixed inset-y-0 left-0
        w-80
        min-h-screen
        overflow-y-auto
        text-xs
      `}
    >
      {/* Header */}
      <div className="p-3  flex items-center justify-between">
        <div className="flex items-center">
          <div className="rounded-lg flex items-center mr-10 lg:mr-0">
            <img
              src={LogoIcon}
              alt=""
              style={{
                width: "221.78px",
                height: "51px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden p-1 text-gray-500 hover:text-gray-700"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Navigation */}
      <div className="p-2">{menuItems.map((item) => renderMenuItem(item))}</div>
    </div>
  );
};

export default Sidebar;
