import React from "react";
import "../css/Home.css";
import Products from "./Products";

function Home() {
  return (
    <div className="home">
      <img
        alt="home__banner"
        className="home__banner"
        src={
          "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/TWAR_2021_UPDATED_1500x600_GlowChrisSoloNoGun_TH_Post_1PV_en-US_ARSDE_1Movie._CB664039800_.jpg"
        }
      />
      <div className="home__row">
        <Products
          id={1}
          price={11}
          rating={4}
          image={
            "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/TWAR_2021_UPDATED_1500x600_GlowChrisSoloNoGun_TH_Post_1PV_en-US_ARSDE_1Movie._CB664039800_.jpg"
          }
          title={"book"}
        />

        <Products
          id={1}
          price={11}
          rating={4}
          image={
            "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/TWAR_2021_UPDATED_1500x600_GlowChrisSoloNoGun_TH_Post_1PV_en-US_ARSDE_1Movie._CB664039800_.jpg"
          }
          title={"book"}
        />
      </div>

      <div className="home__row">
        <Products
          id={1}
          price={11}
          rating={4}
          image={
            "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/TWAR_2021_UPDATED_1500x600_GlowChrisSoloNoGun_TH_Post_1PV_en-US_ARSDE_1Movie._CB664039800_.jpg"
          }
          title={"book"}
        />

        <Products
          id={1}
          price={11}
          rating={4}
          image={
            "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/TWAR_2021_UPDATED_1500x600_GlowChrisSoloNoGun_TH_Post_1PV_en-US_ARSDE_1Movie._CB664039800_.jpg"
          }
          title={"book"}
        />

        <Products
          id={1}
          price={11}
          rating={4}
          image={
            "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/TWAR_2021_UPDATED_1500x600_GlowChrisSoloNoGun_TH_Post_1PV_en-US_ARSDE_1Movie._CB664039800_.jpg"
          }
          title={"book"}
        />
      </div>
    </div>
  );
}

export default Home;
