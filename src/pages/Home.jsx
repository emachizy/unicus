import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HeaderImg from "../assets/Images/HeaderImg.jpg";
import Img1 from "../assets/Images/Img1.jpg";
import quoteImg from "../assets/Images/quoteImg.jpg";

// Accordian
import accordionImg from "../assets/Images/accordion-img.jpg";
import accordionImg1 from "../assets/Images/accordion-img1.jpg";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { IoIosPhotos } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { TiDeviceDesktop } from "react-icons/ti";
import { SiMarketo } from "react-icons/si";
import { GrUserSettings } from "react-icons/gr";
import { FaDiagramSuccessor } from "react-icons/fa6";
import { TiMediaFastForward } from "react-icons/ti";
import { GiSkills } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa";
import { LuQuote } from "react-icons/lu";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import AboutBtn from "../components/AboutBtn";
import AOS from "aos";
import "aos/dist/aos.css";
import { CardProvider } from "../context/CardContext";
// import Card from "../components/Card";
import CardList from "../components/CardList";
import TeamCardList from "../components/TeamCardList";
import { AccordionCustomStyles } from "../components/AccordionCustomStyles";
import {
  Carousel,
  IconButton,
  Progress,
  Typography,
} from "@material-tailwind/react";
import { TestimonialCard } from "../components/TestimonialCard";
import Footer from "../components/footer/Footer";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  const teamCardData = [
    {
      name: "John Doe",
      img: "../asset/Images/Img1.jpg",
      title: "Cloud Services",
      description:
        "Deliver plug commerce with dynamic is expertise. leading edge products with business models",
    },
    {
      name: "John Doe",
      img: { Img1 },
      title: "Cloud Services",
      description:
        "Deliver plug commerce with dynamic is expertise. leading edge products with business models",
    },
    {
      name: "John Doe",
      img: { Img1 },
      title: "Cloud Services",
      description:
        "Deliver plug commerce with dynamic is expertise. leading edge products with business models",
    },
  ];

  const cardData = [
    {
      title: "Cloud Services",
      description:
        "Deliver plug commerce with dynamic is expertise. leading edge products with business models",
      icon: <GrUserSettings />,
      btn: <AboutBtn />,
    },
    {
      title: "Web Development",
      description:
        "Deliver plug commerce with dynamic is expertise. leading edge products with business models",
      icon: <SiMarketo />,
      btn: <AboutBtn />,
    },
    {
      title: "IT Management",
      description:
        "Deliver plug commerce with dynamic is expertise. leading edge products with business models",
      icon: <TiDeviceDesktop />,
      btn: <AboutBtn />,
    },
    {
      title: "IT Management",
      description:
        "Deliver plug commerce with dynamic is expertise. leading edge products with business models",
      icon: <TiDeviceDesktop />,
      btn: <AboutBtn />,
    },
    {
      title: "IT Management",
      description:
        "Deliver plug commerce with dynamic is expertise. leading edge products with business models",
      icon: <TiDeviceDesktop />,
      btn: <AboutBtn />,
    },
    {
      title: "IT Management",
      description:
        "Deliver plug commerce with dynamic is expertise. leading edge products with business models",
      icon: <TiDeviceDesktop />,
      btn: <AboutBtn />,
    },
  ];
  return (
    <>
      <div
        className="bg-gradient-to-tr from-gray-900 to-gray-900 h-full bg-cover bg-no-repeat animate-zoomIn bg-center w-full relative"
        data-aos="fade-up"
      >
        <img
          src={HeaderImg}
          alt=""
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div
          className="container mx-auto text-white text-center pt-36 pb-28 md:px-0 px-4"
          data-aos="fade-up"
        >
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            navigation
            // pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="transition-all duration-1000 delay-1000"
          >
            <SwiperSlide>
              <div>
                <div className="px-10">
                  <h3
                    className="text-2xl pb-5 uppercase font-bold"
                    data-aos="slide-right"
                  >
                    Best IT{" "}
                    <span className="text-sm font-bold border-2 p-4 rounded-full">
                      We have top IT Experts
                    </span>
                  </h3>
                  <h1
                    className="text-4xl font-bold uppercase"
                    data-aos="slide-left"
                  >
                    Support and solution
                  </h1>
                  <p className="text-xs pt-6 font-bold" data-aos="zoom-in-down">
                    Professionally repurpose intuitive total linkage after
                    timely mindshare. <br /> Credibly coordinate reliable
                    collaboration and idea-sharing after turnkey catalysts for
                    change.
                  </p>
                  <div className="flex justify-center gap-5 items-center">
                    <AboutBtn data-aos="fade-up" />
                    <AboutBtn data-aos="fade-up" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="px-1">
                <h3 className="text-2xl pb-5 uppercase font-bold">
                  Team of{" "}
                  <span className="text-sm font-bold border-2 p-4 rounded-full">
                    Highly qualified Engineers
                  </span>
                </h3>
                <h1 className="text-4xl font-bold uppercase">
                  legend and pro engineers
                </h1>
                <p className="text-xs pt-6 font-bold">
                  Professionally repurpose intuitive total linkage after timely
                  mindshare. <br /> Credibly coordinate reliable collaboration
                  and idea-sharing after turnkey catalysts for change
                </p>
                <div className="flex justify-center gap-5 items-center">
                  <AboutBtn data-aos="fade-up" />
                  <AboutBtn data-aos="fade-up" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="px-10">
                <h3 className="text-2xl pb-5 uppercase font-bold">
                  Top IT{" "}
                  <span className="text-sm font-bold border-2 p-4 rounded-full">
                    Provide free consultation
                  </span>
                </h3>
                <h1 className="text-4xl font-bold uppercase">
                  Support and Management
                </h1>
                <p className="text-xs pt-6 font-bold">
                  Professionally repurpose intuitive total linkage after timely
                  mindshare. <br /> Credibly coordinate reliable collaboration
                  and idea-sharing after turnkey catalysts for change.
                </p>
                <div className="flex justify-center gap-5 items-center">
                  <AboutBtn data-aos="fade-up" />
                  <AboutBtn data-aos="fade-up" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="px-10">
                <h3 className="text-2xl pb-5 uppercase font-bold">
                  Best IT{" "}
                  <span className="text-sm font-bold border-2 p-4 rounded-full">
                    We have top IT Experts
                  </span>
                </h3>
                <h1 className="text-4xl font-bold">Support and Management</h1>
                <p className="text-xs pt-6">
                  Professionally repurpose intuitive total linkage after timely
                  mindshare. <br /> Credibly coordinate reliable collaboration
                  and idea-sharing after turnkey catalysts for change.
                </p>
                <div className="flex justify-center gap-5 items-center">
                  <AboutBtn data-aos="fade-up" />
                  <AboutBtn data-aos="fade-up" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <section className="bg-gray-200">
        <div className="md:flex md:w-4/5 gap-6 mx-auto ">
          <div
            className="bg-white p-4 mt-[-60px] z-10 rounded"
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div className="my-6">
              <TiDeviceDesktop className="text-6xl text-purple-900 text-center" />
              <h1 className="text-2xl font-bold pt-4 capitalize">
                Development service
              </h1>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ab
            tempore est saepe possimus iusto provident sint animi odit
            temporibus, ut optio accusantium consequuntur non debitis earum
            corrupti sit numquam obcaecati fugit eligendi vitae repudiandae
            laborum unde! Numquam ab unde esse accusantium praesentium eos
            aliquam voluptatum inventore, quia, iure ducimus!
          </div>
          <div
            className="bg-white p-4 mt-[-60px] z-10 rounded"
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div className="my-6">
              <SiMarketo className="text-6xl text-purple-900 text-center" />
              <h1 className="text-2xl font-bold pt-4 capitalize">
                Marketing service
              </h1>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            repellendus commodi quis! Nobis quidem omnis, recusandae dolor et
            cupiditate ratione blanditiis? Nobis tenetur officia numquam
            accusamus sint debitis vero ad harum recusandae beatae? Quasi
            quisquam recusandae totam maxime? Adipisci cumque cum maxime quasi
            consequatur aliquid optio numquam! Nulla, commodi minima!
          </div>
          <div
            className="bg-white p-4 mt-[-60px] z-10 rounded"
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div className="my-6">
              <GrUserSettings className="text-6xl text-purple-900 text-center" />
              <h1 className="text-2xl font-bold pt-4 capitalize">
                consulting service
              </h1>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aperiam
            facere illum! Autem, error ut sapiente iusto, numquam provident
            repudiandae at nobis reprehenderit, eos ullam maxime mollitia.
            Quibusdam blanditiis earum architecto itaque repellendus nostrum
            tenetur, veniam nulla aut, non veritatis! Perspiciatis, facere nobis
            obcaecati harum voluptatum numquam accusamus laborum. Debitis!
          </div>
        </div>
        {/* Get it best */}
        <div className="md:flex gap-14 w-4/5 mx-auto pt-20">
          <div
            className="flex-initial md:w-[40%] rounded"
            data-aos="slide-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <img
              src={Img1}
              alt="image"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div
            className="flex-initial md:w-[60%]"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div className="flex items-center gap-2">
              <IoIosPhotos className="text-xl text-purple-900" />
              <h4 className="text-lg text-purple-800">Get best IT solution</h4>
            </div>
            <h1 className="text-6xl font-bold">
              Trust Our Best IT Solution For Your Business
            </h1>
            <p className="text-gray-500 py-4">
              Compellingly mesh cross-platform portals through functional human
              capital world-class architectures for orthogonal initiatives.
              Assertively benchmark visionary quality vectors after covalent
              e-tailers. Intrinsicly enhance 24/7 users and supply process
            </p>
            <div className="bg-white px-2 py-4 flex items-center gap-4 md:w-3/5 rounded">
              <div className="bg-gray-100 p-4 rounded">
                <FaPhoneVolume className="text-purple-900 text-5xl" />
              </div>
              <div>
                <p className="text-gray-500">24 HOURS SERVICE AVAILABLE</p>
                <a
                  href="tel:+2348165257534"
                  className="text-lg text-gray-800 font-bold"
                >
                  Call Us: +2348165257534
                </a>
              </div>
            </div>
            <div className="text-white">
              <AboutBtn />
            </div>
          </div>
        </div>
      </section>
      {/* services section */}
      <section>
        <div
          className="flex flex-col justify-center items-center uppercase"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <p className="text-purple-800 text-center py-4 uppercase">
            Our Latest Services
          </p>
          <h1 className="text-5xl font-bold text-center pt-2 p-4 w-[40%]">
            What Kind of Services We are Offering
          </h1>
        </div>
        <div>
          <CardProvider cards={cardData}>
            <div
              className="md:w-4/5 mx-auto min-h-screen flex justify-center items-center "
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <CardList className="hover:bg-purple-800 text-[#fff]" />
            </div>
          </CardProvider>
        </div>
      </section>
      <section>
        <div className="scroller bg-purple-800 my-10 overflow-hidden text-white py-10 text-2xl">
          <ul className="tag-list scroller__inner flex space-x-4 animate-scrolling whitespace-nowrap">
            <li className="flex items-center justify-center gap-2">
              <div className="text-6xl bg-purple-200 p-4 text-black">
                <FaDiagramSuccessor />
              </div>
              <div>
                <h1 className="text-4xl">NAN</h1>
                <p className="text-xl">Successful Projects</p>
              </div>
            </li>
            <li>*</li>
            <li className="flex items-center justify-center gap-2">
              <div className="text-6xl bg-purple-200 p-4 text-black">
                <TiMediaFastForward />
              </div>
              <div>
                <h1 className="text-4xl">NAN</h1>
                <p className="text-xl">Media Activities</p>
              </div>
            </li>
            <li>*</li>
            <li className="flex items-center justify-center gap-2">
              <div className="text-6xl bg-purple-200 p-4 text-black">
                <GiSkills />
              </div>
              <div>
                <h1 className="text-4xl">NAN</h1>
                <p className="text-xl">Skilled Experts</p>
              </div>
            </li>
            <li>*</li>
            <li className="flex items-center justify-center gap-2">
              <div className="text-6xl bg-purple-200 p-4 text-black">
                <RiCustomerService2Fill />
              </div>
              <div>
                <h1 className="text-4xl">NAN</h1>
                <p className="text-xl">Happy Clients</p>
              </div>
            </li>
            <li>*</li>
            <li>TAILWIND</li>
            <li>*</li>
            <li>REACT</li>
            <li>*</li>
          </ul>
        </div>
      </section>
      <section>
        <div
          className="flex flex-col justify-center items-center uppercase"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <p className="text-purple-800 text-center py-4 capitalize">
            Great Team Members
          </p>
          <h1 className="text-5xl font-bold text-center pt-2 p-4 w-[40%]">
            We Have Expert Team
          </h1>
        </div>
        <CardProvider cards={teamCardData}>
          <div className="md:w-4/5 mx-auto min-h-screen flex justify-center items-center">
            <TeamCardList img={Img1} />
          </div>
        </CardProvider>
      </section>
      <section className="accordion md:w-4/5 md:ml-auto p-5">
        <div className="md:flex items-center justify-between gap-2">
          <div className="ml-[-200px] md:relative flex-initial py-6 md:py-0 md:w-[60%]">
            <div
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <img
                src={accordionImg}
                alt=""
                className="md:w-[700px] -z-10 md:my-0 my-10"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <img
                src={accordionImg1}
                alt=""
                className="md:w-[400px] bg-white p-2 md:ml-24 md:mt-[-70px] rounded z-50 md:relative"
              />
            </div>
          </div>
          <div
            className="flex-initial md:w-[50%]"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div>
              <div className="flex items-center gap-2">
                <IoIosPhotos className="text-xl text-white" />
                <h4 className="text-lg text-white pt-2">
                  Get best IT solution
                </h4>
              </div>
              <h1 className="text-4xl font-bold text-white pt-2 pb-2">
                Trust Our Best IT Solution For Your Business
              </h1>
            </div>
            <AccordionCustomStyles />
          </div>
        </div>
      </section>
      <section>
        <div className="md:w-4/5 mx-auto md:flex gap-4 my-20">
          <div className="flex-initial md:w-[50%] px-4">
            <div className="flex items-center gap-2">
              <IoIosPhotos className="text-xl text-purple-900" />
              <h4 className="text-lg text-purple-800 uppercase">
                Get best IT solution
              </h4>
            </div>
            <div className="uppercase">
              <h1 className="md:text-6xl text-xl font-bold">
                Trust Our Best IT Solution For Your Business
              </h1>
              <p className="text-gray-500 py-4">
                Compellingly mesh cross-platform portals through functional
                human capital world-class architectures for orthogonal
                initiatives. Assertively benchmark visionary quality vectors
                after covalent e-tailers. Intrinsicly enhance 24/7 users and
                supply process
              </p>
            </div>
            <div>
              <div className="w-full">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <Typography color="blue-gray" variant="h6" className="my-2">
                    Business Security
                  </Typography>
                  <Typography color="blue-gray" variant="h6">
                    60%
                  </Typography>
                </div>
                <Progress value={60} color="purple" />
              </div>
              <div className="w-full">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <Typography color="blue-gray" variant="h6" className="my-2">
                    Career Development
                  </Typography>
                  <Typography color="blue-gray" variant="h6">
                    88%
                  </Typography>
                </div>
                <Progress value={88} color="purple" />
              </div>
              <div className="w-full">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <Typography color="blue-gray" variant="h6" className="my-2">
                    Business Innovation
                  </Typography>
                  <Typography color="blue-gray" variant="h6">
                    90%
                  </Typography>
                </div>
                <Progress value={90} color="purple" />
              </div>
            </div>
          </div>
          <div className="flex-initial md:w-[50%] md:mt-0 mt-20">
            <div className="flex gap-4">
              <img
                src={Img1}
                alt=""
                className="w-72 object-cover rounded-3xl"
              />
              <img
                src={Img1}
                alt=""
                className="w-72 object-cover rounded-3xl"
              />
            </div>
            <div className="flex justify-center items-center -mt-10">
              <img
                src={Img1}
                alt=""
                className="w-72 object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get a quote */}
      <section className="">
        <div
          className="bg-gradient-to-tr from-gray-900 to-gray-900 h-full bg-cover bg-center w-full relative z-10"
          data-aos="fade-up"
        >
          <img
            src={quoteImg}
            alt=""
            className="w-full h-full object-cover absolute mix-blend-overlay"
          />
          <div
            className="md:flex justify-between md:w-4/5 mx-auto text-white text-center pt-36 pb-28 md:px-0 px-4"
            data-aos="fade-up"
          >
            <div className="uppercase">
              <h6 className="font-bold">
                We are here to answer your questions 247
              </h6>
              <h1 className="text-6xl">Need a consultation?</h1>
            </div>
            <div>
              <button className="bg-purple-700 py-4 px-10 hover:bg-black transition-all duration-300 flex justify-center items-center gap-2 font-bold rounded ">
                Get a Quote <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Great team */}
      <section className="team bg-gradient-to-r from-blue-gray-300 to-gray-100 pt-16">
        <div className="flex flex-col justify-center items-center uppercase">
          <p className="text-purple-800 text-center py-4 uppercase font-bold">
            Great Team Members{" "}
          </p>
          <h1 className="text-5xl font-bold text-center pt-2 p-4 w-[40%]">
            We Have Expert Team{" "}
          </h1>
        </div>
        <div className="md:w-4/5 mx-auto md:flex gap-10 px-4">
          <div>
            <div>
              <TiDeviceDesktop className="text-6xl flex items-center justify-center p-4 bg-white rounded-full mx-auto mb-5 text-purple-800" />
              <h1 className="text-4xl text-center font-bold">Medicine Help</h1>
              <h6 className="text-xl text-center text-gray-500 py-4">
                Extensible for web iterate process before meta services impact
                with olisticly enable client.
              </h6>
            </div>
          </div>
          <div className="my-20 shadow-md bg-blue-gray-100 opacity-50 rounded">
            <div>
              <TiDeviceDesktop className="text-6xl text-purple-800 flex items-center justify-center p-4 bg-white rounded-full mx-auto mb-5" />
              <h1 className="text-4xl text-center font-bold">Medicine Help</h1>
              <h6 className="text-xl text-center text-black py-4">
                Extensible for web iterate process before meta services impact
                with olisticly enable client.
              </h6>
            </div>
          </div>
          <div className="">
            <div>
              <TiDeviceDesktop className="text-6xl text-purple-800 flex items-center justify-center p-4 bg-white rounded-full mx-auto mb-5" />
              <h1 className="text-4xl text-center font-bold">Medicine Help</h1>
              <h6 className="text-xl text-center text-gray-500 py-4">
                Extensible for web iterate process before meta services impact
                with olisticly enable client.
              </h6>
            </div>
          </div>
          <div className="mt-20 shadow-md bg-blue-gray-100 opacity-50 rounded">
            <div>
              <div>
                <TiDeviceDesktop className="text-6xl text-purple-800 flex items-center justify-center p-4 bg-white rounded-full mx-auto mb-5" />
              </div>
              <h1 className="text-4xl text-center font-bold">Medicine Help</h1>
              <h6 className="text-xl text-center text-black py-4">
                Extensible for web iterate process before meta services impact
                with olisticly enable client.
              </h6>
            </div>
          </div>
        </div>
      </section>
      {/* customer feedback */}
      <section>
        <div className="md:w-4/5 mx-auto my-20">
          <div className="">
            <div className="flex items-center gap-2">
              <IoIosPhotos className="text-xl text-purple-900" />
              <h4 className="text-lg text-purple-800 p-2">Our Best Review’s</h4>
            </div>
            <h1 className="text-6xl font-bold pb-4">Customer’s Feedbacks</h1>
          </div>
          <div>
            <Carousel
              className="rounded-xl"
              prevArrow={({ handlePrev }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handlePrev}
                  className="flex mr-10 bg-purple-800 px-12 !absolute top-10 right-20 -translate-y-2/4 hover:text-black hover:bg-white transition-all duration-500"
                >
                  <div className="flex gap-2 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                    <h1>PREV</h1>
                  </div>
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handleNext}
                  className="flex bg-purple-800 px-12 !absolute top-10 !right-4 -translate-y-2/4 z-10 hover:text-black hover:bg-white transition-all duration-500"
                >
                  <div className="flex gap-2 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                    <h3>NEXT</h3>
                  </div>
                </IconButton>
              )}
            >
              <div className="mt-24 p-10 bg-gray-500 shadow-2xl w-4/5 mx-auto rounded">
                <div className="rounded -mt-16 bg-purple-800 text-white w-16 flex items-center justify-center py-4">
                  <LuQuote className="text-2xl" />
                </div>
                <TestimonialCard />
              </div>
              <div className="mt-24 p-10 bg-gray-500 shadow-2xl w-4/5 mx-auto">
                <div className="rounded -mt-16 bg-purple-800 text-white w-16 flex items-center justify-center py-4">
                  <LuQuote className="text-2xl" />
                </div>
                <TestimonialCard />
              </div>
              <div className="mt-24 p-10 bg-gray-500 shadow-2xl w-4/5 mx-auto">
                <div className="rounded -mt-16 bg-purple-800 text-white w-16 flex items-center justify-center py-4">
                  <LuQuote className="text-2xl" />
                </div>
                <TestimonialCard />
              </div>
              <div className="mt-24 p-10 bg-gray-500 shadow-2xl w-4/5 mx-auto">
                <div className="rounded -mt-16 bg-purple-800 text-white w-16 flex items-center justify-center py-4">
                  <LuQuote className="text-2xl" />
                </div>
                <TestimonialCard />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
