import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";

type Teacher = {
    teacherID: string;
    id: string;
    name: string;
    email: string;
    photo: string;
    subjects: string[];
    classes: string[];
    phone: string;
    address: string;
}

const columns = [
    {
        header:"Info",
        accessor:"info",
    },
    {
        header: "Teacher ID",
        accessor: "teacherID",
        className: "hidden md:table-cell",
    },
    {
        header: "Subjects",
        accessor: "subjects",
        className: "hidden md:table-cell",
    },
    {
        header: "Classes",
        accessor: "classes",
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

const TeacherListPage = () => {


     const renderRow = (item:Teacher) => {
        return (
            <tr>
                <td>
                    {/* <Image src={item.photo} alt="pic" width={40} className="md:hidden xl:block w-10 h-10 rounded-full object-cover"/> */}
                    <div className="flex flex-col">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-xs text-gray-500">{item?.email}</p>
                    </div>
                </td>
                <td> className="hidden md:table-cell"{item.teacherID}</td>
                <td> className="hidden md:table-cell"{item.subjects.join(",")}</td>
                <td> className="hidden md:table-cell"{item.classes.join(",")}</td>
                <td> className="hidden md:table-cell"{item.phone}</td>
                <td> className="hidden md:table-cell"{item.address}</td>
                <td>
                    <div className="flex items-center gap-2">
                        <Link href={`/list/teachers/${item.id}`}>
                            <button className="w-7 h-7 flex-center justify-center rounded-full bg-red">
                                del
                            </button>
                        </Link>
                        <button className="w-7 h-7 flex-center justify-center rounded-full bg-lamaSky">
                                view
                            </button>
                    </div>
                </td>
            </tr>
        )
    };


    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex item-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <div className="ml-auto">
                        <TableSearch />
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full ">
                        <button>
                            <span className="text-sm font-medium">Filter</span>
                            {/* <span className="ml-1 text-gray-400">By Department</span> */}
                        </button>
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full ">
                        <button>
                            <span className="text-sm font-medium">Sort</span>
                        </button>
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full ">
                        <button>
                            <span className="text-sm font-medium">Add</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* LIST */}
            <Table columns={columns}/>
            {/* PAGINATION */}
            <Pagination />
        </div>
    );
};

export default TeacherListPage;
