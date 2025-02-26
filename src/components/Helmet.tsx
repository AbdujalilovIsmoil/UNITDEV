import { Helmet as ReactHelmet } from "react-helmet-async";

const Helmet = ({ lang }: { lang: string }) => {
  if (lang === "uz") {
    return (
      <ReactHelmet>
        <html lang={lang} />
        <meta charSet="UTF-8" />
        <meta name="author" content="UNITDEV" />
        <meta
          name="description"
          content="Eng zo'r kurs, IT kurslar, Frontend dasturlash, Backend dasturlash, Full Stack, IT olam, IT yangiliklar, UNITDEV jamoasi"
        />
        <meta
          name="og:description"
          content="Eng zo'r kurs, IT kurslar, Frontend dasturlash, Backend dasturlash, Full Stack, IT olam, IT yangiliklar, UNITDEV jamoasi"
        />
        <meta name="keywords" content="Dasturlash,Frontend,Backend,IT Olam" />
        <meta
          name="og:keywords"
          content="Dasturlash,Frontend,Backend,IT Olam"
        />
        <meta
          property="title"
          content="UNITDEV Jamoasi va O'rganish IT markazi"
        />
        <meta
          property="og:title"
          content="UNITDEV Jamoasi va O'rganish IT markazi"
        />
        <title>UNITDEV Jamoasi va O'rganish IT markazi</title>
      </ReactHelmet>
    );
  }

  if (lang === "ru") {
    return (
      <ReactHelmet>
        <html lang={lang} />
        <meta charSet="UTF-8" />
        <meta name="author" content="UNITDEV" />
        <meta
          name="description"
          content="Лучший курс, Курсы ИТ, Фронтенд-программирование, Бэкэнд-программирование, Full Stack, Мир ИТ, Новости ИТ, Команда UNITDEV"
        />
        <meta
          name="og:description"
          content="Лучший курс, Курсы ИТ, Фронтенд-программирование, Бэкэнд-программирование, Full Stack, Мир ИТ, Новости ИТ, Команда UNITDEV"
        />
        <meta
          name="keywords"
          content="Программирование, Фронтенд, Бэкенд, Мир ИТ"
        />
        <meta
          name="og:keywords"
          content="Программирование, Фронтенд, Бэкенд, Мир ИТ"
        />
        <meta property="title" content="Команда UNITDEV и учебный ИТ-центр" />
        <meta
          property="og:title"
          content="Команда UNITDEV и учебный ИТ-центр"
        />
        <title>Команда UNITDEV и учебный ИТ-центр</title>
      </ReactHelmet>
    );
  }

  if (lang === "en") {
    return (
      <ReactHelmet>
        <html lang={lang} />
        <meta charSet="UTF-8" />
        <meta name="author" content="UNITDEV" />
        <meta
          name="description"
          content="Best Course, IT Courses, Frontend Programming, Backend Programming, Full Stack, IT World, IT News, UNITDEV Team"
        />
        <meta
          name="og:description"
          content="Best Course, IT Courses, Frontend Programming, Backend Programming, Full Stack, IT World, IT News, UNITDEV Team"
        />
        <meta name="keywords" content="UNITDEV Team and Learn IT Centre" />
        <meta name="og:keywords" content="UNITDEV Team and Learn IT Centre" />
        <meta property="title" content="UNITDEV Team and Learn IT Centre" />
        <meta property="og:title" content="UNITDEV Team and Learn IT Centre" />
        <title>UNITDEV Team and Learn IT Centre</title>
      </ReactHelmet>
    );
  }
};

export default Helmet;
