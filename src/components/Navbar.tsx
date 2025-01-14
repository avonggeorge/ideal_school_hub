import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMessage, faBullhorn, faCircleUser, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

const Navbar = async () => {
  const user = await currentUser();
  return (
    <div className='flex items-center justify-between p-4'>
      {/* SEARCH BAR */}
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
         <FontAwesomeIcon icon={faCalendarAlt} color="#ADD8E6" size="lg"/>
        <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none"/>
      </div>
      {/* ICONS AND USER */}
      <div className='flex items-center gap-6 justify-end w-full'>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <FontAwesomeIcon icon={faMessage} color="#D3D4E8" size="lg" />
        </div>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
          <FontAwesomeIcon icon={faBullhorn} color="#D3D3D3" size="lg"/>
          <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-colorBlue text-white rounded-full text-xs'>1</div>
        </div>
        <div className='flex flex-col'>
          <span className="text-xs leading-3 font-medium">John Doe</span>
           <span className="text-[10px] text-gray-500 text-right">
            {user?.publicMetadata?.role as string}
          </span>
        </div>
        <FontAwesomeIcon icon={faCircleUser} color="#ADD8E6" size="2x"/>
        <UserButton />
      </div>
    </div>
  )
}

export default Navbar