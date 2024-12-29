import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBuilding, faCalendarAlt, faFilter, faPhone, faTint, faEnvelope, faChalkboard, faUserCheck } from '@fortawesome/free-solid-svg-icons';


const SingleStudentPage = () => {
    return (
         <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-colorMintGreenLight py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
                <Image
                src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
                </div>
                <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Ajoke Opeyemi</h1>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="flex item-center justify-between gap-2 flex-wrap text-xs font-medium">
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <FontAwesomeIcon icon={faTint} style={{ width: '14px', height: '14px', color: 'red' }} />
                                <span>A+</span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <FontAwesomeIcon icon={faCalendarAlt} style={{ width: '14px', height: '14px', color: 'gray' }} />
                                <span>December 2024</span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <FontAwesomeIcon icon={faEnvelope} style={{ width: '14px', height: '14px', color: 'blue' }} />
                                <span>username@email.com</span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <FontAwesomeIcon icon={faPhone} style={{ width: '14px', height: '14px', color: 'green' }} />
                                <span>+234 8030 001234</span>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* SMALL CARDS */}
                    <div className="flex-1 flex gap-4 justify-between flex-wrap">
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <FontAwesomeIcon icon={faUserCheck} className="w-6 h-6 text-blue-500" style={{ width: '14px', height: '14px' }} />
                          <div className="">
                                <h1 className="text-xl font-semibold">90%</h1>
                                <span className="text-sm text-gray-400">Attendance</span>
                            </div>
                        </div>
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[48%] 2xl:[48%]">
                             <FontAwesomeIcon icon={faBuilding} className="w-6 h-6 text-yellow-500" style={{ width: '14px', height: '14px' }} />
                            <div className="">
                                <h1 className="text-xl font-semibold">6th</h1>
                                <span className="text-sm text-gray-400">Grade</span>
                            </div>
                        </div>
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[48%] 2xl:[48%]">
                             <FontAwesomeIcon icon={faBook} className="w-6 h-6 text-purple-500" style={{ width: '14px', height: '14px' }} />
                           <div className="">
                                <h1 className="text-xl font-semibold">18</h1>
                                <span className="text-sm text-gray-400">Lessons</span>
                            </div>
                        </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <FontAwesomeIcon icon={faChalkboard} className="w-6 h-6 text-green-500" style={{ width: '14px', height: '14px' }} />
              <div className="">
                <h1 className="text-xl font-semibold">6A</h1>
                <span className="text-sm text-gray-400">Class</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4">
          <h1>Student&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
             <Link className="p-3 rounded-md bg-colorPinkLight" href="/">
              Student&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md bg-colorMintGreen" href="/">
              Student&apos;s Teachers
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href="/">
              Student&apos;s Exams
            </Link>
            <Link className="p-3 rounded-md bg-colorPinkLight" href="/">
              Student&apos;s Assignments
            </Link>
            <Link className="p-3 rounded-md bg-colorBlueLight" href="/">
              Student&apos;s Results
            </Link>
          </div>
        </div>
        
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleStudentPage;