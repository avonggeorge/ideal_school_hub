import Pagination from "@/components/Pagination";
import FormModal from "@/components/FormModal";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faPlus, faSort } from '@fortawesome/free-solid-svg-icons';<span className="text-sm font-medium">Filter</span>
import { eventsData,  role, } from "@/lib/data";

type Event = {
    id: number;
    title: string;
    class: string;
    date: string;
    startTime: string;
    endTime: string;
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
        header: "Start Time",
        accessor: "startTime",
        className: "hidden md:table-cell",
    },
    {
        header: "End Time",
        accessor: "endTime",
        className: "hidden md:table-cell",
    },
    {
        header: "Actions",
        accessor: "action",
    },
];

const EventListPage = () => {
    const renderRow = (item: Event) => (
            <tr key={item.id}
            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-colorMintGreen">
                <td className="flex items-center gap-4 p-4">{item.title}</td>
                <td>{item.class}</td>
                <td className="hidden md:table-cell">{item.date}</td>
                <td className="hidden md:table-cell">{item.startTime}</td>
                <td className="hidden md:table-cell">{item.endTime}</td>
                <td>
                    <div className="flex items-center gap-2">
                       {role === "admin" && (
            <>
              <FormModal table="event" type="update" data={item} />
              <FormModal table="event" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex 
items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Events</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-colorBlue">                    
<FontAwesomeIcon icon={faFilter} style={{ width: '14px', height: '14px' }} />
                        </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-colorBlue">
<FontAwesomeIcon icon={faSort} style={{ width: '14px', height: '14px' }} />
                        </button>
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full">
                        <button>
<FontAwesomeIcon icon={faPlus} style={{ width: '14px', height: '14px' }} />
                </button>
                 {role === "admin" && <FormModal table="event" type="create" />}
                    </div>
                </div>
            </div>
            {/* LIST */}
            <Table columns={columns} renderRow={renderRow} data={eventsData} />
            {/* PAGINATION */}
            <Pagination />
        </div>
    );
};

export default EventListPage;