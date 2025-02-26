import { memo } from "react";
import { useSelector } from "react-redux";
import { Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { HeroBackgroundImage, HeroImage2, HeroImage3 } from "assets/images/jpg";
import { languageJsxTypes } from "typescript/types";

const Hero = memo(() => {
  const lang: string = useSelector(
    ({ language }: { language: string }) => language
  );

  const heroData: languageJsxTypes = {
    uz: (
      <h2 className="hero__content-title">
        Kelajagingizni <span>UnitDev</span> bilan yarating!
      </h2>
    ),
    en: (
      <h2 className="hero__content-title">
        Create your own future with <span>Unitdev</span>!
      </h2>
    ),
    ru: (
      <h2 className="hero__content-title">
        Создайте своё будущее с помощью <span>Unitdev</span>!
      </h2>
    ),
  };

  return (
    <section className="hero">
      <h1 className="visually-hidden">UNITDEV</h1>
      <div className="hero__container" data-aos="zoom-in">
        <div className="hero__content">
          <div className="container">{heroData[lang]}</div>
        </div>
        <div className="hero-galeries">
          <Swiper
            loop
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
          >
            <SwiperSlide>
              <li
                className="hero-galeries-image"
                style={{ backgroundImage: `url(${HeroBackgroundImage})` }}
              ></li>
            </SwiperSlide>
            <SwiperSlide>
              <li
                className="hero-galeries-image"
                style={{ backgroundImage: `url(${HeroImage2})` }}
              ></li>
            </SwiperSlide>
            <SwiperSlide>
              <li
                className="hero-galeries-image"
                style={{ backgroundImage: `url(${HeroImage3})` }}
              ></li>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
});

export default Hero;
