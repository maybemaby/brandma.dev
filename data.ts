import { Project } from "./components/ProjectSection";

export const projects: Project[] = [
  {
    description: `Express API server that could power a home dashboard between roommates.
  Roommates can add to the message board, create events, and assign tasks. 
  Features JWT auth, logging with Winston, and Prisma with a relational database. 
  `,
    title: "Homeboard API",
    technologies: ["Express.js", "Typescript", "Passportjs", "Prisma"],
    repo: "https://github.com/maybemaby/homeboard-api",
  },
  {
    description: `Personal developer portfolio made from scratch. Dark mode and theming
  created using React Context and styled-components. Statically generated with Next.js.
  `,
    title: "Personal Portfolio",
    technologies: ["Next.js", "Typescript", "styled-components"],
    repo: "https://github.com/maybemaby/brandma.dev",
    liveUrl: "https://brandma.dev/",
    morePath: "/projects/portfolio",
  },
  {
    description: `Website for curating Youtube videos based on a weekly theme. Users can
    vote for next weeks theme, see past results, upvote submissions for the current theme, and submit
    Youtube videos. Utilizes the Youtube API for embedding the player and retrieving video info.
    `,
    title: "VibeOfTheWeek",
    technologies: ["Next.js", "Firebase", "Typescript"],
    morePath: "/projects/vibeoftheweek",
  },
];
