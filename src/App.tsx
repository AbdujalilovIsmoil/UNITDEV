import Aos from "aos";
import Loader from "components/Loader";
import TagManager from "react-gtm-module";
import { Header, Footer, GoogleTagManager } from "components";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import InformationAbout from "pages/InformationAbout";

const tagManagerArgs = {
  gtmId: "GTM-PS6P7Q2Z",
};

const App = () => {
  useEffect(() => {
    Aos.init();

    TagManager.initialize(tagManagerArgs);
  }, []);

  const Home = lazy(() => import("pages/Home"));
  const Error = lazy(() => import("pages/Error"));
  const CourseForm = lazy(() => import("pages/CourseForm"));

  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <GoogleTagManager />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/pages/course-form" element={<CourseForm />} />
          <Route path="/pages/information/:id" element={<InformationAbout />} />
        </Routes>
      </main>
      <Footer />
    </Suspense>
  );
};

export default App;
