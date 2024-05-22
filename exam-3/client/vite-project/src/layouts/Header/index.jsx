import { Container } from "@mui/material";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
const Header = () => {
  return (
    <>
      <header id={style["header"]}>
        <Container>
          <nav>
            <div className={style.nav}>
              <h1>COLOSHOP</h1>
            </div>
            <div className={style.links}>
              <Link to={`/`}>Home</Link>
              <Link to={`/addproduct`}>Add Product</Link>
            </div>
            <div className={style.icons}>
              <Link to={`/`}>
                <SearchIcon />
              </Link>
              <Link to={`/`}>
                <PersonIcon />
              </Link>
              <Link to={`/basket`}>
                <ShoppingBasketIcon />
              </Link>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default Header;
