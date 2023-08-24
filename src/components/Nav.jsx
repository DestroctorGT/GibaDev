import { css } from "../../styled-system/css";
import { IconMenu2 } from "@tabler/icons-react";

export default function Nav() {
  return (
    <nav>
      <ul
        className={css({
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#D4F2FC",
        })}
      >
        <li>
          <h2
            className={css({
              textTransform: "capitalize",
              fontWeight: "extrabold",
            })}
          >
            giba dev
          </h2>
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
          <a>
            <IconMenu2 />
          </a>
        </li>
      </ul>
    </nav>
  );
}
