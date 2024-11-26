import { FaLongArrowAltRight } from "react-icons/fa";
const AboutBtn = () => {
  return (
    <div>
      <button className="bg-purple-800 text-white font-bold uppercase px-10 py-4 my-6 rounded-xl flex items-center justify-center gap-2 hover:bg-black transition-all duration-75">
        About Us <FaLongArrowAltRight />{" "}
      </button>
    </div>
  );
};

export default AboutBtn;
