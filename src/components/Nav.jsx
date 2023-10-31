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
          <a>
            <IconMenu2 />
          </a>
        </li>
      </ul>
    </nav>
  );
}
