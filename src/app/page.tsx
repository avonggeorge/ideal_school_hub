import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBook, faChalkboardTeacher, faUserShield } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="School Logo" width={50} height={50} />
          <h1 className="ml-2 text-xl font-bold">School Management</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#features" className="hover:text-blue-500">Features</a></li>
            <li><a href="#pricing" className="hover:text-blue-500">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-blue-500">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Simplify School Management for Everyone</h2>
        <p className="text-lg mb-6">Empower administrators, support teachers, engage parents, and inspire students.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-blue-500 px-6 py-3 rounded shadow hover:bg-gray-100">Try for Free</button>
          <button className="bg-blue-700 px-6 py-3 rounded shadow hover:bg-blue-600">Learn More</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-8">Features for Everyone</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded shadow">
            <FontAwesomeIcon icon={faUserShield} className="text-blue-500 text-4xl mb-4" />
            <h4 className="text-xl font-bold mb-2">For Administrators</h4>
            <p>User management, analytics, and reporting tools.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="text-green-500 text-4xl mb-4" />
            <h4 className="text-xl font-bold mb-2">For Teachers</h4>
            <p>Gradebook, assignments, and schedule management.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <FontAwesomeIcon icon={faBook} className="text-yellow-500 text-4xl mb-4" />
            <h4 className="text-xl font-bold mb-2">For Students</h4>
            <p>Personalized dashboards and academic resources.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <FontAwesomeIcon icon={faUsers} className="text-red-500 text-4xl mb-4" />
            <h4 className="text-xl font-bold mb-2">For Parents</h4>
            <p>Attendance tracking and seamless communication.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 bg-white text-center">
        <h3 className="text-3xl font-bold mb-8">What Our Users Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border rounded">
            <p>"This platform transformed how we manage our school!"</p>
            <span className="block mt-4 text-sm font-bold">- School Administrator</span>
          </div>
          <div className="p-6 border rounded">
            <p>"It's so easy to track grades and communicate with students."</p>
            <span className="block mt-4 text-sm font-bold">- Teacher</span>
          </div>
          <div className="p-6 border rounded">
            <p>"I love being able to see my child’s progress anytime."</p>
            <span className="block mt-4 text-sm font-bold">- Parent</span>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-8">Affordable Pricing</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded shadow">
            <h4 className="text-xl font-bold mb-4">Free</h4>
            <p>Basic features for small schools.</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded mt-4">Get Started</button>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h4 className="text-xl font-bold mb-4">Standard</h4>
            <p>Advanced features for medium-sized schools.</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded mt-4">Get Started</button>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h4 className="text-xl font-bold mb-4">Premium</h4>
            <p>All features for large schools.</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded mt-4">Get Started</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-blue-500 text-white text-center py-6">
        <p>Contact us at info@schoolmanagement.com or call +123 456 7890</p>
        <p>&copy; {new Date().getFullYear()} School Management System</p>
      </footer>
    </div>
  );
}
