import { Link } from "react-router-dom";
import style from "./index.module.scss";
import { Container } from "@mui/material";
const Header = () => {
  return (
    <>
      <header id={style["header"]}>
        <Container>
          <nav>
            <div className={style.nav}>
              <h1>EATWELL</h1>
            </div>
            <div className={style.links}>
              <Link to={`/`}>Home</Link>
              <Link to={`/addoffers`}>Add Offers</Link>
              <Link to={`basket`}>Basket</Link>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default Header;
