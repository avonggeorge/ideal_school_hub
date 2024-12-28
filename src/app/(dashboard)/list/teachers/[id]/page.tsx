import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBuilding, faCalendarAlt, faFilter, faPhone, faPlus, faSort, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { faTint } from "@fortawesome/free-solid-svg-icons/faTint";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faChalkboard } from "@fortawesome/free-solid-svg-icons/faChalkboard";


const SingleTeacherPage = () => {
    return (
        <div className="flex-1 p-4 flex-col gap-4 xl:flex-row">
            {/* LEFT */}
            <div className="w-full xl:w-2/3">
                {/* TOP */}
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* USER INFO CARD*/}
                    <div className="bg-brown py-6 px-4 rounded-md flex-1 flex gap-4">
                        <div className="w-1/3">
                            <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
                        </div>
                        <div className="w-2/3 flex flex-col justify-between gap-4">
                            <h1 className="text-xl font-semibold">Ikechukwu Finesse</h1>
                            <FormModal table="teacher" type="update" data={
                                {
                    id: 1,
                    username: "ayomideajibade",
                    email: "ayomideajibade@gmail.com",
                    password: "password",
                    firstName: "Ayomide",
                    lastName: "Ajibade",
                    phone: "+234 701 234 5678",
                    address: "14 Bankole Str, Ojo, Ogun",
                    bloodType: "A+",
                    dateOfBirth: "2000-01-01",
                    sex: "male",
                    img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                  }
                            }
                            />
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
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
                    {/* SMALL CARDS */}
                    <div className="flex-1 flex gap-4 justify-between flex-wrap">
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:[48%]">
                            <FontAwesomeIcon icon={faUserCheck} className="w-6 h-6 text-blue-500" style={{ width: '14px', height: '14px' }} />
                            {/* <Image
                            src="https://via.placeholder.com/150"
                            alt="schedule"
                            width={24}
                            height={24}
                            classNames="w-6 h-6"
                            /> */}
                            <div>
                                <h1 className="text-xl font-semibold">90%</h1>
                                <span className="text-sm text-gray-400">Attendance</span>
                            </div>
                        </div>
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[48%] 2xl:[48%]">
                             <FontAwesomeIcon icon={faBuilding} className="w-6 h-6 text-yellow-500" style={{ width: '14px', height: '14px' }} />
                            {/* <Image
                            src="https://via.placeholder.com/150"
                            alt="schedule"
                            width={24}
                            height={24}
                            classNames="w-6 h-6"
                            /> */}
                            <div>
                                <h1 className="text-xl font-semibold">2</h1>
                                <span className="text-sm text-gray-400">Branches</span>
                            </div>
                        </div>
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[48%] 2xl:[48%]">
                             <FontAwesomeIcon icon={faBook} className="w-6 h-6 text-purple-500" style={{ width: '14px', height: '14px' }} />
                            {/* <Image
                            src="https://via.placeholder.com/150"
                            alt="schedule"
                            width={24}
                            height={24}
                            classNames="w-6 h-6"
                            /> */}
                            <div>
                                <h1 className="text-xl font-semibold">2</h1>
                                <span className="text-sm text-gray-400">Lessons</span>
                            </div>
                        </div>
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[48%] 2xl:[48%]">
                             <FontAwesomeIcon icon={faChalkboard} className="w-6 h-6 text-green-500" style={{ width: '14px', height: '14px' }} />
                            {/* <Image
                            src="https://via.placeholder.com/150"
                            alt="schedule"
                            width={24}
                            height={24}
                            classNames="w-6 h-6"
                            /> */}
                            <div>
                                <h1 className="text-xl font-semibold">2</h1>
                                <span className="text-sm text-gray-400">Classes</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BOTTOM */}
                <div className="">Schedule</div>
            </div>
            {/* RIGHT */}
            <div className="w-full xl:w-1/3">Right</div>
        </div>
    )
}

export default SingleTeacherPage;

