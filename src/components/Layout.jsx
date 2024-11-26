import { NavLink, Outlet } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { PiAddressBookFill } from "react-icons/pi";
const Layout = () => {
  return (
    <>
      <nav className="w-4/5 mx-auto">
        <div className="flex p-10 border-b-2">
          <div className="logo flex justify-between border-r-2 gap-10 pr-5">
            <h2 className="text-2xl font-bold">
              Unicus<span className="text-purple-800">Tech</span>
            </h2>
            <div className="flex gap-4">
              <div className="flex items-center justify-center">
                <FaPhone className="text-purple-800 text-4xl" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Call anytime 24/7</p>
                <a href="tel:+2348165257534" className="text-xl font-bold">
                  08165257534
                </a>
              </div>
            </div>
          </div>
          <div className="email flex border-r-2 px-5 gap-4">
            <div className="flex items-center justify-center">
              <MdEmail className="text-purple-800 text-4xl" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Mail us for support</p>
              <a
                href="mailto:emachi2011@gmail.com"
                className="text-xl font-bold"
              >
                emachi2011@gmail.com
              </a>
            </div>
          </div>
          <div className="address flex px-5 gap-4">
            <div className="flex items-center justify-center">
              <PiAddressBookFill className="text-purple-800 text-4xl" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Office Address</p>
              <p className="font-bold">Ogba Lagos</p>
            </div>
          </div>
        </div>
        {/* NavLink */}
        <div className="nav flex gap-16 text-lg py-4">
          <NavLink to="/" className="text-black">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/pages">Pages</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
