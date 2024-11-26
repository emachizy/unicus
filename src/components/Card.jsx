const Card = ({ title, description, icon, btn }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:bg-purple-800 text-[#fff]">
      <div className="bg-gray-300 text-2xl w-10 rounded-full p-2 my-5 ml-2 text-purple-800">
        {icon}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 py-5">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      <button>{btn}</button>
    </div>
  );
};

export default Card;
