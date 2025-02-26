import { Autoplay } from "swiper/modules";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  TeacherImage1,
  TeacherImage2,
  TeacherImage3,
  TeacherImage4,
  TeacherImage5,
  TeacherImage6,
  TeacherImage7,
} from "assets/images/png";
import { languageTypes } from "typescript/types";

const Teacher = () => {
  const lang = useSelector(({ language }: { language: string }) => language);

  const team: languageTypes = {
    en: "UnitDev Team",
    uz: "UnitDev jamoasi",
    ru: "Команда UnitDev",
  };

  const ourTeam: languageTypes = {
    en: "Our team",
    uz: "Bizning jamoa",
    ru: "Наша команда",
  };

  type teamsObjectTypes = {
    id: number;
    job: string;
    name: string;
    image: string;
  };

  type teamsTypes = {
    [key: string]: teamsObjectTypes[];
  };

  const teams: teamsTypes = {
    uz: [
      {
        id: 1,
        image: TeacherImage3,
        job: "Frontend dasturchi",
        name: "Abdujalilov Ismoil",
      },
      {
        id: 2,
        image: TeacherImage2,
        name: "Toshmatov Jamshid",
        job: "Backend dasturchi",
      },
      {
        id: 3,
        image: TeacherImage1,
        name: "Shukurov Tursunboy",
        job: "SMM & QA",
      },
      {
        id: 4,
        image: TeacherImage4,
        name: "Merganov Ziyodullo",
        job: "Biznes analitik",
      },
      {
        id: 5,
        image: TeacherImage5,
        job: "DevOps dasturchi",
        name: "Ergashev Hayitboy",
      },
      {
        id: 6,
        image: TeacherImage6,
        job: "FullStack dasturchi",
        name: "Avazbek Ne'matov",
      },
      {
        id: 7,
        image: TeacherImage7,
        job: "Backend dasturchi",
        name: "Abdurasulov G'olibjon",
      },
    ],
    en: [
      {
        id: 1,
        image: TeacherImage3,
        job: "Frontend developer",
        name: "Abdudjalilov Ismoil",
      },
      {
        id: 2,
        image: TeacherImage2,
        name: "Toshmatov Jamshid",
        job: "Backend developer",
      },
      {
        id: 3,
        image: TeacherImage1,
        name: "Shukurov Tursunboy",
        job: "SMM & QA",
      },
      {
        id: 4,
        image: TeacherImage4,
        job: "Business analyst",
        name: "Merganov Ziyodilla",
      },

      {
        id: 5,
        image: TeacherImage5,
        job: "DevOps developer",
        name: "Ergashev Khayitboy",
      },
      {
        id: 6,
        image: TeacherImage6,
        job: "FullStack developer",
        name: "Avazbek Nematov",
      },
      {
        id: 7,
        image: TeacherImage7,
        job: "Backend developer",
        name: "Abdurasulov Golibjon",
      },
    ],
    ru: [
      {
        id: 1,
        image: TeacherImage3,
        job: "Фронтенд разработчик",
        name: "Абдужалилов Исмаил",
      },
      {
        id: 2,
        image: TeacherImage2,
        name: "Ташматов Джамшид",
        job: "Бэкэнд разработчик",
      },
      {
        id: 3,
        image: TeacherImage1,
        name: "Шукуров Турсунбой",
        job: "СММ и ОК",
      },
      {
        id: 4,
        image: TeacherImage4,
        job: "Бизнес аналитик",
        name: "Мерганов Зиедулло",
      },

      {
        id: 5,
        image: TeacherImage5,
        job: "DevOps разработчик",
        name: "Эргашев Хайитбой",
      },
      {
        id: 6,
        image: TeacherImage6,
        job: "Full Stack разработчик",
        name: "Авазбек Нематов",
      },
      {
        id: 7,
        image: TeacherImage7,
        job: "Бэкэнд разработчик",
        name: "Абдурасулов ​​Галибжон",
      },
    ],
  };

  return (
    <section className="teacher" id="team" data-aos="fade-up">
      <div className="bg-dark">
        <div className="teacher__container container">
          <div className="teacher__content">
            <span className="teacher__content-top-title"> {team[lang]}</span>
            <h2 className="teacher__content-center-title">{ourTeam[lang]}</h2>
          </div>
          <Swiper
            loop
            autoplay={{
              delay: 2000,
            }}
            slidesPerView={4}
            spaceBetween={30}
            modules={[Autoplay]}
            className="teacher__cards"
            breakpoints={{
              1100: {
                slidesPerView: 4,
              },
              900: {
                slidesPerView: 3,
              },
              576: {
                slidesPerView: 2,
              },
              300: {
                slidesPerView: 1,
              },
            }}
          >
            {teams[lang]?.length > 0 &&
              teams[lang]?.map((el: teamsObjectTypes) => {
                return (
                  <SwiperSlide className="teacher__card" key={el.id}>
                    <img
                      width="238"
                      height="231"
                      src={el.image}
                      loading="lazy"
                      className="teacher__card-image"
                      alt="UNITDEV teacher Julian Jameson Profession"
                    />
                    <footer className="teacher__footer">
                      <h3 className="teacher__footer-title">{el.name}</h3>
                      <span className="teacher__footer-job">{el.job}</span>
                    </footer>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Teacher;
