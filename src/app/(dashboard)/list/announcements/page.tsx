import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faFilter } from '@fortawesome/free-solid-svg-icons';
import { announcementsData, role } from "@/lib/data";

type Announcement = {
    id: number;
    title: string;
    class: string;
    date: string;
};

const columns = [
    {
        header: "Title",
        accessor: "title",
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
            <div className="flex 
items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Announcements</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <div className="ml-auto">
                        <TableSearch />
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full">
                        <button>
                            
<FontAwesomeIcon icon={faFilter} style={{ width: '14px', height: '14px' }} />

                        </button>
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full">
                        <button>
                            
<FontAwesomeIcon icon={faFilter} style={{ width: '14px', height: '14px' }} />
                        </button>
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              
<FontAwesomeIcon icon={faSort} style={{ width: '14px', height: '14px' }} />
            </button>
                         {role === "admin" && (
              <FormModal table="announcement" type="create" />
            )}
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
