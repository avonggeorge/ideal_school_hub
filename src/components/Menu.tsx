import { role } from "@/lib/data";
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
        icon: <FontAwesomeIcon icon={faHouse} />,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FontAwesomeIcon icon={faUserTie} />,
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: <FontAwesomeIcon icon={faUserGraduate} />,
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: <FontAwesomeIcon icon={faUsers} />,
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: <FontAwesomeIcon icon={faBook} />,
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: <FontAwesomeIcon icon={faChalkboard} />,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: <FontAwesomeIcon icon={faFileCircleQuestion} />,
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FontAwesomeIcon icon={faFileLines} />,
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FontAwesomeIcon icon={faChartLine} />,
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FontAwesomeIcon icon={faClipboardCheck} />,
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FontAwesomeIcon icon={faCalendarAlt} />,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FontAwesomeIcon icon={faEnvelope} />,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FontAwesomeIcon icon={faBullhorn} />,
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
        icon: <FontAwesomeIcon icon={faUser} />,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FontAwesomeIcon icon={faCog} />,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FontAwesomeIcon icon={faSignOutAlt} />,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((section) => (
        <div className="flex flex-col gap-2" key={section.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {section.title}
          </span>
          {section.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.href} // Use a unique identifier
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
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
