import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FirstLayout } from "../../components/Layouts/First_Layout";
import { SecondLayout } from "../../components/Layouts/Second_Layout";
import { ThirthLayout } from "../../components/Layouts/Thirth_Layout";
import { IPortifolioInfos, portfRequest } from "../../services/portfRequest";

export interface ILayout {
  portfInfos: IPortifolioInfos
}

export const LayoutPage = () => {
  const { portfId } = useParams();
  const [portfInfos, setPortfInfos] = useState<IPortifolioInfos | null>(null);

  useEffect(() => {
    const getPortfInfos = async () => {
      const { data } = await portfRequest(Number(portfId));

      setPortfInfos(data);
    };

    getPortfInfos();
  }, []);

  if (!portfInfos) {
    return <h1>loading</h1>;
  }
  
  switch (portfInfos.project.selected_layout) {
    case "layout-1":
      return <FirstLayout portfInfos={portfInfos} />;
    case "layout-2":
      return <SecondLayout portfInfos={portfInfos} />;
    case "layout-3":
      return <ThirthLayout portfInfos={portfInfos} />;
    default:
      return (
        <>
          <h3>Layout não encontrado</h3>
        </>
      );
  }
};
