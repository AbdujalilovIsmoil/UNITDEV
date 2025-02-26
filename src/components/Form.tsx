import { useSelector } from "react-redux";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { ChangeEvent, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ContactImage } from "assets/images/jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { toast, ToastContainer } from "react-toastify";
import { languageJsxTypes, languageTypes } from "typescript/types";

const Form = () => {
  const lang: string = useSelector(
    ({ language }: { language: string }) => language
  );
  const [userName, setUserName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [userMessage, setUserMessage] = useState<string>("");

  const postFormData = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name: userName,
      phone_number: phoneNumber,
      description: userMessage,
    };

    fetch("https://api.unitdev.uz/api/leads/store", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          toast.success("Ma'lumotlaringiz adminga yuborildi", {
            autoClose: 3000,
            pauseOnHover: false,
          });

          setUserName("");
          setPhoneNumber("");
          setUserMessage("");
        }
      })
      .catch(() => {
        toast.error("Serverda xatolik bor", {
          autoClose: 3000,
          pauseOnHover: false,
        });
      });
  };

  const titleData: languageJsxTypes = {
    uz: (
      <h2 className="form__box-title">
        <span>Biz bilan</span> bog’lanish uchun
      </h2>
    ),
    ru: (
      <h2 className="form__box-title">
        Связаться <span>с нами</span>
      </h2>
    ),
    en: (
      <h2 className="form__box-title">
        <span>With us</span> to connect
      </h2>
    ),
  };

  const nameAndSureName: languageTypes = {
    ru: "Имя и фамилия",
    uz: "Ism va Familiya",
    en: "Name and Surename",
  };

  const enterName: languageTypes = {
    ru: "Введите ваше имя и фамилия",
    en: "Enter your name and lastname",
    uz: "Ismingizni va familiyangizni kiriting",
  };

  const phone: languageTypes = {
    uz: "Telefon raqam",
    en: "Phone number",
    ru: "Номер телефона",
  };

  const yourInteresting: languageTypes = {
    uz: "Qiziqishingiz haqida",
    ru: "О вашем интересе",
    en: "About your interest",
  };

  const yourInterestingMessage: languageTypes = {
    uz: "Qiziqishingiz haqida qisqacha ma’lumot",
    en: "Brief information about your interest",
    ru: "Краткая информация о вашем интересе",
  };

  const send: languageTypes = {
    uz: "Yuborish",
    en: "Send",
    ru: "Отправка",
  };

  return (
    <section className="form" id="contacts">
      <ToastContainer />
      <div className="container">
        <div className="form__container bg-dark" data-aos="zoom-in">
          <div className="form__box">
            {titleData[lang]}
            <form className="form-registration" onSubmit={postFormData}>
              <div className="form-registration__user">
                <label
                  htmlFor="full-name"
                  className="form-registration__user-label"
                >
                  {nameAndSureName[lang]}
                </label>
                <div className="form-registration__box">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C11.0111 2 10.0444 2.29324 9.22215 2.84265C8.3999 3.39206 7.75904 4.17295 7.3806 5.08658C7.00216 6.00021 6.90315 7.00555 7.09607 7.97545C7.289 8.94536 7.7652 9.83627 8.46447 10.5355C9.16373 11.2348 10.0546 11.711 11.0245 11.9039C11.9945 12.0969 12.9998 11.9978 13.9134 11.6194C14.827 11.241 15.6079 10.6001 16.1573 9.77785C16.7068 8.95561 17 7.98891 17 7C17 5.67392 16.4732 4.40215 15.5355 3.46447C14.5979 2.52678 13.3261 2 12 2ZM12 10C11.4067 10 10.8266 9.82405 10.3333 9.49441C9.83994 9.16476 9.45542 8.69623 9.22836 8.14805C9.0013 7.59987 8.94189 6.99667 9.05764 6.41473C9.1734 5.83279 9.45912 5.29824 9.87868 4.87868C10.2982 4.45912 10.8328 4.1734 11.4147 4.05764C11.9967 3.94189 12.5999 4.0013 13.1481 4.22836C13.6962 4.45542 14.1648 4.83994 14.4944 5.33329C14.8241 5.82664 15 6.40666 15 7C15 7.79565 14.6839 8.55871 14.1213 9.12132C13.5587 9.68393 12.7956 10 12 10ZM21 21V20C21 18.1435 20.2625 16.363 18.9497 15.0503C17.637 13.7375 15.8565 13 14 13H10C8.14348 13 6.36301 13.7375 5.05025 15.0503C3.7375 16.363 3 18.1435 3 20V21H5V20C5 18.6739 5.52678 17.4021 6.46447 16.4645C7.40215 15.5268 8.67392 15 10 15H14C15.3261 15 16.5979 15.5268 17.5355 16.4645C18.4732 17.4021 19 18.6739 19 20V21H21Z"
                      fill="#F4A850"
                    />
                  </svg>
                  <input
                    required
                    type="text"
                    id="full-name"
                    value={userName}
                    placeholder={enterName[lang]}
                    className="form-registration__box-field"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-registration__user">
                <label
                  htmlFor="phone"
                  className="form-registration__user-label"
                >
                  {phone[lang]}
                </label>
                <div className="form-registration__box form-registration__box--border">
                  <PhoneInput
                    country={"uz"}
                    placeholder="+998"
                    value={phoneNumber}
                    inputProps={{
                      name: "phone",
                      required: true,
                    }}
                    inputStyle={{
                      color: "white",
                      backgroundColor: "transparent",
                      width: "100%",
                    }}
                    inputClass="phone-input"
                    onChange={(phone) => setPhoneNumber(phone)}
                  />
                </div>
              </div>
              <label
                className="form-registration__user-label"
                htmlFor="interesting"
              >
                {yourInteresting[lang]}
              </label>
              <textarea
                required
                id="interesting"
                value={userMessage}
                className="form-registration__user-text"
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder={yourInterestingMessage[lang]}
              ></textarea>
              <button className="form-registration-send" type="submit">
                {send[lang]}
              </button>
            </form>
          </div>
          <div className="form__box">
            <Swiper
              loop
              autoplay={{
                delay: 2000,
              }}
              spaceBetween={20}
              className="form__sliders"
              modules={[Pagination, Autoplay]}
            >
              <SwiperSlide>
                <li className="form__slider">
                  <img
                    width="635"
                    height="767"
                    loading="lazy"
                    src={ContactImage}
                    alt="UNITDEV slider image"
                    className="form__slider-image"
                  />
                </li>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
