// import React, { useState } from "react";
// import { X, ChevronDown, ChevronRight } from "lucide-react";
// import LogoIcon from "../assets/Logo.png";
// const Sidebar = ({
//   activeItem,
//   setActiveItem,
//   sidebarOpen,
//   setSidebarOpen,
// }) => {
//   const [expandedSections, setExpandedSections] = useState({
//     workflow: true,
//     declarationEntry: false,
//     preSubmitEdit: false,
//     cbsePrint: false,
//   });

//   // Hierarchical menu structure
//   const menuItems = [
//     {
//       id: "workflow",
//       label: "Workflow",
//       type: "section",
//       children: [
//         {
//           id: "ech",
//           label: "ECH",
//           type: "subsection",
//           children: [
//             {
//               id: "cb-xi-40",
//               label: "CB XI (40)",
//               path: "/cb-xi-40",
//               count: 40,
//             },
//             {
//               id: "non-doc-17",
//               label: "Non Doc (17)",
//               path: "/non-doc-17",
//               count: 17,
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: "declarationEntry",
//       label: "Declaration Entry",
//       type: "section",
//       children: [
//         { id: "cb-xi1-1", label: "CB XI1 (1)", path: "/cb-xi1-1", count: 1 },
//         { id: "cb-xi11-1", label: "CB XI11 (1)", path: "/cb-xi11-1", count: 1 },
//         {
//           id: "cb-xiv-1",
//           label: "CB XIV (1)",
//           path: "/cb-xiv-1",
//           count: 1,
//           active: true,
//         },
//         {
//           id: "ct-missing-6",
//           label: "CT Missing (6)",
//           path: "/ct-missing-6",
//           count: 6,
//         },
//         { id: "calling-4", label: "Calling (4)", path: "/calling-4", count: 4 },
//       ],
//     },
//     {
//       id: "preSubmitEdit",
//       label: "Pre-Submit Edit",
//       type: "section",
//       children: [
//         { id: "no-gst-7", label: "No GST (7)", path: "/no-gst-7", count: 7 },
//         { id: "no-kvc-8", label: "No KVC (8)", path: "/no-kvc-8", count: 8 },
//         {
//           id: "no-kvc-gst-5",
//           label: "No KVC- GST (5)",
//           path: "/no-kvc-gst-5",
//           count: 5,
//         },
//         {
//           id: "decl-trace-3",
//           label: "Decl Trace (3)",
//           path: "/decl-trace-3",
//           count: 3,
//         },
//         {
//           id: "decl-brk-133",
//           label: "Decl BRK (133)",
//           path: "/decl-brk-133",
//           count: 133,
//         },
//         { id: "no-iec-1", label: "No IEC (1)", path: "/no-iec-1", count: 1 },
//         {
//           id: "no-aud-code-1",
//           label: "No AUD CODE (1)",
//           path: "/no-aud-code-1",
//           count: 1,
//         },
//         {
//           id: "checklist-11",
//           label: "Checklist (11)",
//           path: "/checklist-11",
//           count: 11,
//         },
//         {
//           id: "checklist-sent-0",
//           label: "Checklist sent (0)",
//           path: "/checklist-sent-0",
//           count: 0,
//         },
//         { id: "pre-psl-1", label: "Pre PSL (1)", path: "/pre-psl-1", count: 1 },
//         {
//           id: "port-arrival-1",
//           label: "Port Arrival (1)",
//           path: "/port-arrival-1",
//           count: 1,
//         },
//       ],
//     },
//     {
//       id: "cbsePrint",
//       label: "CBSE Print",
//       type: "section",
//       children: [
//         { id: "cbe-i-print", label: "CBE I Print", path: "/cbe-i-print" },
//         { id: "cbe-iii-print", label: "CBE III Print", path: "/cbe-iii-print" },
//         { id: "cbe-iv-print", label: "CBE IV Print", path: "/cbe-iv-print" },
//         { id: "cbe-v-print", label: "CBE V Print", path: "/cbe-v-print" },
//         {
//           id: "submit-edi",
//           label: "Submit EDI",
//           type: "subsection",
//           children: [
//             { id: "doc-11", label: "DOC (11)", path: "/doc-11", count: 11 },
//             { id: "lv-9", label: "LV (9)", path: "/lv-9", count: 9 },
//             { id: "hv-18", label: "HV (18)", path: "/hv-18", count: 18 },
//             { id: "hv-1", label: "HV (1)", path: "/hv-1", count: 1 },
//             {
//               id: "customs-repla",
//               label: "Customs Repla",
//               path: "/customs-repla",
//             },
//           ],
//         },
//       ],
//     },
//   ];

//   const toggleSection = (sectionId) => {
//     setExpandedSections((prev) => ({
//       ...prev,
//       [sectionId]: !prev[sectionId],
//     }));
//   };

//   const handleNavigation = (item) => {
//     if (item.path) {
//       setActiveItem(item.id);
//       // In a real app with react-router, you would use: navigate(item.path);
//       console.log("Navigating to:", item.path);
//       // Close sidebar on mobile after navigation
//       if (window.innerWidth < 1024) {
//         setSidebarOpen(false);
//       }
//     }
//   };

//   const renderMenuItem = (item, depth = 0) => {
//     const isSection = item.type === "section";
//     const isSubsection = item.type === "subsection";
//     const isExpanded = expandedSections[item.id];
//     const hasChildren = item.children && item.children.length > 0;
//     const isActive = activeItem === item.id || item.active;

//     const paddingLeft = depth === 0 ? "pl-2" : depth === 1 ? "pl-4" : "pl-6";

//     if (isSection) {
//       return (
//         <div key={item.id} className="mb-1">
//           <button
//             onClick={() => toggleSection(item.id)}
//             className={`w-full flex items-center justify-between py-1 px-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors ${paddingLeft}`}
//           >
//             <div className="flex items-center space-x-2">
//               {isExpanded ? (
//                 <ChevronDown className="w-3 h-3 text-gray-500" />
//               ) : (
//                 <ChevronRight className="w-3 h-3 text-gray-500" />
//               )}
//               <span className="font-medium">{item.label}</span>
//             </div>
//           </button>
//           {isExpanded && hasChildren && (
//             <div className="mt-1">
//               {item.children.map((child) => renderMenuItem(child, depth + 1))}
//             </div>
//           )}
//         </div>
//       );
//     }

//     if (isSubsection) {
//       return (
//         <div key={item.id} className="mb-1">
//           <button
//             onClick={() => toggleSection(item.id)}
//             className={`w-full flex items-center justify-between py-1 px-2 text-sm text-gray-600 hover:bg-gray-50 rounded transition-colors ${paddingLeft}`}
//           >
//             <div className="flex items-center space-x-2">
//               {isExpanded ? (
//                 <ChevronDown className="w-3 h-3 text-gray-400" />
//               ) : (
//                 <ChevronRight className="w-3 h-3 text-gray-400" />
//               )}
//               <span>{item.label}</span>
//             </div>
//           </button>
//           {isExpanded && hasChildren && (
//             <div className="mt-1">
//               {item.children.map((child) => renderMenuItem(child, depth + 1))}
//             </div>
//           )}
//         </div>
//       );
//     }

//     // Regular menu item
//     return (
//       <button
//         key={item.id}
//         onClick={() => handleNavigation(item)}
//         className={`w-full flex items-center justify-between py-1 px-2 text-sm rounded transition-colors ${paddingLeft} ${
//           isActive
//             ? "bg-blue-50 text-blue-600 border-l-2 border-blue-600"
//             : "text-gray-600 hover:bg-gray-50"
//         }`}
//       >
//         <div className="flex items-center space-x-2">
//           <div className="w-2 h-2 rounded-full bg-gray-400"></div>
//           <span>{item.label}</span>
//         </div>
//         {item.count !== undefined && (
//           <span className="text-xs text-gray-500">({item.count})</span>
//         )}
//       </button>
//     );
//   };

//   return (
//     <div
//       className={`
//         bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out z-50
//         ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
//         lg:translate-x-0 lg:static
//         fixed inset-y-0 left-0
//         w-64 lg:w-80
//         min-h-screen
//         overflow-y-auto
//       `}
//     >
//       {/* Header with close button for mobile */}
//       <div className="p-4 border-b border-gray-200 flex items-center justify-between">
//         <div className="rounded-lg flex items-center   mr-10 lg:mr-0">
//           <img
//             src={LogoIcon}
//             alt=""
//             style={{ width: "221.78px", height: "51px", objectFit: "contain" }}
//           />
//         </div>

//         <button
//           onClick={() => setSidebarOpen(false)}
//           className="lg:hidden p-1 text-gray-500 hover:text-gray-700 rounded"
//         >
//           <X className="w-5 h-5" />
//         </button>
//       </div>

//       {/* Navigation */}
//       <nav className="p-2 space-y-1">
//         {menuItems.map((item) => renderMenuItem(item))}
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import { X, ChevronDown, ChevronRight } from "lucide-react";
import LogoIcon from "../assets/Logo.png";
const Sidebar = ({
  activeItem,
  setActiveItem,
  sidebarOpen,
  setSidebarOpen,
}) => {
  const [expandedSections, setExpandedSections] = useState({
    workflow: true,
    declarationEntry: false,
    preSubmitEdit: false,
    cbsePrint: false,
    submitEdi: false,
  });

  // Hierarchical menu structure matching the image
  const menuItems = [
    {
      id: "workflow",
      label: "Workflow",
      type: "section",
      children: [
        {
          id: "ech",
          label: "ECH",
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
          active: true,
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
  ];

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
            className="flex items-center cursor-pointer py-0.5 hover:bg-gray-50"
            onClick={() => toggleSection(item.id)}
          >
            <div className="w-4 flex justify-center mr-1">
              {isExpanded ? (
                <ChevronDown className="w-3 h-3 text-gray-600" />
              ) : (
                <ChevronRight className="w-3 h-3 text-gray-600" />
              )}
            </div>
            <span className="text-sm text-gray-800">{item.label}</span>
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
            className="flex items-center cursor-pointer py-0.5 hover:bg-gray-50"
            onClick={() => toggleSection(item.id)}
          >
            <div className="w-4 flex justify-center mr-1">
              {isExpanded ? (
                <ChevronDown className="w-3 h-3 text-gray-500" />
              ) : (
                <ChevronRight className="w-3 h-3 text-gray-500" />
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

    // Regular menu item
    const indentClass = depth === 1 ? "ml-4" : depth === 2 ? "ml-8" : "";

    return (
      <div
        key={item.id}
        className={`flex items-center cursor-pointer py-0.5 hover:bg-gray-50 ${indentClass} ${
          isActive ? "text-red-600" : ""
        }`}
        onClick={() => handleNavigation(item)}
      >
        <div className="w-4 flex justify-center mr-1">
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        </div>
        <span className="text-sm">{item.label}</span>
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
        w-100
        min-h-screen
        overflow-y-auto
        text-xs
      `}
    >
      {/* Header */}
      <div className="p-3 border-b border-gray-300 flex items-center justify-between">
        <div className="flex items-center">
          <div className="rounded-lg flex items-center   mr-10 lg:mr-0">
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
