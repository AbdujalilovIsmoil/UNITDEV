import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { languageJsxTypes, languageTypes } from "typescript/types";
import { Condition1, Condition2, Condition3 } from "assets/images/svg";

const InformationConditions = () => {
  const { id } = useParams();
  const lang: string = useSelector(
    ({ language }: { language: string }) => language
  );

  const [aboutData, setAboutData] = useState<aboutTypes[]>([]);

  type aboutTypes = {
    id: number;
    course_id: number | string;
    course: {
      id: number;
      image_path: string;
      name: languageTypes;
      small_text: languageTypes;
      description: languageTypes;
    };
    description_en: string;
    description_ru: string;
    description_uz: string;
    image_path: string;
    name_uz: string;
    name_ru: string;
    name_en: string;
    small_text_uz: string;
    small_text_ru: string;
    small_text_en: string;
  };

  useEffect(() => {
    fetch(`https://api.unitdev.uz/api/professions`)
      .then((res) => res.json())
      .then((data) => {
        setAboutData(
          data.data.filter((el: aboutTypes) => el.course_id === Number(id))
        );
      });
  }, []);

  const textLang: languageJsxTypes = {
    uz: (
      <h2 className="information-conditions__content-title">
        Bizning <span>kurslarimiz</span> sizni kutmoqda!
      </h2>
    ),
    ru: (
      <h2 className="information-conditions__content-title">
        Наши <span>курсы</span> ждут вас!
      </h2>
    ),
    en: (
      <h2 className="information-conditions__content-title">
        Our <span>courses</span> are waiting for you!
      </h2>
    ),
  };

  type conditionsItemsObjectTypes = {
    id: number;
    img: string;
    alt: string;
    text: string;
    title: string;
  };

  type conditionsItemsTypes = {
    [key: string]: conditionsItemsObjectTypes[];
  };

  const conditionsItems: conditionsItemsTypes = {
    uz: [
      {
        id: 1,
        img: Condition1,
        title: "Ma’lakali mutaxassislar",
        alt: "malakali mutahasislar icon",
        text: `
          Bizning UnitDev ma'lakali mutaxassislardan bilim va tajriba
          olishingiz mumkin.
        `,
      },
      {
        id: 2,
        img: Condition2,
        title: "Qulay sharoit",
        alt: "Qulay sharoit icon",
        text: `
          Siz UnitDev markazida shinam joy, yaxshi kompyuter vositalaridan
          va kworking zonasidan foydalanishingiz mumkin.
        `,
      },
      {
        id: 3,
        img: Condition3,
        title: "Sifatli ta’lim",
        alt: "Sifatli ta’lim icon",
        text: `
          Bizning UnitDev o'quv markazimizda mukammal o'quv rejasi asosida
          sifatli ta'lim olishingiz mumkin.
        `,
      },
    ],
    ru: [
      {
        id: 1,
        img: Condition1,
        title: "Квалифицированные специалисты",
        alt: "Значок квалифицированных специалистов",
        text: `
          Знания и опыт наших квалифицированных специалистов UnitDev
          вы можете получить
        `,
      },
      {
        id: 2,
        img: Condition2,
        title: "Комфортные условия",
        alt: "Значок удобных условий",
        text: `
          У вас уютное место в центре UnitDev, с хорошей компьютерной базой.
          и вы можете использовать рабочую зону.
        `,
      },
      {
        id: 3,
        img: Condition3,
        title: "Качество образования",
        alt: "Значок качественного образования",
        text: `
          На основе отличной учебной программы в нашем учебном центре UnitDev.
          Вы можете получить качественное образование.
        `,
      },
    ],
    en: [
      {
        id: 1,
        img: Condition1,
        title: "Qualified specialists",
        alt: "Qualified Professionals Badge",
        text: `
          Knowledge and experience of our qualified UnitDev specialists
          you can get
        `,
      },
      {
        id: 2,
        img: Condition2,
        title: "Comfortable conditions",
        alt: "Convenience icon",
        text: `
          You have a cozy place in the UnitDev center, with a good computer base.
          and you can use the work area.
        `,
      },
      {
        id: 3,
        img: Condition3,
        title: "The quality of education",
        alt: "Quality education icon",
        text: `
          Based on the excellent curriculum at our UnitDev training center.
          You can get a quality education.
        `,
      },
    ],
  };

  return (
    <section className="information-conditions">
      <div className="container">
        <div className="information-conditions__content">{textLang[lang]}</div>

        <ul className="information-conditions__list">
          {aboutData.length > 0 &&
            aboutData.map((el: aboutTypes) => {
              return (
                <li
                  key={el.id}
                  data-aos="zoom-in"
                  className="information-conditions__item"
                >
                  <span className="information-conditions__bg">
                    <img
                      width={40}
                      height={40}
                      loading="lazy"
                      alt="malakali mutahasislar icon"
                      src={`https://api.unitdev.uz${el.image_path}`}
                      className="information-conditions__bg-image"
                    />
                  </span>
                  <h2 className="information-conditions__item-title">
                    {lang === "uz"
                      ? el.name_uz
                      : lang === "ru"
                      ? el.name_ru
                      : el.name_en}
                  </h2>
                  <p className="information-conditions__item-text">
                    {lang === "uz"
                      ? el.description_uz
                      : lang === "ru"
                      ? el.description_ru
                      : el.description_en}
                  </p>
                </li>
              );
            })}
        </ul>

        <hr />

        <ul className="information-conditions__lists">
          {conditionsItems[lang].length > 0 &&
            conditionsItems[lang].map((el: conditionsItemsObjectTypes) => {
              return (
                <li
                  key={el.id}
                  className="information-conditions__item"
                  data-aos="zoom-in"
                >
                  <span className="information-conditions__bg">
                    <img
                      width={40}
                      height={40}
                      src={el.img}
                      alt={el.alt}
                      loading="lazy"
                      className="information-conditions__bg-image"
                    />
                  </span>
                  <h2 className="information-conditions__item-title">
                    {el.title}
                  </h2>
                  <p className="information-conditions__item-text">{el.text}</p>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default InformationConditions;
