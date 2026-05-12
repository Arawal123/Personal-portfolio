export const site = {
  name: "Arawal Shukla",
  role: "student, builder, learner",
  education: "CSE Sophomore at VIT Chennai",
  linkedin: "https://www.linkedin.com/in/arawal-shukla-63a140216",
  github: "https://github.com/Arawal123",
  personalEmail: "arawalnasa@gmail.com",
  collegeEmail: "arawal.shukla2024@vitstudent.ac.in",
  nav: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" }
  ]
} as const;

export const imageBreaks = {
  forest: {
    id: "between-code-and-calm",
    src: "/images/forest-bg.avif",
    alt: "A calm forest lake with tall trees and distant mountains.",
    eyebrow: "Pause",
    title: "Between code and calm.",
    body: "A personal archive of work, growth, and direction.",
    align: "center" as const
  },
  landscape: {
    id: "journey",
    src: "/images/landscape-bg.avif",
    alt: "Warm sunset light passing through branches over a distant landscape.",
    eyebrow: "Journey",
    title: "A quiet line forward.",
    body: "",
    align: "bottom" as const
  }
} as const;

export const projects = [
  {
    number: "01",
    title: "Spatial Data Science Dashboard",
    eyebrow: "Foundations of Data Science Project",
    description:
      "An interactive geospatial analytics dashboard visualizing hotspot and coldspot patterns across city wards using spatial significance and ward-level metrics.",
    tags: ["Data Science", "Geospatial Analytics", "Dashboard"],
    image: "/projects/fds-map.jpg",
    linkLabel: "GitHub",
    githubUrl: "ADD_GITHUB_LINK_HERE",
    liveUrl: "ADD_LIVE_LINK_HERE"
  },
  {
    number: "02",
    title: "Algorithmic Pathfinding Visualizer",
    eyebrow: "Pathfinding Visualizer",
    description:
      "A visual tool for exploring shortest-path algorithms and scenario-based routing with interactive grids, metrics, and path comparisons.",
    tags: ["Algorithms", "Visualization", "React"],
    image: "/projects/pathfinding.jpg",
    linkLabel: "GitHub",
    githubUrl: "ADD_GITHUB_LINK_HERE",
    liveUrl: "https://arawal-pathfinding-visualizer.vercel.app/"
  },
  {
    number: "03",
    title: "Claim Verification Explorer",
    eyebrow: "Claim Explorer",
    description:
      "A clean interface for reviewing claims, evidence status, topics, verdicts, and structured verification workflows.",
    tags: ["Database", "Interface Design", "Verification"],
    image: "/projects/claim-explorer.jpg",
    hideImage: true,
    linkLabel: "GitHub",
    githubUrl: "ADD_GITHUB_LINK_HERE",
    liveUrl: "ADD_LIVE_LINK_HERE"
  },
  {
    number: "04",
    title: "Navier stokes Neural Net simulation",
    eyebrow: "Physics-Informed Neural Network",
    description:
      "A Colab-based neural simulation exploring Navier-Stokes behavior through PINN field prediction, velocity quivers, error maps, and training loss analysis.",
    tags: ["PINNs", "Navier-Stokes", "Neural Simulation"],
    image: "/projects/navier-stokes-ns-1.png",
    secondaryImage: "/projects/navier-stokes-ns-2.png",
    linkLabel: "Colab",
    githubUrl:
      "https://colab.research.google.com/drive/1R7yafH4Cksscryxor-OKR7oSdHizrA7k",
    liveUrl: ""
  }
] as const;

export const timeline = [
  {
    year: "2024",
    text: "Started building deeper foundations in computer science."
  },
  {
    year: "2025",
    text: "Focused on AI, machine learning, and deep learning fundamentals."
  },
  {
    year: "2026",
    text: "Building stronger projects, portfolio direction, and research curiosity."
  },
  {
    year: "2028",
    text: "CSE, VIT Chennai."
  }
] as const;

export const contactLinks = [
  {
    label: "LinkedIn",
    value: "www.linkedin.com/in/arawal-shukla-63a140216",
    href: site.linkedin
  },
  {
    label: "GitHub",
    value: "github.com/Arawal123",
    href: site.github
  },
  {
    label: "Personal mail",
    value: site.personalEmail,
    href: `mailto:${site.personalEmail}`
  },
  {
    label: "College mail",
    value: site.collegeEmail,
    href: `mailto:${site.collegeEmail}`
  }
] as const;

export const collaborationButtons = [
  {
    label: "LinkedIn",
    href: site.linkedin
  },
  {
    label: "GitHub",
    href: site.github
  }
] as const;

export const emailLinks = [
  {
    label: "Personal",
    value: site.personalEmail,
    href: `mailto:${site.personalEmail}`
  },
  {
    label: "College",
    value: site.collegeEmail,
    href: `mailto:${site.collegeEmail}`
  }
] as const;
