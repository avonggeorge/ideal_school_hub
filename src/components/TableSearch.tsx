import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";

const TableSearch = () => {
    return (
        <div className='w-full md:auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
            <FontAwesomeIcon icon={faSearch} color="#ADD8E6" size="lg" />
            <input
                type="text"
                placeholder="Search..."
                className="w-[200px] p-2 bg-transparent outline-none"
            />
        </div>
    );
};

export default TableSearch;
