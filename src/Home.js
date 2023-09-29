import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71QRxZvKnGL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id={12341}
            title="Home & Kitchen"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469391_2584745_758x608_2X_en_US._SY608_CB609304299_.jpg"
          />
          <Product
            id={12342}
            title="Shop school essentials"
            price={99.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/BTS/Fuji_dash_BTS_2X._SY608_CB630084689_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id={12343}
            title="Toys"
            price={59.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469244_2584128_758x608_2X_en_US._SY608_CB609318944_.jpg"
          />
          <Product
            id={12344}
            title="Electronics"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg"
          />
          <Product
            id={12345}
            title="Discover fashion trends"
            price={999.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2023/March/mp_20230219_ff_desktopsinglecategory_desktop_758x608._SY608_CB612846074_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id={12346}
            title="Health & Personal Care"
            price={89.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop2x._SY608_CB627424361_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
