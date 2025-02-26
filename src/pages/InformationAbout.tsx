// import OurResult from "components/OurResult";
import { useEffect } from "react";
import { InformationConditions } from "components";

const InformationAbout = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="information">
      <InformationConditions />
      {/* <OurResult /> */}
    </section>
  );
};

export default InformationAbout;
