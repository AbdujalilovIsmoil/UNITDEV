import axios from "axios";
import { get } from "lodash";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { languageTypes } from "typescript/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { UnitDevFooterIntro } from "assets/images/svg";

const Course = () => {
  const lang: string = useSelector(
    ({ language }: { language: string }) => language
  );

  type dataTypes = {
    id: number;
    image_path: string;
    name: languageTypes;
    small_text: languageTypes;
    description: languageTypes;
  };

  const [data, setData] = useState<dataTypes[]>([]);

  useEffect(() => {
    axios
      .get("https://api.unitdev.uz/api/courses")
      .then((data) => setData(get(data, "data.data", [])));
  }, []);

  const courseTitleData: languageTypes = {
    ru: "Курсы",
    uz: "Kurslar",
    en: "Courses",
  };

  const infoMessage: languageTypes = {
    uz: "Ma'lumot",
    ru: "Информация",
    en: "Information",
  };

  return (
    <section className="course" id="courses" data-aos="fade-down">
      <div className="bg-dark">
        <div className="course__container container">
          <h2 className="course-title">{courseTitleData[lang]}</h2>
          <Swiper
            loop
            spaceBetween={20}
            slidesPerView={2}
            modules={[Autoplay]}
            className="course-boxes"
            autoplay={{ delay: 5000 }}
            breakpoints={{
              1060: {
                slidesPerView: 2,
              },
              360: {
                slidesPerView: 1,
              },
            }}
          >
            {data.length > 0 &&
              data.map((el: dataTypes) => {
                return (
                  <SwiperSlide key={el.id}>
                    <li
                      className="course-box"
                      style={{
                        backgroundImage: `url(${`https://api.unitdev.uz${el.image_path}`})`,
                      }}
                    >
                      <div className="course-box__content">
                        {/* <span className="course-box__content-format">
                          WEB-DLRip 1080px
                        </span> */}
                        <div className="course-box__padding">
                          <h3 className="course-box__content-title">
                            {el.name[lang]}
                          </h3>
                          <h3 className="course-box__content-regular-title">
                            {el.small_text[lang]}
                          </h3>
                          <p className="course-box__content-text">
                            {el.description[lang]}
                          </p>
                        </div>

                        <footer className="course-box__footer">
                          <div className="course-box__padding">
                            <Link to="/">
                              <img
                                height="36"
                                width="135"
                                alt="UNITDEV"
                                loading="lazy"
                                title="UNITDEV logo"
                                src={UnitDevFooterIntro}
                                className="course-box__footer-logo"
                              />
                            </Link>
                          </div>

                          <Link
                            role="button"
                            to={`${`/pages/information/${el.id}`}`}
                            className="course-box__footer-information"
                          >
                            {infoMessage[lang]}
                          </Link>
                        </footer>
                      </div>
                    </li>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Course;
