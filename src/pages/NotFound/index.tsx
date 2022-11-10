import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import background from "../../assets/img/wallpaper02.jpg";
import { Loading } from "../../components/Loading";
import { LoadingContext } from "../../contexts/LoadingContext";
import StyledNotFound from "./styled";
const NotFoundPage = () => {
  const { loading } = useContext(LoadingContext);
  if (loading) {
    return <Loading />;
  }

  return (
    <StyledNotFound>
      <div>
        <h1>404 Not Found</h1>
        <Link to="/">Return to home</Link>
      </div>
      <img src={background} />
    </StyledNotFound>
  );
};

export default NotFoundPage;
