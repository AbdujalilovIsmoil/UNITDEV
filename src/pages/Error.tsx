import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { languageTypes } from "typescript/types";
import { ErrorBackground } from "assets/images/jpg";

const Error = () => {
  const lang = useSelector(({ language }: { language: string }) => language);

  const errorTitle: languageTypes = {
    en: "404 Page Not Found",
    uz: "404 sahifa topilmadi",
    ru: "404 Страница не найдена",
  };

  const errorText: languageTypes = {
    uz: "Uzur siz topilmagan manzilga o'tib oldingiz.. Bosh sahifaga o'tib olishingiz mumkin",
    en: "Sorry, you went to an address that was not found. You can go to the home page",
    ru: "Извините, вы зашли по адресу, который не был найден. Вы можете перейти на главную страницу",
  };

  const errorLink: languageTypes = {
    en: "Go to homepage",
    ru: "Вернуться на домашнюю страницу",
    uz: "Bosh sahifaga o'ting",
  };

  return (
    <section className="error">
      <div
        className="error__background"
        style={{ backgroundImage: `url(${ErrorBackground})` }}
      >
        <div className="container">
          <h1 className="error-title">{errorTitle[lang]}</h1>
        </div>
      </div>

      <div className="container">
        <div className="error__content">
          <h2 className="error__content-status-code">404</h2>
          <h3 className="error__content-title">{errorTitle[lang]}</h3>
          <p className="error__content-text">{errorText[lang]}</p>
          <Link to="/" className="error__content-btn" role="button">
            {errorLink[lang]}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
