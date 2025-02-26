import axios from "axios";
import { get } from "lodash";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { languageTypes } from "typescript/types";

const InformationBackground = () => {
  const { id } = useParams();
  const [data, setData] = useState<dataTypes[]>([]);
  const lang: string = useSelector(
    ({ language }: { language: string }) => language
  );

  useEffect(() => {
    axios
      .get(`https://api.unitdev.uz/api/courses/${id}`)
      .then((data) => setData([get(data, "data.data", [])]));
  }, []);

  type dataTypes = {
    id: number;
    image_path: string;
    name: languageTypes;
    small_text: languageTypes;
    description: languageTypes;
  };

  const writeText: languageTypes = {
    uz: "Kursga yozilish",
    ru: "Запишитесь на курс",
    en: "Sign up for the course",
  };

  return (
    <>
      {data?.length > 0 &&
        data.map((el: dataTypes) => {
          return (
            <section
              key={el.id}
              className="information-hero"
              style={{
                backgroundImage: `url(https://api.unitdev.uz${el?.image_path})`,
              }}
            >
              <div className="container">
                <div className="information-hero__content">
                  <h1 className="information-hero__content-heading">
                    {el?.name[lang]}
                  </h1>
                  <h2 className="information-hero__content-regular-heading">
                    {el.small_text[lang]}
                  </h2>
                  <p className="information-hero__content-text">
                    {el?.description[lang || "uz"]}
                  </p>
                </div>

                {/* <ul className="information-hero__list">
                  <li className="information-hero__item">
                    <h2 className="information-hero__item-key">pg:</h2>
                    <h3 className="information-hero__item-value">12+</h3>
                  </li>
                  <li className="information-hero__item">
                    <h2 className="information-hero__item-key">
                      Darslari soni:
                    </h2>
                    <h3 className="information-hero__item-value">28</h3>
                  </li>
                </ul> */}

                <Link to="/pages/course-form" className="information-hero-link">
                  {writeText[lang]}
                </Link>
              </div>
            </section>
          );
        })}
    </>
  );
};

export default InformationBackground;
