import chaosImg from "@public/img/chaos.png";
import gameOfLifeImg from "@public/img/game_of_life.png";
import lorenzAttractorImg from "@public/img/lorenz_attractor.png";
import { StaticImageData } from "next/image";

const topics: Topic[] = [
  {
    name: "Game of Life",
    description:
      "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine.",
    img: gameOfLifeImg,
    endpoint: "/game_of_life",
    fullEndpoint: "/game_of_life",
    references: [
      {
        url: "https://playgameoflife.com/",
        title: "Play Game of Life website",
      },
      {
        url: "https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life",
        title: "Wikipedia entry",
      },
      {
        url: "https://www.youtube.com/watch?v=FWSR_7kZuYg",
        title: "The Coding Train's YouTube video",
      },
      {
        url: "https://www.youtube.com/watch?v=R9Plq-D1gEk",
        title: "Numberphile's YouTube video",
      },
      {
        url: "https://www.theguardian.com/science/2015/jul/23/john-horton-conway-the-most-charismatic-mathematician-in-the-world",
        title: "The Guardians' article",
      },
      {
        url: "https://www.wired.com/2015/09/life-games-playful-genius-john-conway/",
        title: "Wired's article",
      },
    ],
  },
  {
    name: "Chaos",
    description:
      "Chaos theory is an interdisciplinary scientific theory and branch of mathematics focused on underlying patterns and deterministic laws highly sensitive to initial conditions in dynamical systems that were thought to have completely random states of disorder and irregularities.",
    img: chaosImg,
    endpoint: "/chaos",
    fullEndpoint: "/chaos",
    references: [],
    suptopics: [
      {
        name: "Lorenz Attractor",
        description:
          "The Lorenz system is a system of ordinary differential equations first studied by mathematician and meteorologist Edward Lorenz. It is notable for having chaotic solutions for certain parameter values and initial conditions. In particular, the Lorenz attractor is a set of chaotic solutions of the Lorenz system.",
        img: lorenzAttractorImg,
        endpoint: "/lorenz_attractor",
        fullEndpoint: "/chaos/lorenz_attractor",
        references: [],
      },
    ],
  },
];

export interface Topic {
  name: string;
  description: string;
  img: StaticImageData;
  endpoint: string;
  fullEndpoint: string;
  references: Reference[];
  suptopics?: Topic[];
}

interface Reference {
  url: string;
  title: string;
}

export default topics;
