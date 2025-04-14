import sportWearImage from "../assets/sportwear.png";
import pokemonPI from "../assets/pokemonPI.png";
import vidlanceImage from "../assets/vidlance.png";
import reactLogo from "../assets/react.svg";
import gitHubLogo from "../assets/github.svg";
import reduxLogo from "../assets/redux.svg";
import tailwindLogo from "../assets/tailwindcss.svg";
import linkedIn from "../assets/linkedin.svg";
import calendly from "../assets/calendly.svg";
import nextjsLogo from "../assets/nextjs-icon.svg";
import nestjsLogo from "../assets/nestjs.png";

export const projectsData = [
  {
    title: "Vidlance",
    image: vidlanceImage,
    description:
      "Plataforma dedicada a conectar editores de vídeo con clientes que buscan servicios de edición.",
    techStack: [nextjsLogo, tailwindLogo, nestjsLogo],
    socialLinks: [
      {
        github: {
          link: "https://github.com/DestroctorGT/vidlance",
          image: gitHubLogo,
        },
        web: { link: "https://vidlance.vercel.app/" },
      },
    ],
  },
  {
    title: `"SportWear"`,
    image: sportWearImage,
    description:
      "Partícipe en el desarrollo de “SportWear”, un E-Commerce de ropa deportiva junto con 6 desarrolladores.",
    techStack: [reactLogo, reduxLogo, tailwindLogo],
    socialLinks: [
      {
        github: {
          link: "https://github.com/katherine-j-c-s/Ecomerce",
          image: gitHubLogo,
        },
        web: { link: "https://sportwear.vercel.app/" },
      },
    ],
  },
  {
    title: "Pokedex App",
    image: pokemonPI,
    description:
      "Aplicación de Pokémon que permitía buscar, ver y organizar pokémons, sin depender de una API externa.",
    techStack: [reactLogo, reduxLogo],
    socialLinks: [
      {
        github: {
          link: "https://github.com/DestroctorGT/pokemon-pi",
          image: gitHubLogo,
        },
      },
    ],
  },
];

export const socialMediaLinks = [
  {
    name: "github",
    link: "https://github.com/DestroctorGT/Vita-Nova",
    image: gitHubLogo,
  },
  {
    name: "linkedIn",
    link: "https://www.linkedin.com/in/gino-tapia-barrios/",
    image: linkedIn,
  },
  {
    name: "cv",
  },
  {
    name: "calendly",
    link: "https://calendly.com/ginotapia/60min?month=2023-08&date=2023-08-25",
    image: calendly,
  },
];
