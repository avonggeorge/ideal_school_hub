"use client"; // Add this directive at the top

import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import Link from "next/link";
import { useState } from "react"; // Import React hooks if using state
import { assignmentsData, examsData, lessonsData, resultsData, role, subjectsData } from "@/lib/data";

type Result = {
    id: number;
    subject: string;
    class: string;
    teacher: number;
    student: string;
    type: "exam" | "assignment";
    date: string;
    score: number;
};

const columns = [
    {
        header: "Subject Name",
        accessor: "name",
    },
    {
        header: "Student",
        accessor: "student",
    },
    {
        header: "Score",
        accessor: "score",
        className: "hidden md:table-cell",
    },
    {
        header: "Class",
        accessor: "class",
        className: "hidden md:table-cell",
    },
    {
        header: "Teacher",
        accessor: "teacher",
        className: "hidden md:table-cell",
    },
    {
        header: "Date",
        accessor: "date",
        className: "hidden md:table-cell",
    },
    {
        header: "Actions",
        accessor: "action",
    },
];

const ResultListPage = () => {
    const role = "admin"; // Define the role variable as needed

    const renderRow = (item: Result) => {
        return (
            <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
                <td className="flex items-center gap-4 p-4">{item.subject}</td>
                <td>{item.student}</td>
                <td className="hidden md:table-cell">{item.score}</td>
                <td className="hidden md:table-cell">{item.teacher}</td>
                <td className="hidden md:table-cell">{item.class}</td>
                <td className="hidden md:table-cell">{item.date}</td>
                <td>
                    <div className="flex items-center gap-2">
                        <Link href={`/list/teachers/${item.id}`}>
                            <button className="w-12 h-7 flex-center justify-center rounded-full bg-cyan-500">
                                edit
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
                <h1 className="hidden md:block text-lg font-semibold">All Results</h1>
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
            <Table columns={columns} renderRow={renderRow} data={resultsData} />
            {/* PAGINATION */}
            <Pagination />
        </div>
    );
};

export default ResultListPage;
