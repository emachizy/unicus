const TeamCard = ({ description, img, imgDesc, name }) => {
  return (
    <div className="p-2 ">
      <div className="w-full">
        <img src={img} alt={imgDesc} className="w-full object-cover" />
      </div>
      <div className="p-4 hover:bg-gray-100 hover:text-green-700 transition-all duration-500">
        <h2 className="text-xl font-semibold text-gray-800 py-2">{name}</h2>
        <p className="text-gray-600 ">{description}</p>
      </div>
    </div>
  );
};

import PropTypes from "prop-types";

TeamCard.propTypes = {
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  imgDesc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TeamCard;
