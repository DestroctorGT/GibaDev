import { css } from "../../styled-system/css";
import PropTypes from "prop-types";
import { flex } from "../../styled-system/patterns";
import { IconWorldWww } from "@tabler/icons-react";

ProjectCard.propTypes = {
  pTitle: PropTypes.string.isRequired,
  pImage: PropTypes.string.isRequired,
  pDescription: PropTypes.string.isRequired,
  pTechStack: PropTypes.array.isRequired,
  pSocialLinks: PropTypes.array.isRequired,
};

export default function ProjectCard({
  pTitle,
  pImage,
  pDescription,
  pTechStack,
  pSocialLinks,
}) {
  return (
    <div
      className={css({
        margin: { base: "1.5rem", lg: "auto" },
        padding: "8px 0 8px 0",
        backgroundColor: "#D4F2FC",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        borderRadius: "1rem",
        boxShadow: "0px 10px 10px 5px rgba(0,0,0,0.1)",
        width: { lg: "40%" },
        height: { lg: "auto" },
      })}
    >
      <h2
        className={css({
          textTransform: "capitalize",
          fontWeight: "bold",
          fontSize: "2xl",
        })}
      >
        {pTitle}
      </h2>

      <img
        src={pImage}
        alt="project image"
        className={css({
          width: "100%",
          height: "auto",
        })}
      />

      <p
        className={css({
          margin: { lg: "0 0 .5rem 0" },
          padding: ".2rem 1rem 0 1rem",
          fontWeight: "medium",
          textAlign: "center",
          maxWidth: { base: "50ch", lg: "60ch" },
        })}
      >
        {pDescription}
      </p>

      <article
        className={flex({
          direction: "row",
          align: "start",
          gap: { base: "2rem", lg: "12rem" },
        })}
      >
        <div
          className={flex({
            direction: "row",
            align: "center",
            justify: "center",
            gap: "10px",
          })}
        >
          <p
            className={css({
              fontWeight: "medium",
              textTransform: "capitalize",
            })}
          >
            tech stack
          </p>

          {pTechStack &&
            pTechStack.map((tech, index) => {
              return (
                <img
                  src={tech}
                  alt="tech stack icons"
                  key={index}
                  className={css({
                    width: "100%",
                    height: "auto",
                    maxWidth: "30px",
                  })}
                />
              );
            })}
        </div>

        {pSocialLinks &&
          pSocialLinks.map(({ github, web }, index) => {
            return (
              <div
                key={index}
                className={flex({
                  direction: "row",
                  align: "center",
                  justify: "center",
                  gap: "10px",
                })}
              >
                <a href={github.link} target="_blank" rel="noreferrer">
                  <img
                    src={github.image}
                    alt="github logo project"
                    className={css({
                      width: "100%",
                      height: "auto",
                      maxWidth: "30px",
                    })}
                  />
                </a>
                {web && (
                  <a href={web.link} target="_blank" rel="noreferrer">
                    <IconWorldWww size={32} />
                  </a>
                )}
              </div>
            );
          })}
      </article>
    </div>
  );
}
