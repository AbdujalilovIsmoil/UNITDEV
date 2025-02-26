import { Projects as ProjectImage } from "assets/images/jpg";

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <div className="projects__content">
          <h2 className="projects__content-title">
            Bizning qilgan proektlarimiz
          </h2>
        </div>

        <ul className="projects__list">
          <li className="projects__item" data-aos="flip-up">
            <img
              width={417}
              height={410}
              loading="lazy"
              src={ProjectImage}
              alt="project image"
              className="projects__item-image"
            />
            <footer className="projects-footer">
              <ul className="projects-footer__list">
                <li className="projects-footer__item">
                  <span className="projects-footer__item-key">
                    Proyekt nomi
                  </span>
                  <h3 className="projects-footer__item-value">Arzon Apteka</h3>
                </li>
                <li className="projects-footer__item">
                  <span className="projects-footer__item-key">Bajarilgan</span>
                  <h3 className="projects-footer__item-value">3 oy</h3>
                </li>
              </ul>
            </footer>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
