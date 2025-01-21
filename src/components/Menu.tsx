import { currentUser } from "@clerk/nextjs/server";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserTie,
  faUserGraduate,
  faUsers,
  faBook,
  faChalkboard,
  faChalkboardTeacher,
  faFileCircleQuestion,
  faFileLines,
  faChartLine,
  faClipboardCheck,
  faCalendarAlt,
  faBullhorn,
  faUser,
  faEnvelope,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <FontAwesomeIcon icon={faHouse} size="2x"/>,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FontAwesomeIcon icon={faUserTie} size="2x"/>,
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: <FontAwesomeIcon icon={faUserGraduate} size="2x"/>,
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: <FontAwesomeIcon icon={faUsers} size="2x"/>,
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: <FontAwesomeIcon icon={faBook} size="2x"/>,
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: <FontAwesomeIcon icon={faChalkboard} size="2x"/>,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" />,
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: <FontAwesomeIcon icon={faFileCircleQuestion} size="2x" />,
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FontAwesomeIcon icon={faFileLines} size="2x" />,
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FontAwesomeIcon icon={faChartLine} size="2x" />,
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FontAwesomeIcon icon={faClipboardCheck} size="2x" />,
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FontAwesomeIcon icon={faCalendarAlt} size="2x"/>,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FontAwesomeIcon icon={faEnvelope} size="2x" />,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FontAwesomeIcon icon={faBullhorn} size="2x" />,
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <FontAwesomeIcon icon={faUser} size="3x" />,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FontAwesomeIcon icon={faCog} size="3x" />,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FontAwesomeIcon icon={faSignOutAlt} size="3x" />,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = async () => {
  const user = await currentUser();
   const role = user?.publicMetadata.role as string;
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-500 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label} // Use a unique identifier
                  className="flex items-center justify-center lg:justify-start gap-4 text-slate-500 py-2 md:px-2 rounded-md hover:bg-colorMintGreenLight"
                >
                  <span>{item.icon}</span>
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
