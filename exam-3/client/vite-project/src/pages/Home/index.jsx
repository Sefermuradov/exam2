import style from "./index.module.scss";
import { Button, Container, Grid, TextField } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import InfoIcon from "@mui/icons-material/Info";
import { Link, useOutletContext } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [products, setProducts] = useOutletContext();
  const [query, setQuery] = useState("");
  const filteredProducts = products.filter((x) => {
    return x.title.toLowerCase().trim().includes(query.toLowerCase().trim());
  });
  return (
    <>
      <section id={style["products"]}>
        <Container>
          <div className={style.title}>
            <h1>New Arrivals</h1>
            <p></p>
          </div>
          <div className={style.sort}>
            <ul>
              <li>
                <button>ALL</button>
              </li>
              <li>
                <button>WOMEN'S</button>
              </li>
              <li>
                <button>ACCESSORIES</button>
              </li>
              <li>
                <button>MEN'S</button>
              </li>
            </ul>
          </div>
          <TextField
            id="outlined-basic"
            label="Search"
            onChange={(e) => setQuery(e.target.value)}
            variant="outlined"
          />
          <Grid container spacing={4}>
            {filteredProducts.length > 0 &&
              filteredProducts.map((product) => {
                return (
                  <Grid key={product._id} item xs={12} sm={4} md={3} lg={3}>
                    <div className={style.card}>
                      <div className={style.cardimg}>
                        <img src={product.image} alt={product.title} />
                      </div>
                      <div className={style.cardbody}>
                        <h4>{product.title} </h4>
                        <p>${product.price} </p>
                        <Button size="small" variant="contained">
                          <Link to={`${product._id}`}>
                            <InfoIcon />
                          </Link>
                        </Button>
                        <Button
                          variant="contained"
                          size="small"
                          color="warning"
                        >
                          <Link to={`/basket`}>
                            <ShoppingBasketIcon />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Home;
