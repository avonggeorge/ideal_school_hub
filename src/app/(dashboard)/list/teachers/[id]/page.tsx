import Announcements from "@/components/Announcements";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import FormContainer from "@/components/FormContainer";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBuilding, faCalendarAlt, faFilter, faPhone, faTint, faEnvelope, faChalkboard, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Teacher } from "@prisma/client";
import { notFound } from "next/navigation";

const SingleTeacherPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const { sessionClaims } = await auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;

  const teacher:
    | (Teacher & {
        _count: { subjects: number; lessons: number; classes: number };
      })
    | null = await prisma.teacher.findUnique({
    where: { id },
    include: {
      _count: {
        select: {
          subjects: true,
          lessons: true,
          classes: true,
        },
      },
    },
  });

  if (!teacher) {
    return notFound();
  }


    return (
         <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-colorMintGreenLight py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
                {teacher.img ? (
                  <Image
                    src={teacher.img}
                    alt=""
                    width={144}
                    height={144}
                    className="w-36 h-36 rounded-full object-cover"
                  />
                ) : (
                  <i
                    className={`fas fa-user-circle text-gray-500 w-36 h-36 rounded-full`}
                    style={{ fontSize: "144px" }}
                  ></i>
                )}
                        </div>
                        <div className="w-2/3 flex flex-col justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <h1 className="text-xl font-semibold">{teacher.name + " " + teacher.surname}
                            </h1>
                            {role === "admin" && (
                  <FormContainer table="teacher" type="update" data={teacher} />
                )}
                            </div>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="flex item-center justify-between gap-2 flex-wrap text-xs font-medium">
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <FontAwesomeIcon icon={faTint} style={{ width: '14px', height: '14px', color: 'red' }} />
                                <span>{teacher.bloodType}</span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <FontAwesomeIcon icon={faCalendarAlt} style={{ width: '14px', height: '14px', color: 'gray' }} />
                                <span>{new Intl.DateTimeFormat("en-GB").format(teacher.birthdate)}</span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <FontAwesomeIcon icon={faEnvelope} style={{ width: '14px', height: '14px', color: 'blue' }} />
                                <span>{teacher.email || "-"}</span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <FontAwesomeIcon icon={faPhone} style={{ width: '14px', height: '14px', color: 'green' }} />
                                <span>{teacher.phone || "-"}</span>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* SMALL CARDS */}
                    <div className="flex-1 flex gap-4 justify-between flex-wrap">
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <FontAwesomeIcon icon={faUserCheck} className="w-6 h-6 text-blue-500" style={{ width: '24px', height: '24px' }} />
                          <div className="">
                                <h1 className="text-xl font-semibold">90%</h1>
                                <span className="text-sm text-gray-400">Attendance</span>
                            </div>
                        </div>
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[48%] 2xl:[48%]">
                             <FontAwesomeIcon icon={faBuilding} className="w-6 h-6 text-yellow-500" style={{ width: '24px', height: '24px' }} />
                            <div>
                                <h1 className="text-xl font-semibold">{teacher._count.subjects}</h1>
                                <span className="text-sm text-gray-400">Branches</span>
                            </div>
                        </div>
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:[48%]">
                             <FontAwesomeIcon icon={faBook} className="w-6 h-6 text-purple-500" style={{ width: '24px', height: '24px' }} />
                            <div>
                                <h1 className="text-xl font-semibold">{teacher._count.lessons}</h1>
                                <span className="text-sm text-gray-400">Lessons</span>
                            </div>
                        </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <FontAwesomeIcon icon={faChalkboard} className="w-6 h-6 text-green-500" style={{ width: '24px', height: '24px' }} />
              <div className="">
                <h1 className="text-xl font-semibold">{teacher._count.classes}</h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Teacher&apos;s Schedule</h1>
           <BigCalendarContainer type="teacherId" id={teacher.id} />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-colorPinkLight"  href={`/list/classes?supervisorId=${teacher.id}`}>
              Teacher&apos;s Classes
            </Link>
            <Link className="p-3 rounded-md bg-colorMintGreen" href={`/list/students?teacherId=${teacher.id}`}>
              Teacher&apos;s Students
            </Link>
            <Link className="p-3 rounded-md bg-colorBlueLight" href={`/list/lessons?teacherId=${teacher.id}`}>
              Teacher&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href={`/list/exams?teacherId=${teacher.id}`} >
              Teacher&apos;s Exams
            </Link>
            <Link className="p-3 rounded-md bg-colorPink" href={`/list/assignments?teacherId=${teacher.id}`} >
              Teacher&apos;s Assignments
            </Link>
          </div>
        </div>   
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;