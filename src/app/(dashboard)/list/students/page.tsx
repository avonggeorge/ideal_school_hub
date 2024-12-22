"use client"; // Add this directive at the top

import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import Link from "next/link";
import { useState } from "react"; // Import React hooks if using state
import { role, studentsData } from "@/lib/data";

type Student = {
    studentID: string;
    id: number;
    name: string;
    email?: string;
    photo: string;
    grade: number;
    class: string;
    phone?: string;
    address: string;
};

const columns = [
    {
        header: "Info",
        accessor: "info",
    },
    {
        header: "Student ID",
        accessor: "studentID",
        className: "hidden md:table-cell",
    },
    {
        header: "Grade",
        accessor: "grade",
        className: "hidden md:table-cell",
    },
    {
        header: "Phone",
        accessor: "phone",
        className: "hidden lg:table-cell",
    },
    {
        header: "Address",
        accessor: "address",
        className: "hidden lg:table-cell",
    },
    {
        header: "Actions",
        accessor: "action",
    },
];

const StudentListPage = () => {
    const role = "admin"; // Define the role variable as needed

    const renderRow = (item: Student) => {
        return (
            <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
                <td>
                    <div className="flex flex-col">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-xs text-gray-500">{item.class}</p>
                    </div>
                </td>
                <td className="hidden md:table-cell">{item.studentID}</td>
                <td className="hidden md:table-cell">{item.grade}</td>
                <td className="hidden md:table-cell">{item.phone}</td>
                <td className="hidden lg:table-cell">{item.address}</td>
                <td>
                    <div className="flex items-center gap-2">
                        <Link href={`/list/teachers/${item.id}`}>
                            <button className="w-12 h-7 flex-center justify-center rounded-full bg-cyan-500">
                                view
                            </button>
                        </Link>
                        {role === "admin" && (
                            <button className="w-7 h-7 flex-center justify-center rounded-full bg-red-500">
                                del
                            </button>
                        )}
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex item-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Students</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <div className="ml-auto">
                        <TableSearch />
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full">
                        <button>
                            <span className="text-sm font-medium">Filter</span>
                        </button>
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full">
                        <button>
                            <span className="text-sm font-medium">Sort</span>
                        </button>
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full">
                        <button>
                            <span className="text-sm font-medium">Add</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* LIST */}
            <Table columns={columns} renderRow={renderRow} data={studentsData} />
            {/* PAGINATION */}
            <Pagination />
        </div>
    );
};

export default StudentListPage;
