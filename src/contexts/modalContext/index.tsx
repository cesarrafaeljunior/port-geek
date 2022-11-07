import { createContext, ReactNode, useState } from "react";

export const ModalContext = createContext<IModalProviderData>({} as IModalProviderData)

interface iModalProvider {
    children: ReactNode
}

interface IModalProviderData {
    isOpenModalLogin: boolean,
    isOpenModalRegister: boolean,
    setIsOpenModalLogin: (value: boolean) => void,
    setIsOpenModalRegister: (value: boolean) => void,
}

export  function ModalProvider({ children }: iModalProvider) {
    const [isOpenModalLogin, setIsOpenModalLogin] = useState<boolean>(false)
    const [isOpenModalRegister, setIsOpenModalRegister] = useState<boolean>(false)

    return(
        <ModalContext.Provider value ={{isOpenModalLogin,
            isOpenModalRegister,
            setIsOpenModalLogin,
            setIsOpenModalRegister
            }}>
        
                                  
            {children}

        </ModalContext.Provider>
       
    )
}