const Card = ({ title, description, icon, btn }) => {
  return (
    <div className="group max-w-sm rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:bg-purple-800 text-[#fff] transition-all duration-700">
      <div className="bg-gray-300 text-2xl w-10 rounded-full p-2 my-5 ml-2 text-purple-800 group-hover:bg-white">
        {icon}
      </div>
      <div className="px-4">
        <h2 className="text-xl font-semibold text-gray-800 group-hover:text-white py-2">
          {title}
        </h2>
        <p className="text-gray-600 group-hover:text-white mt-">
          {description}
        </p>
      </div>
      <div className="ml-4">
        <button className="">{btn}</button>
      </div>
    </div>
  );
};

export default Card;
