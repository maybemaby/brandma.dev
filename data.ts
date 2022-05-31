import { Project } from "./components/ProjectSection";

export const projects: Project[] = [
  {
    description: `Find people to play tennis with in San Jose based on preferred court and rating. Schedule matches and keep track
    of past match scores. Built with ASP.NET Core 6 API. Monitoring and logging to New Relic.
    `,
    title: "SetMatch API",
    technologies: ["ASP.NET Core 6", "Postgresql", "New Relic", "Serilog"],
    morePath: "/projects/SetMatch",
  },
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
  {
    description: `App made for a family member to track their financial advisor's investments. 
    Schedules a task with Celery and Redis to pull in updated data everyday and add to the Postgres
    database. Features overall value tracking, graph breakdowns, and tables.
    `,
    title: "InvestBoard",
    technologies: [
      "Django",
      "Django-rest-framework",
      "React",
      "Material-UI",
      "Docker",
      "Postgresql",
      "Celery",
    ],
    morePath: "/projects/investboard",
  },
  {
    description: `Decision paralysis helper and organizer. Add choices and factors
    with weighting. Sort by score to find your highest rated choices.
    `,
    title: "CantDecide",
    technologies: ["React", "Typescript"],
    repo: "https://github.com/maybemaby/CantDecide",
    liveUrl: "https://cantdecideio.netlify.app/",
    morePath: "/projects/cantdecide",
  },
];
