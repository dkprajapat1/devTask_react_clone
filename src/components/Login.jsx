import React from 'react'

const Login = () => {
    return (
        <div className="flex justify-center items-center mt-3 px-4">

            <div className="bg-gray-50 w-full sm:w-[60vw] md:w-[40vw] lg:w-[23vw] max-w-md min-h-[95vh] p-6 rounded flex flex-col">

                {/* Top Content */}
                <div>
                    <h1 className="text-3xl font-bold">
                        Signin to your <br /> PopX account
                    </h1>

                    <p className="text-gray-500 mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>

                    {/* Form */}
                    <div className="flex flex-col gap-3">

                        <div className="relative">
                            <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-violet-600 text-sm">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="w-full border rounded p-2 outline-none focus:ring-2 focus:ring-violet-500"
                            />
                        </div>

                        <div className="relative">
                            <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-violet-600 text-sm">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                className="w-full border rounded p-2 outline-none focus:ring-2 focus:ring-violet-500"
                            />
                        </div>

                    </div>
                </div>

                {/* Button */}
                <button className="bg-gray-300 text-white p-2 rounded mt-4 hover:bg-violet-500">
                   <a href='/setting'> Login</a>
                </button>

            </div>

        </div>
    )
}

export default Login