import { Button, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import { useOutletContext, useParams } from "react-router";
import { Link } from "react-router-dom";
import style from "./index.module.scss";
import { useEffect, useState } from "react";

const DeatilOffers = () => {
  const { id } = useParams();
  const [offers] = useOutletContext();
  const [offer, setOffer] = useState({});
  useEffect(() => {
    setOffer(offers.find((x) => x._id == id));
  }, [id, offers]);

  return (
    <>
      <Container>
        {offer && (
          <Grid>
            <div className={style.card}>
              <div className={style.cardimg}>
                <img src={offer.image} alt={offer.title} />
              </div>
              <div className={style.cardbody}>
                <span>${offer.price}</span>
                <h5>{offer.title}</h5>
                <p>{offer.description}</p>
                <Button variant="contained" color="warning" size="small">
                  <Link to={`/basket`}>Order Now!</Link>
                </Button>
              </div>
            </div>
          </Grid>
        )}
      </Container>
    </>
  );
};

export default DeatilOffers;
