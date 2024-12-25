import React from "react";


const SingleTeacherPage = () => {
    return (
        <div className="flex-1 p-4 flex-col gap-4 xl:flex-row">
            {/* LEFT */}
            <div className="w-full xl:w-2/3">
                {/* TOP */}
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* USER INFO CARD*/}
                    <div className="bg-brown py-6 px-4 rounded-md flex-1 flex gap-4">
                        <div className="w-1/3">
                            {/* <Image src="" alt="pic" width={144} height={144} className="w-36 h-36 rounded-full object-cover"/> */}
                        </div>
                        <div className="w-2/3 flex flex-col justify-between gap-4">
                            <h1 className="text-xl font-semibold">Ikechukwu Finesse</h1>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="flex item-center justify-between gap-2 flex-wrap text-xs font-medium">
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                Blood Group:
                                <span>A+</span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                Date:
                                <span>December 2024</span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                Mail:
                                <span>username@email.com</span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                Phone:
                                <span>+234 8030 001234</span>
                            </div>
                        </div>
                    </div>
                    {/* SMALL CARDS */}
                    <div className="flex-1"></div>
                </div>
                {/* BOTTOM */}
                <div className="">Schedule</div>
            </div>
            {/* RIGHT */}
            <div className="w-full xl:w-1/3">Right</div>
        </div>
    )
}

export default SingleTeacherPage;

