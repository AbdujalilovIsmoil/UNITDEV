import { Carousel } from "assets/images/jpg";

const OurResult = () => {
  return (
    <section className="our-result">
      <div className="our-result__container container">
        <div className="our-result__box" data-aos="fade-up">
          <div className="our-result__content">
            <h2 className="our-result__content-title">
              Bizning <span>natijalarimiz</span> raqamlar ko’rinishida
            </h2>
            <p className="our-result__content-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,.
            </p>
          </div>
          <ul className="our-result__indicators">
            <li className="our-result__indicator">
              <h3 className="our-result__indicator-number">46+</h3>
              <h3 className="our-result__indicator-title">
                Bajarilgan proyektlar
              </h3>
            </li>
            <li className="our-result__indicator">
              <h3 className="our-result__indicator-number">21+</h3>
              <h3 className="our-result__indicator-title">Turli xil sohalar</h3>
            </li>
            <li className="our-result__indicator">
              <h3 className="our-result__indicator-number">54+</h3>
              <h3 className="our-result__indicator-title">Hursand mijozlar</h3>
            </li>
          </ul>
        </div>
        <img
          width={635}
          height={423}
          src={Carousel}
          loading="lazy"
          data-aos="fade-up"
          alt="indicator image"
          title="indicator image"
          className="our-result-image"
        />
      </div>
    </section>
  );
};

export default OurResult;
