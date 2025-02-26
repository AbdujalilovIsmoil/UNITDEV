import { useSelector } from "react-redux";
import { StepImage } from "assets/images/jpg";
import { languageTypes } from "typescript/types";

const Step = () => {
  const lang = useSelector(({ language }: { language: string }) => language);

  const titleData: languageTypes = {
    en: "Another step forward with us",
    uz: "Biz bilan oldinga yana bir qadam",
    ru: "Еще один шаг вперед вместе с нами",
  };

  const centerTitleData: languageTypes = {
    en: "modern professions with us",
    uz: "zamonaviy kasblar biz bilan",
    ru: "современные профессии с нами",
  };

  const textData: languageTypes = {
    uz: `Unitdev - O‘zbekistondagi axborot-kommunikatsiya texnologiyalari sohasida IT-park rezidenti bo'lib, 
         yuqori toifali mutaxassislar jamoasidir. Kompaniyaning asosiy faoliyati axborot texnologiyalari
         bo'yicha xizmatlar taqdim etishdir. Biz IT texnologiyalar va tizimlar bo‘yicha o‘quv kurslarini
         o‘rgatish, shuningdek davlat idoralari va xususiy kompaniyalar uchun turli xil loyihalarni ishlab
         chiqish va joriy etish bilan shug‘ullanamiz. Faoliyat turi buyurtmaning murakkabligi va yo‘nalishidan
         qat’i nazar, biz har qanday loyihani raqamlashtirish imkoniyatiga egamiz!`,
    ru: `
        Unitdev - это высококлассные специалисты в сфере информационно-коммуникационных технологий в
        Узбекистане и что немаловажно резиденты ИТ-парка. Основной деятельностью компании является
        предоставление информационных услуг. Мы занимаемся преподаванием учебных курсов по технологиям и
        ИТ-системам, разработкой и внедрением решений для государственных учреждений и частных компаний,
        независимо от их типа, сложности и направления деятельности. У нас есть возможность оцифровать
        любой проект!
    `,
    en: `
        In the field of information and communication technologies in Uzbekistan
        Residents of the IT park, high-class specialists
        is a team. The main activity of the company is information
        teaching training courses on technologies and IT systems
        development and implementation. We are government agencies
        and geographical location of private companies, activities
        regardless of the type, complexity and direction of the order
        We have the opportunity to digitize any project!
    `,
  };

  return (
    <section className="step" id="about">
      <div className="step__container container" data-aos="fade-down">
        <div
          className="step-image"
          style={{ backgroundImage: `url(${StepImage})` }}
        ></div>
        <div className="step__content">
          <h2 className="step__content-top-title">{titleData[lang]}</h2>
          <h3 className="step__content-center-title">
            <span>UnitDev</span> - {centerTitleData[lang]}
          </h3>
          <ul className="step-texts">
            <li className="step-texts__item">
              <p className="step-texts__item-text">{textData[lang]}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Step;
