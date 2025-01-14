import Announcements from "@/components/Announcements";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import StudentAttendanceCard from "@/components/StudentAttendanceCard";
import FormContainer from "@/components/FormContainer";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBuilding, faCalendarAlt, faFilter, faPhone, faTint, faEnvelope, faChalkboard, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Class, Student } from "@prisma/client";
import { notFound } from "next/navigation";
import { Suspense } from "react";


const SingleStudentPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const { sessionClaims } = await auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;

  const student:
    | (Student & {
        class: Class & { _count: { lessons: number } };
      })
    | null = await prisma.student.findUnique({
    where: { id },
    include: {
      class: { include: { _count: { select: { lessons: true } } } },
    },
  });

  if (!student) {
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
              {student.img ? (
  <Image
    src={student.img}
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
              <h1 className="text-xl font-semibold">{student.name + " " + student.surname} </h1>
              {role === "admin" && (
                  <FormContainer table="student" type="update" data={student} />
                )}
              </div>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="flex item-center justify-between gap-2 flex-wrap text-xs font-medium">
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <FontAwesomeIcon icon={faTint} style={{ width: '24px', height: '24px', color: 'red' }} />
                                <span>{student.bloodType}</span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <FontAwesomeIcon icon={faCalendarAlt} style={{ width: '24px', height: '24px', color: 'gray' }} />
                                <span>{new Intl.DateTimeFormat("en-GB").format(student.birthdate)}</span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <FontAwesomeIcon icon={faEnvelope} style={{ width: '14px', height: '14px', color: 'blue' }} />
                                <span>{student.email || "-"}</span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <FontAwesomeIcon icon={faPhone} style={{ width: '24px', height: '24px', color: 'green' }} />
                                <span>{student.phone || "-"}</span>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* SMALL CARDS */}
                    <div className="flex-1 flex gap-4 justify-between flex-wrap">
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <FontAwesomeIcon icon={faUserCheck} className="w-6 h-6 text-blue-500" style={{ width: '24px', height: '24px' }} />

                           <Suspense fallback="loading...">
                <StudentAttendanceCard id={student.id} />
              </Suspense>
                        </div>
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[48%] 2xl:[48%]">
                             <FontAwesomeIcon icon={faBuilding} className="w-6 h-6 text-yellow-500" style={{ width: '24px', height: '24px' }} />
                            <div className="">
                                <h1 className="text-xl font-semibold">{student.class.name.charAt(0)}th</h1>
                                <span className="text-sm text-gray-400">Grade</span>
                            </div>
                        </div>
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:[48%]">
                             <FontAwesomeIcon icon={faBook} className="w-6 h-6 text-purple-500" style={{ width: '24px', height: '24px' }} />
                           <div className="">
                                <h1 className="text-xl font-semibold">{student.class._count.lessons}</h1>
                                <span className="text-sm text-gray-400">Lessons</span>
                            </div>
                        </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <FontAwesomeIcon icon={faChalkboard} className="w-6 h-6 text-green-500" style={{ width: '14px', height: '14px' }} />
              <div className="">
                <h1 className="text-xl font-semibold">{student.class.name}</h1>
                <span className="text-sm text-gray-400">Class</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4">
          <h1>Student&apos;s Schedule</h1>
          <BigCalendarContainer type="classId" id={student.class.id} />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
             <Link className="p-3 rounded-md bg-colorPink"  href={`/list/lessons?classId=${student.class.id}`}>
              Student&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md bg-colorMintGreen"  href={`/list/teachers?classId=${student.class.id}`}>
              Student&apos;s Teachers
            </Link>
            <Link className="p-3 rounded-md bg-pink-50"  href={`/list/exams?classId=${student.class.id}`}
            >
              Student&apos;s Exams
            </Link>
            <Link className="p-3 rounded-md bg-colorPinkLight"  href={`/list/exams?classId=${student.class.id}`}
            >
              Student&apos;s Assignments
            </Link>
            <Link className="p-3 rounded-md bg-colorBlueLight" href={`/list/results?studentId=${student.id}`}>
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