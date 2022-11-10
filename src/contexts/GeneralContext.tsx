import React, { createContext, useState } from "react";

interface IGeneralProvider {
  children: React.ReactNode
}

interface IGeneralContext {
  currentLanguage: string;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export const GeneralContext = createContext<IGeneralContext>({} as IGeneralContext);

const GeneralProvider = ({ children }: IGeneralProvider) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>("pt");

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
