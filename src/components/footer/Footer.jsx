import { SlLocationPin } from "react-icons/sl";
import { TbClockHour4 } from "react-icons/tb";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-purple-900 ">
      <section className="relative md:flex justify-around items-center border-b border-white pb-5">
        <div className="text-white px-10 py-6 flex justify-center gap-2">
          <div className="bg-opacity-50 bg-gray-600 px-6 rounded md:flex items-center justify-center">
            <SlLocationPin className="text-4xl text-white" />
          </div>
          <div>
            <h2 className="uppercase">Office Address</h2>
            <p className="text-gray-500">
              259 Hilton Street, MK 256 <br /> North, United State
            </p>
          </div>
        </div>
        <div className="text-white px-10 py-6 md:flex justify-center gap-2">
          <div className="bg-opacity-50 bg-gray-600 px-6 rounded flex items-center justify-center">
            <TbClockHour4 className="text-4xl text-white" />
          </div>
          <div>
            <h2 className="uppercase">Working Hours</h2>
            <p className="text-gray-500">Weekdays 8am - 22pm</p>
            <p className="text-gray-500">Weekends 10am - 8pm</p>
          </div>
        </div>
        <div className="text-white px-10 py-6 md:flex items- justify-center gap-2">
          <div className="bg-opacity-50 bg-gray-600 px-6 rounded flex items-center justify-center">
            <LiaPhoneVolumeSolid className="text-4xl text-white" />
          </div>
          <div>
            <h2 className="uppercase">Contact Us</h2>
            <p className="text-gray-500">24 HOURS SERVICE AVAILABLE</p>
            <a
              href="tel:+2348165257534"
              className="text-lg text-gray-500 font-bold"
            >
              Call Us: +2348165257534
            </a>
          </div>
        </div>

        {/* Vertical Dividers */}
        <div className="md:flex hidden">
          <div className="absolute top-0 left-1/3 w-px h-full bg-gray-500"></div>
          <div className="absolute top-0 left-2/3 w-px h-full bg-gray-500"></div>
        </div>
      </section>
      <section className="grid md:grid-cols-4 gap-10 w-4/5 mx-auto py-10">
        <div>
          <h2 className="text-xl text-white font-bold">About us</h2>
          <p className="text-gray-500 flex-initial">
            Intrinsicly evisculate emerging cutting edge scenarios redefine
            future-proof e-markets demand line
          </p>
        </div>
        <div>
          <h2 className="text-xl text-white font-bold">Links</h2>
          <div className="text-gray-500 transition-all duration-500 flex flex-col gap-2">
            <NavLink to="/about" className="hover:text-purple-200">
              About us
            </NavLink>
            <NavLink to="/mission" className="hover:text-purple-200">
              Our Mission
            </NavLink>
            <NavLink to="/team" className="hover:text-purple-200">
              Meet the Team
            </NavLink>
            <NavLink to="/projects" className="hover:text-purple-200">
              Our Projects
            </NavLink>
            <NavLink to="/contact" className="hover:text-purple-200">
              Contact Us
            </NavLink>
          </div>
        </div>
        <div>
          <h2 className="text-xl text-white font-bold">Explore</h2>
        </div>
        <div>
          <h2 className="text-xl text-white font-bold">Official maps</h2>
        </div>
      </section>
      <section className="bg-purple-700 py-10">
        <p className="text-gray-500 text-center">
          Copyright &#xA9; 2022 <span className="text-white">EmTech</span> . All
          right reserved <span className="text-white">UNICUS TECHNOLOGY</span>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
