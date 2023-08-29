import { flex } from "../styled-system/patterns";
import { css } from "../styled-system/css";
import Nav from "./components/Nav";
import fotoPerfil from "./assets/fotoperfil3.png";
import gitHub from "./assets/github.svg";
import linkedIn from "./assets/linkedin.svg";
import calendly from "./assets/calendly.svg";

function App() {
  return (
    <>
      <Nav></Nav>

      <main>
        <article
          className={flex({
            padding: "2rem 1rem 1rem",
            direction: "column",
            align: "center",
            justify: "center",
            gap: "20px",
          })}
        >
          <img
            src={fotoPerfil}
            alt="gino tapia barrios profile photo"
            className={css({
              width: "100%",
              height: "auto",
              maxWidth: "100px",
              borderRadius: "50px",
            })}
          />
          <h1
            className={css({
              fontWeight: "bold",
              textTransform: "capitalize",
              fontSize: "24px",
            })}
          >
            gino tapia barrios (GiBa Dev)
          </h1>
          <p
            className={css({
              fontWeight: "400",
              fontSize: "14px",
              maxWidth: { base: "50ch", lg: "60ch" },
            })}
          >
            Transformando ideas en{" "}
            <strong>experiencias elegantes y rápidas</strong> a medida, con el{" "}
            <strong>compromiso de calidad</strong> de un{" "}
            <strong>Frontend Developer autónomo.</strong>
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
      </main>
    </>
  );
}

export default App;
