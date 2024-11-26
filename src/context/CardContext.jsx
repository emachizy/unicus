// CardContext.js
import { createContext, useContext } from "react";

const CardContext = createContext();

export const CardProvider = ({ children, cards }) => {
  return <CardContext.Provider value={cards}>{children}</CardContext.Provider>;
};

export const useCardContext = () => {
  return useContext(CardContext);
};
