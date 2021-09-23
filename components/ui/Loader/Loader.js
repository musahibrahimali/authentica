const Loader = () => {
    return (
        <>
            <div className="flex flex-col justify-between mt-8 p-4">
                <div className="flex justify-between">
                    <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-gray-300 h-12 w-12"></div>
                    </div>

                    <div className="animate-pulse flex justify-center items-center space-x-4">
                        <div className="rounded-full bg-gray-300 h-12 w-12"></div>
                        <div className="h-4 bg-gray-300 rounded w-12"></div>
                    </div>
                </div>

                <div className="border mt-12 bg-gray-100 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div className="animate-pulse flex space-x-4">
                        <div className="flex-1 py-1">
                            <div className="h-4 bg-gray-300rounded w-3/4"></div>
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-300 rounded"></div>
                                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* table shimmer */}
                <div className="flex flex-col w-4/5 mx-auto">

                    <div className="border mt-12 bg-gray-100 shadow rounded-md p-4">
                        <div className="animate-pulse flex space-x-4">
                            <div className="flex-1 py-1">
                                <div className="h-4 bg-gray-300rounded w-3/4"></div>
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-300 rounded"></div>
                                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border mt-4 bg-gray-100 shadow rounded-md p-4">
                        <div className="animate-pulse flex space-x-4">
                            <div className="flex-1 py-1">
                                <div className="h-4 bg-gray-300rounded w-3/4"></div>
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-300 rounded"></div>
                                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border mt-4 bg-gray-100 shadow rounded-md p-4">
                        <div className="animate-pulse flex space-x-4">
                            <div className="flex-1 py-1">
                                <div className="h-4 bg-gray-300rounded w-3/4"></div>
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-300 rounded"></div>
                                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border mt-4 bg-gray-100 shadow rounded-md p-4">
                        <div className="animate-pulse flex space-x-4">
                            <div className="flex-1 py-1">
                                <div className="h-4 bg-gray-300rounded w-3/4"></div>
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-300 rounded"></div>
                                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Loader;