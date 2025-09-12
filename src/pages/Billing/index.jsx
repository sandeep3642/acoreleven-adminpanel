import React from 'react'

const Index = () => {
    return (
        <>
            <div className="w-full flex justify-end p-6">
                {/* Flight Section */}
                <div className="bg-white border-b-1 border-l-1 border-gray-200">
                    <div className="bg-gray-100 px-6 py-4">
                        <h2 className=" text-start text-lg font-medium text-gray-500">Flight</h2>
                    </div>

                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div>
                                <label className=" text-start block text-sm font-medium text-gray-600 mb-2">
                                    Flight No.
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="  text-start block text-sm font-medium text-gray-600 mb-2">
                                    Origin Airport
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className=" text-start block text-sm font-medium text-gray-600 mb-2">
                                    Orig Country
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className=" text-start block text-sm font-medium text-gray-600 mb-2">
                                    Flight Date
                                </label>
                                <input
                                    type="date"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className=" text-start block text-sm font-medium text-gray-600 mb-2">
                                    Dest Airport
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className=" text-start block text-sm font-medium text-gray-600 mb-2">
                                    Expt Country
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shipment Section */}
                <div className="bg-white border-b-1 border-l-1 border-r-1 border-gray-200">
                    <div className="bg-gray-100 px-6 py-4 ">
                        <h2 className="text-start text-lg font-medium text-gray-500">Shipment</h2>
                    </div>

                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div>
                                <label className=" text-start block text-sm font-medium text-gray-600 mb-2">
                                    Ship Date
                                </label>
                                <input
                                    type="date"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className=" text-start block text-sm font-medium text-gray-600 mb-2">
                                    AWB
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className=" text-start block text-sm font-medium text-gray-600 mb-2">
                                    Form ID
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className=" text-start block text-sm font-medium text-gray-600 mb-2">
                                    Arrival Date
                                </label>
                                <input
                                    type="date"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className=" text-start block text-sm font-medium text-gray-600 mb-2">
                                    Dest Loc
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className=" text-start block text-sm font-medium text-gray-600 mb-2">
                                    Disp Loc
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Button */}

            </div>
            <div className="flex justify-end">
                <button className="w-24 h-10 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 font-medium text-sm">
                    Save
                </button>
            </div>
        </>
    )
}

export default Index