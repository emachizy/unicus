import HeaderImg from "../assets/Images/HeaderImg.jpg";
import Img1 from "../assets/Images/Img1.jpg";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
        className="bg-gradient-to-tr from-gray-800 to-gray-950 h-full bg-cover bg-center w-full relative"
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
                  <div className="mx-auto">
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
                <div>
                  <AboutBtn className="mx-auto" />
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
                <AboutBtn />
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
                <AboutBtn />
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
          <div className="flex-initial md:w-[40%] rounded">
            <img
              src={Img1}
              alt="image"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="flex-initial md:w-[60%]">
            <div className="flex items-center gap-2">
              <IoIosPhotos className="text-xl text-purple-900" />
              <h4 className="text-lg text-purple-800">Get best It solution</h4>
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
            <AboutBtn />
          </div>
        </div>
      </section>
      {/* services section */}
      <section>
        <div className="flex flex-col justify-center items-center">
          <p className="text-purple-800 text-center py-4 capitalize">
            Our Latest Services
          </p>
          <h1 className="text-5xl font-bold text-center pt-2 p-4 w-[40%]">
            What Kind of Services We are Offering
          </h1>
        </div>
        <div>
          <CardProvider cards={cardData}>
            <div className="md:w-4/5 mx-auto min-h-screen flex justify-center items-center">
              <CardList />
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
        <div className="flex flex-col justify-center items-center">
          <p className="text-purple-800 text-center py-4 capitalize">
            Great Team Members
          </p>
          <h1 className="text-5xl font-bold text-center pt-2 p-4 w-[40%]">
            We Have Expert Team
          </h1>
        </div>
        <CardProvider cards={teamCardData}>
          <div className="md:w-4/5 mx-auto min-h-screen flex justify-center items-center">
            <TeamCardList />
          </div>
        </CardProvider>
      </section>
    </>
  );
};

export default Home;
