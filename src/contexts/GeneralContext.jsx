import { createContext, useState } from "react";

export const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("pt");

  /*-------------------- Skip line --------------------*/

  return (
    <GeneralContext.Provider
      value={{
        setCurrentLanguage,
        currentLanguage,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
