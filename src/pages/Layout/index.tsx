import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { FirstLayout } from "../../components/Layouts/First_Layout";
import { SecondLayout } from "../../components/Layouts/Second_Layout";
import { ThirthLayout } from "../../components/Layouts/Thirth_Layout";
import { Loading } from "../../components/Loading";
import { IPortifolioInfos, portfRequest } from "../../services/portfRequest";
import NotFoundPage from "../NotFound";

export interface ILayout {
  portfInfos: IPortifolioInfos
}

export const LayoutPage = () => {
  const { portfId } = useParams();
  const [portfInfos, setPortfInfos] = useState<IPortifolioInfos | null>(null);

  useEffect(() => {
    const getPortfInfos = async () => {
      try {
        const { data } = await portfRequest(Number(portfId));

        setPortfInfos(data);
      } catch (error) {
        toast.error("This portfolio doesn't exist")
        console.error(error)
      } 
    };

    getPortfInfos();
  }, []);

  if (!portfInfos) {
    return <Loading />;
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
          <NotFoundPage />
        </>
      );
  }
};
