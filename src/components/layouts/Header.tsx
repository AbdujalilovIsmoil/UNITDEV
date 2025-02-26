import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Down, UnitDevIntro } from "assets/images/svg";
import { CHANGE_LANGUAGE_ACTION } from "store/actions";
import { Link, Route, Routes } from "react-router-dom";
import { Helmet, Hero, InformationBackground } from "components";
import { Language1, Language2, Language3 } from "assets/images/png";

const Header = () => {
  type isMenuButtonsType = {
    bars: boolean;
    times: boolean;
  };

  type langDataTypes = {
    flag: string;
    lang: string;
  };

  const dispatch = useDispatch();
  const lang: string = localStorage.getItem("lang") || "uz";
  const [language] = useState<string>(lang);
  const [isMenuButtons, setIsMenuButtons] = useState<isMenuButtonsType>({
    bars: true,
    times: false,
  });
  const [isOpenLanguageModal, setIsLanguageModal] = useState<boolean>(true);
  const [langData, setLangData] = useState<langDataTypes>({
    flag: Language2,
    lang: language || "uz",
  });

  const changeLang = (lang: string) => {
    localStorage.setItem("lang", lang);
    switch (lang) {
      case "uz":
        dispatch(CHANGE_LANGUAGE_ACTION("uz"));
        setLangData({
          lang,
          flag: Language2,
        });
        break;
      case "ru":
        dispatch(CHANGE_LANGUAGE_ACTION("ru"));
        setLangData({
          lang,
          flag: Language1,
        });
        break;
      case "en":
        dispatch(CHANGE_LANGUAGE_ACTION("en"));
        setLangData({
          lang,
          flag: Language3,
        });
        break;
    }
  };

  useEffect(() => {
    switch (lang) {
      case "uz":
        setLangData({
          lang,
          flag: Language2,
        });
        break;
      case "ru":
        setLangData({
          lang,
          flag: Language1,
        });
        break;
      case "en":
        setLangData({
          lang,
          flag: Language3,
        });
        break;
    }
  }, []);

  const toggleMenuButtons = (bool: boolean) => {
    if (bool) {
      setIsMenuButtons({
        bars: false,
        times: true,
      });
    } else {
      setIsMenuButtons({
        bars: true,
        times: false,
      });
    }
  };

  type headerDataObjectTypes = {
    id: number;
    href: string;
    name: string;
  };

  type headerDataTypes = {
    [key: string]: headerDataObjectTypes[];
  };

  const headerData: headerDataTypes = {
    uz: [
      {
        id: 1,
        href: "#about",
        name: "Biz haqimizda",
      },
      {
        id: 2,
        href: "#courses",
        name: "Kurslar haqida",
      },
      {
        id: 3,
        href: "#team",
        name: "Jamoamiz",
      },
      {
        id: 4,
        href: "#services",
        name: "Xizmatlarimiz",
      },
      {
        id: 5,
        href: "#contacts",
        name: "Kontaktlar",
      },
    ],
    ru: [
      {
        id: 1,
        href: "#about",
        name: "О нас",
      },
      {
        id: 2,
        href: "#courses",
        name: "О курсах",
      },
      {
        id: 3,
        href: "#team",
        name: "Наша команда",
      },
      {
        id: 4,
        href: "#services",
        name: "Наши сервисы",
      },
      {
        id: 5,
        href: "#contacts",
        name: "Контакты",
      },
    ],
    en: [
      {
        id: 1,
        href: "#about",
        name: "About us",
      },
      {
        id: 2,
        href: "#courses",
        name: "Course",
      },
      {
        id: 3,
        href: "#team",
        name: "Team",
      },
      {
        id: 4,
        href: "#services",
        name: "Serivices",
      },
      {
        id: 5,
        href: "#contacts",
        name: "Contact",
      },
    ],
  };

  const renderHeaderData: headerDataObjectTypes[] = headerData[lang];

  type renderHeaderDataTypes = {
    id: number;
    href: string;
    name: string;
  };

  return (
    <div className="bg-dark">
      <Helmet lang={langData.lang} />
      <header className="header">
        <div className="header__container container">
          <Link className="header__link" to="/">
            <img
              height="46"
              width="173"
              loading="lazy"
              alt="UNITDEV logo"
              src={UnitDevIntro}
              title="UNITDEV logo"
              className="header__link-intro"
            />
          </Link>
          <nav className={`nav ${isMenuButtons.times && "nav--open"}`}>
            <ul className="nav__list">
              {renderHeaderData.length > 0 &&
                renderHeaderData.map((el: renderHeaderDataTypes) => {
                  return (
                    <li
                      key={el.id}
                      className="nav__item"
                      onClick={() => toggleMenuButtons(false)}
                    >
                      <a className="nav__item-link" href={el.href}>
                        {el.name}
                      </a>
                    </li>
                  );
                })}
            </ul>
            <ul className="nav-medias">
              <li className="nav-medias__item">
                <a href="https://t.me/unitdev_uz" target="_blank">
                  <svg
                    width="25"
                    height="25"
                    fill="none"
                    viewBox="0 0 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="black"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.8248 4.12314C21.083 4.01411 21.3656 3.9765 21.6432 4.01424C21.9208 4.05198 22.1832 4.16368 22.4032 4.33772C22.6232 4.51177 22.7926 4.74178 22.8939 5.00384C22.9952 5.26589 23.0247 5.5504 22.9792 5.82775L20.6095 20.2498C20.3797 21.6409 18.8584 22.4387 17.5868 21.7458C16.5232 21.166 14.9434 20.2728 13.5224 19.3409C12.8119 18.8744 10.6355 17.3805 10.903 16.3175C11.1328 15.4085 14.7898 11.993 16.8794 9.96241C17.6996 9.16462 17.3256 8.7044 16.357 9.43824C13.9508 11.2603 10.0901 14.031 8.81328 14.811C7.68694 15.4987 7.09974 15.6161 6.39761 15.4987C5.11664 15.2848 3.92866 14.9536 2.95905 14.55C1.64882 14.0048 1.71255 12.1975 2.958 11.6712L20.8248 4.12314Z"
                    />
                  </svg>
                </a>
              </li>
              <li className="nav-medias__item">
                <a
                  target="_blank"
                  href="https://www.instagram.com/unitdev.uz?igsh=MTBpMTFqNW1rMWtrag=="
                >
                  <svg
                    width="25"
                    fill="none"
                    height="25"
                    viewBox="0 0 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="black"
                      d="M13.5794 2.00129C14.3456 1.99835 15.1118 2.00605 15.8777 2.02439L16.0814 2.03174C16.3166 2.04014 16.5487 2.05064 16.829 2.06324C17.9461 2.11574 18.7084 2.29213 19.3772 2.55147C20.0702 2.81816 20.654 3.17935 21.2377 3.76313C21.7715 4.2877 22.1846 4.92224 22.4483 5.62262C22.7076 6.29145 22.884 7.05477 22.9365 8.17193C22.9491 8.45122 22.9596 8.68431 22.968 8.91951L22.9743 9.1232C22.993 9.88883 23.001 10.6547 22.9985 11.4205L22.9995 12.2038V13.5792C23.0021 14.3454 22.9941 15.1116 22.9754 15.8776L22.9691 16.0813C22.9607 16.3165 22.9502 16.5485 22.9376 16.8289C22.8851 17.946 22.7066 18.7083 22.4483 19.3772C22.1855 20.0783 21.7722 20.7133 21.2377 21.2377C20.7127 21.7714 20.0779 22.1845 19.3772 22.4483C18.7084 22.7076 17.9461 22.884 16.829 22.9365C16.5487 22.9491 16.3166 22.9596 16.0814 22.968L15.8777 22.9743C15.1118 22.993 14.3456 23.001 13.5794 22.9985L12.7962 22.9995H11.4218C10.6556 23.0021 9.8894 22.9941 9.12344 22.9754L8.91975 22.9691C8.6705 22.96 8.42131 22.9495 8.17219 22.9376C7.05505 22.8851 6.29279 22.7066 5.62292 22.4483C4.92227 22.1851 4.28764 21.7719 3.76347 21.2377C3.22909 20.713 2.8156 20.0781 2.55183 19.3772C2.29249 18.7083 2.1161 17.946 2.0636 16.8289C2.05191 16.5797 2.04141 16.3306 2.0321 16.0813L2.02685 15.8776C2.0075 15.1117 1.99875 14.3455 2.00061 13.5792V11.4205C1.99768 10.6547 2.00538 9.88883 2.0237 9.1232L2.03105 8.91951C2.03945 8.68431 2.04995 8.45122 2.06255 8.17193C2.11505 7.05372 2.29144 6.2925 2.55078 5.62262C2.81471 4.92189 3.22901 4.28753 3.76452 3.76418C4.28833 3.22949 4.92257 2.81562 5.62292 2.55147C6.29279 2.29213 7.054 2.11574 8.17219 2.06324L8.91975 2.03174L9.12344 2.02649C9.88904 2.00714 10.6549 1.99839 11.4207 2.00024L13.5794 2.00129ZM12.5001 7.25111C11.8045 7.24128 11.1139 7.36978 10.4684 7.62917C9.82291 7.88856 9.23541 8.27365 8.74005 8.76207C8.24468 9.25049 7.85133 9.83249 7.58284 10.4743C7.31436 11.116 7.1761 11.8047 7.1761 12.5004C7.1761 13.1961 7.31436 13.8848 7.58284 14.5266C7.85133 15.1683 8.24468 15.7503 8.74005 16.2388C9.23541 16.7272 9.82291 17.1123 10.4684 17.3716C11.1139 17.631 11.8045 17.7595 12.5001 17.7497C13.8924 17.7497 15.2277 17.1966 16.2122 16.2121C17.1967 15.2275 17.7498 13.8922 17.7498 12.4999C17.7498 11.1075 17.1967 9.77223 16.2122 8.7877C15.2277 7.80317 13.8924 7.25111 12.5001 7.25111ZM12.5001 9.35104C12.9185 9.34333 13.3342 9.41908 13.723 9.57385C14.1118 9.72863 14.4659 9.95933 14.7646 10.2525C15.0632 10.5456 15.3005 10.8954 15.4624 11.2812C15.6244 11.6671 15.7079 12.0814 15.7079 12.4999C15.708 12.9184 15.6247 13.3327 15.4628 13.7186C15.301 14.1045 15.0639 14.4543 14.7653 14.7476C14.4668 15.0408 14.1128 15.2717 13.724 15.4266C13.3353 15.5815 12.9195 15.6573 12.5011 15.6498C11.6657 15.6498 10.8646 15.3179 10.2738 14.7272C9.68314 14.1365 9.35128 13.3353 9.35128 12.4999C9.35128 11.6645 9.68314 10.8633 10.2738 10.2726C10.8646 9.68185 11.6657 9.34999 12.5011 9.34999L12.5001 9.35104ZM18.0123 5.67617C17.6736 5.68972 17.3532 5.83382 17.1184 6.07827C16.8835 6.32273 16.7523 6.64857 16.7523 6.98757C16.7523 7.32657 16.8835 7.65242 17.1184 7.89687C17.3532 8.14132 17.6736 8.28542 18.0123 8.29898C18.3604 8.29898 18.6942 8.1607 18.9403 7.91457C19.1864 7.66844 19.3247 7.33461 19.3247 6.98652C19.3247 6.63844 19.1864 6.30461 18.9403 6.05848C18.6942 5.81234 18.3604 5.67407 18.0123 5.67407V5.67617Z"
                    />
                  </svg>
                </a>
              </li>
              <li className="nav-medias__item">
                <a href="https://www.youtube.com/@unitdev_uz" target="_blank">
                  <svg
                    width="25"
                    fill="none"
                    height="25"
                    viewBox="0 0 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4 15.7143L15.8495 12.5L10.4 9.28571V15.7143ZM22.538 7.325C22.6745 7.82857 22.769 8.50357 22.832 9.36071C22.9055 10.2179 22.937 10.9571 22.937 11.6L23 12.5C23 14.8464 22.832 16.5714 22.538 17.675C22.2755 18.6393 21.6665 19.2607 20.7215 19.5286C20.228 19.6679 19.325 19.7643 17.939 19.8286C16.574 19.9036 15.3245 19.9357 14.1695 19.9357L12.5 20C8.1005 20 5.36 19.8286 4.2785 19.5286C3.3335 19.2607 2.7245 18.6393 2.462 17.675C2.3255 17.1714 2.231 16.4964 2.168 15.6393C2.0945 14.7821 2.063 14.0429 2.063 13.4L2 12.5C2 10.1536 2.168 8.42857 2.462 7.325C2.7245 6.36071 3.3335 5.73929 4.2785 5.47143C4.772 5.33214 5.675 5.23571 7.061 5.17143C8.426 5.09643 9.6755 5.06429 10.8305 5.06429L12.5 5C16.8995 5 19.64 5.17143 20.7215 5.47143C21.6665 5.73929 22.2755 6.36071 22.538 7.325Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </li>
              <li className="nav-medias__item">
                <a
                  target="_blank"
                  href="https://www.facebook.com/people/Unitdev-UZ/pfbid0kjSqYU5Jkzmqr4YwM64CU4tceRrpEZNPHbYpk6CUhSLe5jgU45nfnvdw4yUyjAp9l/?mibextid=ZbWKwL"
                >
                  <svg
                    width="25"
                    height="25"
                    fill="none"
                    viewBox="0 0 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_13_227)">
                      <path
                        d="M25 12.5766C25 5.63055 19.4038 0 12.5016 0C5.59617 0.0015623 0 5.63055 0 12.5781C0 18.8539 4.5713 24.0564 10.5456 25V16.212H7.37408V12.5781H10.5487V9.80503C10.5487 6.65386 12.4156 4.91345 15.27 4.91345C16.6385 4.91345 18.0681 5.15873 18.0681 5.15873V8.25209H16.4917C14.9403 8.25209 14.456 9.22229 14.456 10.2175V12.5766H17.9212L17.3681 16.2105H14.4544V24.9984C20.4287 24.0548 25 18.8523 25 12.5766Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_13_227">
                        <rect width="25" height="25" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>

          <ul className="nav-languages">
            <li
              onClick={() => setIsLanguageModal((prevState) => !prevState)}
              className={`nav-language ${
                isOpenLanguageModal && "nav-language--open"
              }`}
            >
              <div className="nav-language__box">
                <h3 className="nav-language__box-title">{langData.lang}</h3>
                <img
                  alt="rus"
                  width={30}
                  height={30}
                  loading="lazy"
                  src={langData.flag}
                  className="nav-language__box-image"
                />
                <img
                  width={9}
                  src={Down}
                  height="5.63"
                  loading="lazy"
                  alt="arrow-down"
                  className="nav-language__box-icon"
                />
              </div>

              <ul className="nav-language__options">
                <li
                  className="nav-language__option"
                  onClick={() => changeLang("uz")}
                >
                  <div className="nav-language__option-box">
                    <h3 className="nav-language__option-box-title">uz</h3>
                    <img
                      alt="uz"
                      width={30}
                      height={30}
                      loading="lazy"
                      src={Language2}
                      className="nav-language__option-box-image"
                    />
                  </div>
                </li>
                <li
                  className="nav-language__option"
                  onClick={() => changeLang("ru")}
                >
                  <div className="nav-language__option-box">
                    <h3 className="nav-language__option-box-title">ru</h3>
                    <img
                      alt="rus"
                      width={30}
                      height={30}
                      loading="lazy"
                      src={Language1}
                      className="nav-language__option-box-image"
                    />
                  </div>
                </li>
                <li
                  className="nav-language__option"
                  onClick={() => changeLang("en")}
                >
                  <div className="nav-language__option-box">
                    <h3 className="nav-language__option-box-title">en</h3>
                    <img
                      alt="en"
                      width={30}
                      height={30}
                      loading="lazy"
                      src={Language3}
                      className="nav-language__option-box-image"
                    />
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-language">
              <ul className="nav__icons">
                {isMenuButtons.bars && (
                  <li
                    className={`nav-icon ${
                      isMenuButtons.bars && "nav-icon--visible"
                    }`}
                    onClick={() => toggleMenuButtons(true)}
                  >
                    <i className="fa fa-bars"></i>
                  </li>
                )}

                {isMenuButtons.times && (
                  <li
                    className={`nav-icon ${
                      isMenuButtons.times && "nav-icon--visible"
                    }`}
                    onClick={() => toggleMenuButtons(false)}
                  >
                    <i className="fa fa-times"></i>
                  </li>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route
          path="/pages/information/:id"
          element={<InformationBackground />}
        />
      </Routes>
    </div>
  );
};

export default Header;
