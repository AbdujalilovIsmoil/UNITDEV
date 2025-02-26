import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { languageJsxTypes, languageTypes } from "typescript/types";

const Services = () => {
  const lang = useSelector(({ language }: { language: string }) => language);

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://api.unitdev.uz/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data.data));
  }, []);

  const service: languageJsxTypes = {
    uz: (
      <h2 className="services__content-title">
        Bizning <span>UnitDev</span> jamoamiz xizmatlari
      </h2>
    ),
    ru: (
      <h2 className="services__content-title">
        Услуги нашей команды <span>UnitDev</span>
      </h2>
    ),
    en: (
      <h2 className="services__content-title">
        Services of our <span>UnitDev</span> team
      </h2>
    ),
  };

  const serviceTex: languageTypes = {
    uz: `Vazifani bajarish uchun siz uni o'rganishingiz va juda katta tajriba 
    yo'lidan o'tishingiz kerak. Mana, biz professional va tez hal qila oladigan
    vazifalar`,
    en: `To complete the task, you need to learn it and have a lot of experience 
    you have to pass through. Here we are professional and quick to solve
    tasks`,
    ru: `
    Чтобы выполнить задание, вам нужно этому научиться и иметь большой опыт.
    Вам придется пройти обучение. Здесь мы профессионально и быстро решаем задачи.
    `,
  };

  type servicesTypes = {
    id: number;
    image_path: string;
    name: languageTypes;
    description: languageTypes;
  };

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__content" data-aos="zoom-in">
          {service[lang]}
          <p className="services__content-text">{serviceTex[lang]}</p>
        </div>
        <ul className="services__list">
          {services.length > 0 &&
            services.map((el: servicesTypes) => {
              return (
                <li className="services__item" data-aos="zoom-in" key={el.id}>
                  <span className="services__square">
                    <img
                      width={40}
                      height={40}
                      loading="lazy"
                      alt="web site"
                      src={`https://api.unitdev.uz${el.image_path}`}
                      className="services__square-icon"
                    />
                  </span>
                  <h3 className="services__item-title">{el.name[lang]}</h3>
                  <p className="services__item-text">{el.description[lang]}</p>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default Services;
