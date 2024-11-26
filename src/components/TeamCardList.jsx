import { useCardContext } from "../context/CardContext";
import TeamCard from "./TeamCard";

const TeamCardList = () => {
  const cards = useCardContext();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {cards.map((card, index) => (
        <TeamCard key={index} {...card} />
      ))}
    </div>
  );
};

export default TeamCardList;
