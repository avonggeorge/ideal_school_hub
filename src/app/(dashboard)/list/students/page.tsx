import Pagination from "@/components/Pagination";
import FormContainer from "@/components/FormContainer";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";
import { faFilter, faSort, faEye } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { Class, Prisma, Student } from "@prisma/client";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";


type StudentList = Student & { class: Class };
const StudentListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { sessionClaims } =  await auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;


const columns = [
    {
        header: "Info",
        accessor: "info",
    },
    {
        header: "Student ID",
        accessor: "studentID",
        className: "hidden md:table-cell",
    },
    {
        header: "Grade",
        accessor: "grade",
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
     ...(role === "admin"
      ? [
          {
            header: "Actions",
            accessor: "action",
          },
        ]
      : []),
];


  const renderRow = (item: StudentList) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-colorMintGreen"
    >
      <td className="flex items-center gap-4 p-4">

   {item.img ? (
  <Image
    src={item.img}
    alt=""
    width={40}
    height={40}
    className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
  />
) : (
  <i
    className={`fas fa-user-circle text-gray-500 md:hidden xl:block w-10 h-10 rounded-full`}
    style={{ fontSize: "40px" }}
  ></i>
)}

        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item.class.name}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.username}</td>
      <td className="hidden md:table-cell">{item.class.name[0]}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-colorBlueLight">
              <FontAwesomeIcon icon={faEye} style={{ width: '16px', height: '16px' }} />
            </button>
          </Link>
          {role === "admin" && (
            <FormContainer table="student" type="delete" id={item.id}/>
          )}
        </div>
      </td>
    </tr>
  );


  const { page, ...queryParams } = searchParams;

  const p = page ? parseInt(page) : 1;

  // URL PARAMS CONDITION

  const query: Prisma.StudentWhereInput = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "teacherId":
            query.class = {
              lessons: {
                some: {
                  teacherId: value,
                },
              },
            };
            break;
          case "search":
            query.name = { contains: value, mode: "insensitive" };
            break;
          default:
            break;
        }
      }
    }
  }

  const [data, count] = await prisma.$transaction([
    prisma.student.findMany({
      where: query,
      include: {
        class: true,
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.student.count({ where: query }),
  ]);

    return (
         <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Students</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                        <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-colorBlueLight">
                            <FontAwesomeIcon icon={faFilter} style={{ width: '14px', height: '14px' }} />
                        </button>
                     <button className="w-8 h-8 flex items-center justify-center rounded-full bg-colorBlueLight">
                            <FontAwesomeIcon icon={faSort} style={{ width: '14px', height: '14px' }} />
                        </button>
                    {role === "admin" && (
              <FormContainer table="student" type="create"/>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={data} />
      {/* PAGINATION */}
      <Pagination  page={p} count={count}/>
    </div>
  );
};

export default StudentListPage;