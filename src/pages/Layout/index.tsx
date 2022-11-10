import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { FirstLayout } from "../../components/Layouts/First_Layout";
import { SecondLayout } from "../../components/Layouts/Second_Layout";
import { ThirthLayout } from "../../components/Layouts/Thirth_Layout";
import { Loading } from "../../components/Loading";
import { LoadingContext } from "../../contexts/LoadingContext";
import { IPortifolioInfos, portfRequest } from "../../services/portfRequest";

export interface ILayout {
  portfInfos: IPortifolioInfos;
}

export const LayoutPage = () => {
  const { loading, setLoading } = useContext(LoadingContext);
  const [portfInfos, setPortfInfos] = useState<IPortifolioInfos | null>(null);
  const { portfId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getPortfInfos = async () => {
      setLoading(true);
      try {
        const { data } = await portfRequest(Number(portfId));
        setPortfInfos(data);
      } catch (error) {
        toast.error("This portfolio doesn't exist");
        console.error(error);
        setTimeout(() => {
          navigate("/notFound");
        }, 2000);
      }
      setLoading(false);
    };

    getPortfInfos();
  }, []);

  if (loading) {
    return <Loading />;
  }

  switch (portfInfos?.project.selected_layout) {
    case "layout-1":
      return <FirstLayout portfInfos={portfInfos} />;
    case "layout-2":
      return <SecondLayout portfInfos={portfInfos} />;
    case "layout-3":
      return <ThirthLayout portfInfos={portfInfos} />;
  }

  return null;
};
