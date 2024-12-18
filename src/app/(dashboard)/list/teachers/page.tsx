import TableSearch from "@/components/TableSearch";

const TeacherListPage = () => {
    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex item-center justify-betweem">
                <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="">
                        <button>
                            <span className="text-white font-semibold">Add Teacher</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* LIST */}
            <div className=""></div>
            {/* PAGINATION */}
            <div className=""></div>
        </div>
    )
}

export default TeacherListPage;