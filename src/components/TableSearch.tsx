"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { useRouter } from "next/navigation";

const TableSearch = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = (e.currentTarget[0] as HTMLInputElement).value;

    const params = new URLSearchParams(window.location.search);
    params.set("search", value);
    router.push(`${window.location.pathname}?${params}`);
  };


    return (
        <form
      onSubmit={handleSubmit} 
      className='w-full md:auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
            <FontAwesomeIcon icon={faSearch} color="#ADD8E6" size="lg" />
            <input
                type="text"
                placeholder="Search..."
                className="w-[200px] p-2 bg-transparent outline-none"
            />
        </form>
    );
};

export default TableSearch;
