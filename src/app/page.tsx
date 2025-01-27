import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>IdealSchoolHub</title>
        <meta name="description" content="A unique approach to learning foreign languages online." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
      <img src="/ishub.png" alt="School Logo" className="h-16 w-auto" />
        <nav className="space-x-6 text-gray-700">
          <a href="#" className="hover:text-purple-600">Services</a>
          <a href="#" className="hover:text-purple-600">About Us</a>
          <a href="#" className="hover:text-purple-600">Pricing</a>
          <a href="#" className="hover:text-purple-600">Careers</a>
          <a href="#" className="hover:text-purple-600">Blog</a>
        </nav>
        <Link href="/sign-in">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">Get Started</button>
        </Link>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto my-10 ">
        <div className="bg-[#fff5f1] px-6 lg:px-16 py-10 rounded-3xl">

          <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
            <div className="flex flex-col gap-5 lg:gap-10">
              <p className="text-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
              Empower Administrators, <br className="lg:flex hidden"/> Support Teachers, <br className="lg:flex hidden" /> Engage Parents,
              and Inspire Students!
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-500">
                A simplified school management system <br  className="lg:flex hidden"/> optimizing academic standards
              </p>
              <Link href="/sign-in">
                <button className="btn btn-sm lg:btn-lg bg-[#524fd5] text-white rounded-full border-none w-36 lg:w-44 capitalize">Get Started</button>
              </Link>
 
            </div>
            <img src="/hero.png" alt="" />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto py-20">
        <p className="text-base lg:text-xl font-medium text-gray-500 text-center">
          WHY CHOOSE US
        </p>
        <p className=" text-3xl lg:text-5xl font-semibold text-gray-500 text-center mt-3">
          Our Values
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20">
          <div className="flex flex-col gap-5 items-center">
            <img src="/v1.svg" alt="v1" />
            <p className="text-gray-300 text-2xl font-semibold">Streamlined Administration</p>
            <p className="text-gray-500 text-center">
            Automates routine tasks, <br /> allowing administrators to focus on <br /> strategic initiatives.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <img src="/v2.svg" alt="v1" />
            <p className="text-gray-300 text-2xl font-semibold">Enhanced Communication</p>
            <p className="text-gray-500 text-center">
            Facilitates better communication <br /> among administrators, teachers, parents, and students <br /> for a collaborative environment.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <img src="/v3.svg" alt="v1" />
            <p className="text-gray-300 text-2xl font-semibold">Data-Driven Insights</p>
            <p className="text-gray-500 text-center">
            Provides analytics <br /> and reporting to improve decision-making and <br /> track student performance.
            </p>
          </div>
        </div>
      </div>

      {/* Key Person Section */}
      <div className="container mx-auto py-20">
        <p className="text-base lg:text-xl font-medium text-gray-500 uppercase">
          Testimonies
        </p>
        <p className="text-3xl lg:text-5xl font-semibold text-gray-500  mt-3">
          What some of our clients say
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-10 lg:py-20">
          <div className="flex flex-col gap-5 ">
            <img src="/t1.svg" alt="v1" />
            <p className="text-gray-300 text-2xl font-semibold">David Thompson, School Principal</p>
            <div className="flex items-center gap-2">
              {/* <img src="/italy.svg" alt="itersfgjds" /> */}
              <p className="text-gray-500">
              "Our school’s administrative tasks have become a breeze <br /> 
              since we started using this system. The automation has freed <br /> 
              up so much time, allowing me to focus more on enhancing our students' educational experiences. Highly recommended!"
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 ">
            <img src="/t2.svg" alt="v1" />
            <p className="text-gray-300 text-2xl font-semibold">Sarah Martinez, Parent</p>
            <div className="flex items-center gap-2">
              {/* <img src="/spain.svg" alt="itersfgjds" /> */}
              <p className="text-gray-500">
              "As a parent, I love how easily I can communicate with teachers <br />
              and stay updated on my child's progress. The app keeps me <br />
              informed with real-time notifications, making it a fantastic tool for involved parenting!"
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 ">
            <img src="/t3.svg" alt="v1" />
            <p className="text-gray-300 text-2xl font-semibold">Jesse Lee, Teacher</p>
            <div className="flex items-center gap-2">
              {/* <img src="/uk.svg" alt="itersfgjds" /> */}
              <p className="text-gray-500">
              "This school management system has transformed how I manage <br />
              my classes. The user-friendly interface makes lesson planning <br />
              and grading so much easier. I appreciate having all my resources <br />
              in one place, which allows me to spend more time engaging with my students!"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Student Section */}
      <div className="container mx-auto ">
        <p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
          Top Studying
        </p>
        <p className="text-gray-800 text-3xl lg:text-5xl font-medium capitalize">
          A students say
        </p>
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
          <img src="/student.svg" alt="" />
          <div className="flex flex-col gap-5 items-start ml-36">
            <p className="text-gray-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Ryan Kim</p>
            <div className="flex items-center gap-2">
              <img src="/uk.svg" alt="itersfgjds" />
            </div>
            <p className="text-gray-300 text-base sm:text-lg md:text-2xl lg:text-3xl">
            "This app has made my school life so much easier! I can easily access my assignments, check my grades, and
             communicate with my teachers all in one place. It helps me stay organized and on top of my responsibilities.
              I love using it!"
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='container mx-auto flex flex-col gap-5 items-center justify-center py-20'>
        <p className='text-gray-600 text-xl md:text-2xl lg:text-4xl font-medium text-center'>Get a free trial today</p>
        <p className='text-gray-400 text-base sm:text-lg lg:text-2xl font-medium text-center'>Please feel free to request a 30days trial</p>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 items-center mt-5">
          <input type="text" className='px-5 py-5 rounded-full w-72 lg:w-96 outline-none bg-[#f8fafe]' placeholder='enter a email' />
          <button className='btn btn-sm lg:btn-lg bg-[#524fd5] btn-lg rounded-full border-none'>Send</button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="container mx-auto my-10">
        <div className="bg-[#f8fafe] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10 px-10 py-10 rounded-3xl items-center justify-center ">
          <div className="flex flex-col items-center lg:items-start gap-5">
            <img src="/ideal.png" alt="footer logo" className="h-26 w-auto" rounded-lg />
            <p className="text-gray-600 text-center lg:text-start">ALX Africa, Holberton Engineers, NGN +2341234567890</p>
          </div>
          <div className="text-gray-600 flex flex-col items-center lg:items-start gap-5">
            <p className="text-xl font-medium">Company</p>
            <p className="text-base">Careers</p>
            <p className="text-base">Teachers</p>
            <p className="text-base">Support</p>
            <p className="text-base">Contact</p>
          </div>
          <div className="text-gray-600 flex flex-col items-center lg:items-start gap-5">
            <p className="text-xl font-medium">Product</p>
            <p className="text-base">Courses</p>
            <p className="text-base">Pricing</p>
            <p className="text-base">Blog</p>
          </div>
          <div className="text-gray-600 flex flex-col items-center lg:items-start gap-5">
            <p className="text-xl font-medium">Legal</p>
            <p className="text-base">Terms & Conditions</p>
            <p className="text-base">Privacy policy</p>
          </div>
          {/* <div className="flex items-center gap-5">
            <BsFacebook className="text-3xl text-gray-500"/>
            <BsTwitter className="text-3xl text-gray-500"/>
            <BsInstagram className="text-3xl text-gray-500"/>
          </div> */}
        </div>
      </div>

    </div>
  );
}
