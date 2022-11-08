import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FirstLayout } from "../../components/Layouts/First_Layout";
import { ThirthLayout } from "../../components/Layouts/Thirth_Layout";
import { IPortifolioInfos, portfRequest } from "../../requests/portfRequest";



export const LayoutPage = () => {
  const {portfId} = useParams()
  const [portfInfos, setPortfInfos] = useState<IPortifolioInfos | null>(null)

  useEffect(() => {
    const getPortfInfos = async () => {
      const {data} = await portfRequest(Number(portfId))

      setPortfInfos(data)
    }

      getPortfInfos()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!portfInfos) {
    return <h1>loading</h1>
  }

  console.log(portfInfos);
  

  switch (portfInfos.selectedLayout) {
    case "layout1":
      return <FirstLayout />;
    // case "layout-2":
    //   return <Teste2 children={children} />;
    case "layout-3":
      return <ThirthLayout />;
    default:
      return <><h3>Layout não encontrado</h3></>
  }
};
