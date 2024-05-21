import style from "./index.module.scss";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useOutletContext } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Home = () => {
  const [offers, setOffers] = useOutletContext();
  console.log(offers);
  return (
    <>
      <section id={style["eatwell"]}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div className={style.hero}>
                <h2>Welcome To EatWell</h2>
                <p>Come and eat well with our delicious & healthy foods.</p>
                <button>Reservation</button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section id={style.swiper}>
        <container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div className={style.title}>
                <h4>OUR OFFERS</h4>
                <h2>Our Offer This Summer</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </Grid>
          </Grid>
        </container>
        <Swiper
          style={{ marginTop: "70px" }}
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {offers.length > 0 &&
            offers.map((q) => {
              return (
                <SwiperSlide key={q._id}>
                  <div className={style.card}>
                    <div className={style.cardimg}>
                      <img src={q.image} alt={q.title} />
                    </div>
                    <div className={style.cardbody}>
                      <span>${q.price}</span>
                      <h5>{q.title}</h5>
                      <p>{q.description}</p>
                      <Button variant="contained" color="warning" size="small">
                        <Link to={`/basket`}>Order Now!</Link>
                      </Button>
                      <Button variant="contained" size="small">
                        <Link to={`/${q._id}`}>detail</Link>
                      </Button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </section>
    </>
  );
};

export default Home;
