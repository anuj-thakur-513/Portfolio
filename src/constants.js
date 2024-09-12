const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const projectList = [
  {
    title: "Attendance Tracker",
    description:
      "An attendance tracking system with Google OAuth to keep track of how much classes need to be attended for perfect attendace.",
    link: "https://github.com/anuj-thakur-513/attendance-tracker-frontend",
    deployedLink: "https://myattendance-tracker.netlify.app/",
    image: "https://cdn-icons-png.flaticon.com/512/3589/3589030.png",
    techStack: [
      "Typescript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google OAuth",
    ],
  },
  {
    title: "YouTube Downloader",
    description:
      "A CLI tool to download videos and playlists using the youtube link in highest quality in one go.",
    link: "https://github.com/anuj-thakur-513/youtube-downloader",
    image:
      "https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_youtube-512.png",
    techStack: ["Node.js", "FFMPEG"],
  },
  {
    title: "ScaleChat Server",
    description:
      "A scalable 1-1 chat app server made using Redis & Apache Kafka to make websockets scalable and reduce DB operations.",
    link: "https://github.com/anuj-thakur-513/ScaleChat",
    image:
      "https://img.freepik.com/premium-vector/speech-bubbles-line-coloured-vector-icon-chat-app-icon_787461-2127.jpg",
    techStack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "Apache Kafka",
      "Docker",
      "NodeCron",
      "JWT",
    ],
  },
  {
    title: "URL Shortener Discord Bot",
    description:
      "A URL shortener backend service with 3RE architecture & JWT based auth. A discord bot integrated with this API service to shorten the URL easily.",
    image:
      "https://images.golinks.io/blog/wp-content/uploads/2023/08/28145505/Blog-Header%402x-3.png",
    link: "https://github.com/anuj-thakur-513/URL-Shortener-Discord-Bot",
    deployedLink: "https://discord.gg/mGtxT4K5pE",
    techStack: ["Node.js", "Express.js", "Discord.js", "MongoDB", "JWT"],
  },
  {
    title: "GitHub CLI",
    description:
      "A handy tool so that you don't have to go to github again and again to create new repos for your project.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWiTtItZboRmxsdPVbkWdypw8bs81jsbI9vg&s",
    link: "https://github.com/anuj-thakur-513/GitHub-CLI",
    techStack: ["Node.js"],
  },
  {
    title: "URL Expander CLI",
    description: "A CLI based short URL expander to check malicious links without opening them in browser.",
    link: "https://github.com/anuj-thakur-513/CLI-URL-Expander",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/external-link-3d-icon-download-in-png-blend-fbx-gltf-file-formats--maximize-url-expand-user-interface-pack-icons-7358150.png?f=webp",
    techStack: ["Node.js"],
  },
];

export { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, projectList };
