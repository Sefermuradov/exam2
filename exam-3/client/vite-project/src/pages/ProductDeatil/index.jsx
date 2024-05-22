import { useOutletContext, useParams } from "react-router";
import { Button, Container, Grid } from "@mui/material";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
const ProductDetail = () => {
  const { id } = useParams();
  const [products] = useOutletContext();
  const product = products.find((x) => x._id === id);
  return (
    <>
      <section id={style.detail}>
        <Container>
          <div className={style.card}>
            <div className={style.cardimg}>
              <img src={product?.image} alt={product?.title} />
            </div>
            <div className={style.cardbody}>
              <h4>{product?.title} </h4>
              <p>${product?.price} </p>
              <Button variant="contained" size="small" color="warning">
                <Link to={`/`}>Back</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProductDetail;
