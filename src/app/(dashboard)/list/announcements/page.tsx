import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import Link from "next/link";
<<<<<<< HEAD
import { announcementsData, } from "@/lib/data";
=======
import { announcementsData, eventsData,  role, } from "@/lib/data";
>>>>>>> 982bf8a69cd1ce270c3b8f62b81bc2ffd2166bc6

type Announcement = {
    id: number;
    title: string;
    class: string;
    date: string;
};

const columns = [
    {
        header: "Title",
<<<<<<< HEAD
        accessor: "title",
=======
        accessor: "tittle",
>>>>>>> 982bf8a69cd1ce270c3b8f62b81bc2ffd2166bc6
    },
    {
        header: "Class",
        accessor: "class",
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

const AnnouncementListPage = () => {
    const role = "admin"; // Define the role variable as needed

    const renderRow = (item: Announcement) => {
        return (
            <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
                <td className="flex items-center gap-4 p-4">{item.title}</td>
                <td>{item.class}</td>
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
                <h1 className="hidden md:block text-lg font-semibold">All Announcements</h1>
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
            <Table columns={columns} renderRow={renderRow} data={announcementsData} />
            {/* PAGINATION */}
            <Pagination />
        </div>
    );
};

export default AnnouncementListPage;
