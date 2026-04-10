import React from 'react'

const Setting = () => {
    return (
        <div className='flex items-center justify-center px-4 mt-3'>
            
            {/* Outer wrapper */}
            <div className=" w-full sm:w-[60vw] md:w-[40vw] lg:w-[23vw] max-w-md flex justify-center min-h-[95%]">

                {/* Main Card */}
                <div className=" w-full min-h-[90vh] rounded bg-gray-50">

                    {/* Header */}
                    <div className="p-4 border-b bg-gray-100">
                        <h2 className="font-semibold text-gray-700">
                            Account Settings
                        </h2>
                    </div>

                    {/* Profile Section */}
                    <div className="p-4 flex items-center gap-4">

                        <div className="relative">
                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="profile"
                                className="w-14 h-14 rounded-full object-cover"
                            />

                            {/* Camera Icon */}
                            <div className="absolute bottom-0 right-0 bg-violet-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                📷
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold">Marry Doe</h3>
                            <p className="text-sm text-gray-500">
                                Marry@gmail.com
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="px-4 pb-4 text-sm text-gray-600">
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
                        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
                        Sed Diam
                    </div>

                    {/* Divider */}
                    <div className="border-t border-dashed mx-4"></div>

                </div>

            </div>

        </div>
    )
}

export default Setting