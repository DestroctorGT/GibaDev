import { flex } from "../styled-system/patterns";
import { css } from "../styled-system/css";
import ProjectCard from "./components/ProjectCard";
import fotoPerfil from "./assets/fotoperfil.jpg";
import gitHub from "./assets/github.svg";
import linkedIn from "./assets/linkedin.svg";
import calendly from "./assets/calendly.svg";
import { projectsData, socialMediaLinks } from "./utils/projectsData";
import { IconFileCv, IconMenu2 } from "@tabler/icons-react";

function App() {
  return (
    <>
      <nav>
        <ul
          className={css({
            padding: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#D4F2FC",
            boxShadow: "0px 10px 10px -3px rgba(0,0,0,0.1)",
          })}
        >
          <li>
            <a
              href="#home"
              className={css({
                textTransform: "capitalize",
                fontWeight: "extrabold",
              })}
            >
              giba dev
            </a>
          </li>

          <li className={css({ display: { base: "none", lg: "block" } })}>
            <ul
              className={css({
                display: "flex",
                alignItems: "center",
                gap: "20px",
              })}
            >
              <li>
                <a
                  className={css({
                    textTransform: "capitalize",
                    fontWeight: "400",
                  })}
                  href="#inicio"
                >
                  inicio
                </a>
              </li>
              <li>
                <a
                  className={css({
                    textTransform: "capitalize",
                    fontWeight: "400",
                  })}
                  href="#proyectos"
                >
                  proyectos
                </a>
              </li>
              <li>
                <a
                  className={css({
                    textTransform: "capitalize",
                    fontWeight: "400",
                  })}
                  href="#contacto"
                >
                  contacto
                </a>
              </li>
            </ul>
          </li>

          <li className={css({ display: { base: "block", lg: "none" } })}>
            <a aria-label="menu" href="#menu">
              <IconMenu2 />
            </a>
          </li>
        </ul>
      </nav>

      <main
        className={flex({
          direction: "column",
          align: "center",
          justify: "center",
          gap: "10rem",
        })}
      >
        <article
          className={flex({
            margin: "5rem 0 0 0",
            padding: "2rem 1rem 1rem",
            direction: "column",
            align: "center",
            justify: "center",
            gap: "20px",
          })}
        >
          <img
            src={fotoPerfil}
            alt="gino tapia barrios"
            className={css({
              width: "100%",
              height: "auto",
              maxWidth: { base: "120px", lg: "150px" },
              borderRadius: "50%",
            })}
          />
          <h1
            className={css({
              fontWeight: "bold",
              textTransform: "capitalize",
              fontSize: { base: "24px", lg: "xx-large" },
            })}
          >
            gino tapia barrios (GiBa Dev)
          </h1>
          <p
            className={css({
              fontWeight: "400",
              fontSize: { base: "14px", lg: "medium" },
              maxWidth: { base: "50ch", lg: "60ch" },
            })}
          >
            Transformando ideas en{" "}
            <strong>experiencias elegantes y rápidas</strong> a medida, con el{" "}
            <strong>compromiso de calidad</strong> de un{" "}
            <strong>Frontend Developer Autónomo.</strong>
          </p>

          <div
            className={flex({
              align: "center",
              justify: "center",
              gap: "20px",
            })}
          >
            <a
              href="https://github.com/DestroctorGT"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={gitHub}
                alt="github icon for profile"
                className={css({
                  width: "100%",
                  height: "auto",
                  maxWidth: "48px",
                })}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/gino-tapia-barrios/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedIn}
                alt="linkedin icon for profile"
                className={css({
                  width: "100%",
                  height: "auto",
                  maxWidth: "48px",
                })}
              />
            </a>

            <a
              href="https://calendly.com/ginotapia/60min?month=2023-08&date=2023-08-25"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={calendly}
                alt="calendly icon for profile"
                className={css({
                  width: "100%",
                  height: "auto",
                  maxWidth: "120px",
                })}
              />
            </a>
          </div>
        </article>

        <section>
          <h2
            className={css({
              margin: "0 0 4rem 0",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: { base: "2xl", lg: "xx-large" },
            })}
          >
            proyectos
          </h2>

          <article
            className={flex({
              margin: { lg: "2rem" },
              direction: { base: "column", lg: "row" },
              gap: "2rem",
              wrap: { lg: "wrap" },
            })}
          >
            {projectsData ?
              projectsData.map(
                ({ title, image, description, techStack, socialLinks }) => {
                  return (
                    <ProjectCard
                      key={title}
                      pTitle={title}
                      pImage={image}
                      pDescription={description}
                      pTechStack={techStack}
                      pSocialLinks={socialLinks}
                    />
                  );
                }
              ): null}
          </article>
        </section>
      </main>

      <footer
        className={css({
          margin: "5rem 0 0 0",
          padding: "1rem",
          display: "flex",
          flexFlow: "column wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          backgroundColor: "#D4F2FC",
          boxShadow: "0px 10px 10px -3px rgba(0,0,0,0.1)",
        })}
      >
        <p>
          Si quieres conocerme más y crear proyectos increíbles juntos, no dudes
          en contactarme. 😁💪
        </p>
        <ul
          className={flex({
            direction: "row",
            align: "center",
            justify: "center",
            gap: { base: "20px", lg: "32px" },
          })}
        >
          {socialMediaLinks ?
            socialMediaLinks.map((social, index) => {
              return (
                <li key={index}>
                  {social.name === "calendly" ? (
                    <a href={social.link} target="_blank" rel="noreferrer">
                      <img
                        src={social.image}
                        alt="github icon for profile"
                        className={css({
                          width: "100%",
                          height: "auto",
                          maxWidth: "120px",
                        })}
                      />
                    </a>
                  ) : social.name === "cv" ? (
                    <IconFileCv size={48} stroke={1} />
                  ) : (
                    <a href={social.link} target="_blank" rel="noreferrer">
                      <img
                        src={social.image}
                        alt="github icon for profile"
                        className={css({
                          width: "100%",
                          height: "auto",
                          maxWidth: "40px",
                        })}
                      />
                    </a>
                  )}
                </li>
              );
            }) : null}
        </ul>
      </footer>
    </>
  );
}

export default App;
