import React from 'react'

const Create = () => {
    return (
        <div className='flex justify-center items-center px-4 mt-3'>
            

            <div className="w-full max-w-md flex justify-center">

                {/* Main Card */}
                <div className="bg-gray-100/50 w-full sm:w-[60vw] md:w-[40vw] lg:w-[23vw] min-h-[95%] p-6 rounded flex flex-col justify-between">

                    {/* Top Section */}
                    <div>
                        <h1 className="text-3xl font-bold mb-4">
                            Create your <br /> PopX account
                        </h1>

                        {/* Form */}
                        <div className="flex flex-col gap-2">

                            <div>
                                <label className="text-violet-600 text-sm font-semibold">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full border rounded p-2 mt-1 outline-none focus:ring-2 focus:ring-violet-500"
                                />
                            </div>

                            <div>
                                <label className="text-violet-600 text-sm font-semibold">
                                    Phone Number *
                                </label>
                                <input
                                    type="text"
                                    placeholder="Phone number"
                                    className="w-full border rounded p-2 mt-1 outline-none focus:ring-2 focus:ring-violet-500"
                                />
                            </div>

                            <div>
                                <label className="text-violet-600 text-sm font-semibold">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full border rounded p-2 mt-1 outline-none focus:ring-2 focus:ring-violet-500"
                                />
                            </div>

                            <div>
                                <label className="text-violet-600 text-sm font-semibold">
                                    Password *
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full border rounded p-2 mt-1 outline-none focus:ring-2 focus:ring-violet-500"
                                />
                            </div>

                            <div>
                                <label className="text-violet-600 text-sm font-semibold">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Company name"
                                    className="w-full border rounded p-2 mt-1 outline-none focus:ring-2 focus:ring-violet-500"
                                />
                            </div>

                            {/* Radio Buttons */}
                            <div className="mt-2">
                                <p className="text-sm font-medium mb-2">
                                    Are you an Agency? <span className="text-red-500">*</span>
                                </p>

                                <div className="flex gap-6">
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="agency" />
                                        Yes
                                    </label>

                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="agency" />
                                        No
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Bottom Button */}
                    <button className="bg-violet-600 text-white p-2 rounded mt-6 hover:bg-violet-700 transition">
                        <a href="/setting">Create Account</a>
                    </button>

                </div>

            </div>
        </div>
    )
}

export default Create