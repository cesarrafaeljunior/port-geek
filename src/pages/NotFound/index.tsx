import { useNavigate, Link } from "react-router-dom";
import background from "../../assets/img/wallpaper02.jpg";
import StyledNotFound from "./styled";
const NotFoundPage = () => {
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
