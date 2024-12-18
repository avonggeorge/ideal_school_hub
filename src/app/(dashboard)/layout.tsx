import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
// import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons/faGraduationCap";
import Link from "next/link";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <FontAwesomeIcon icon={faGraduationCap} size="3x" color="#2B92E4" />
          <span className="hidden lg:block text-sm md:text-base text-funky font-bold">IdealSchools</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#EFF2F8] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
