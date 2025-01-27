import { FaLinkedin, FaGithub, FaEnvelope, FaYoutube } from "react-icons/fa";
import Badge from "./Badge";
import VerticalLine from "./VerticalLine";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";

const Home = () => {
  return (
    <div className="flex justify-center">
      <main className="mt-8 flex-col items-center">
        {/* Hero Section */}
        <section id="about" className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="relative cursor-pointer">
            <div className="w-28 h-28 bg-white rounded-full absolute inset-0"></div>
            <img
              src="/avatar.png"
              alt="Profile"
              className="w-28 h-28 rounded-full scale-90 hover:scale-100 duration-150 relative z-10"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold flex items-center gap-2">
              Hey 👋, I&apos;m Anuj Thakur
            </h1>
            <p className="text-sm font-semibold text-black dark:text-white mt-2">
              a full-stack software engineer, from India.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/anuj-thakur-s19/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 duration-300"
              >
                <FaLinkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://x.com/anujthakur05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 duration-300"
              >
                <FaXTwitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://github.com/anuj-thakur-513"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 duration-300"
              >
                <FaGithub className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="mailto:anujthakur0103@gmail.com"
                className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 duration-300"
              >
                <FaEnvelope className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
              <a
                href="https://www.youtube.com/@anujthakur05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 duration-300"
              >
                <FaYoutube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mt-10">
          <h2 className="text-l font-semibold mb-4">about me.</h2>
          <p className="text-black dark:text-white max-w-2xl text-sm">
            I&apos;m a passionate full-stack developer who learns and transforms complex problems
            into simple, beautiful, and intuitive solutions through development and design.
          </p>
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg max-w-2xl">
            <p className="text-sm text-black dark:text-white">
              I&apos;m open to collaborate with talented individuals and contribute to impactful
              projects. If you&apos;d like to learn more about my work or discuss potential
              opportunities, feel free to reach out!
            </p>
            <div className="mt-4 flex gap-4">
              <button
                className="px-3 py-2 bg-black text-white text-sm rounded-md"
                onClick={() => {
                  window.open("https://x.com/anujthakur05", "_blank");
                }}
              >
                Drop message on X
              </button>
              <button
                className="py-2 group text-sm flex items-center"
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1_CWKO6vzI3zK2hU2XJyD877xhBvNOq6r/view?usp=drive_link",
                    "_blank"
                  );
                }}
              >
                Resume
                <span className="scale-90 group-hover:ml-1 transition-all duration-300">
                  <ArrowUpRight />
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="work-experience" className="mt-10">
          <h2 className="text-l font-semibold mb-4">work experience.</h2>
          <div className="space-y-8 max-w-2xl">
            <div className="relative flex items-start group">
              <VerticalLine />
              <div className="ml-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-md font-bold">Software Engineer</p>
                    <a
                      href="https://www.mathongo.com/"
                      className="text-xs text-black dark:text-white"
                    >
                      at <span className="underline">MathonGo</span>
                    </a>
                  </div>
                  <span className="text-xs font-semibold text-black dark:text-white">
                    jun, 2024 - present
                  </span>
                </div>
                <p className="mt-2 text-sm text-black dark:text-white">
                  Optimized Redis to resolve memory leaks, reducing storage usage from 12GB to 2GB.
                  Integrated Webengage for marketing analytics and notifications, developed a
                  Journey Tracer microservice to handle 10k+ test requests concurrently, and
                  implemented a Freemium functionality, boosting payments by 10%. Additionally,
                  designed and implemented a percentile prediction feature from scratch for various
                  tests like JEE Mains and Advanced.
                </p>
              </div>
            </div>

            <div className="relative flex items-start group">
              <VerticalLine />
              <div className="ml-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-medium">Data Analyst Intern</h5>
                    <a
                      href="https://www.scaler.com/"
                      className="text-xs text-black dark:text-white"
                    >
                      at <span className="underline">Scaler</span>
                    </a>
                  </div>
                  <span className="text-xs font-semibold text-black dark:text-white">
                    jun, 2023 - jun, 2024
                  </span>
                </div>
                <p className="mt-2 text-sm text-black dark:text-white">
                  Developed an API for alumni filters as a sentry, increasing engagement by 20%.
                  Enhanced query performance on Redshift by 2% through optimization, reducing server
                  load. Created a Python automation script to streamline Key Result (KR) reporting,
                  saving 10 hours per month and improving metric accuracy. Led the development of
                  comprehensive dashboards for Scaler School of Technology, reducing the Sales
                  Team&apos;s manual workload by 5% through automation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mt-10">
          <h2 className="text-l font-semibold mb-4">projects.</h2>
          <div className="space-y-8 max-w-2xl">
            {/* Project 1 */}
            <div className="relative flex items-start group">
              <VerticalLine />
              <div className="ml-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-md font-bold">
                      Scale-Chat [Backend]
                      <span className="ml-2">
                        <Badge text="📦 Completed" />
                      </span>
                    </p>
                    <p className="text-xs font-semibold mt-1">
                      <strong>Tech Stack: </strong> node.js, express, postgreSQL, redis, kafka
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/anuj-thakur-513/ScaleChat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-black flex items-center dark:text-white hover:scale-105 duration-150"
                    >
                      source code
                      <span className="scale-90">
                        <ArrowUpRight />
                      </span>
                    </a>
                  </div>
                </div>
                <ul className="mt-2 space-y-2 text-sm text-black dark:text-white list-disc pl-4">
                  <li>
                    Implemented JWT-based authentication to ensure secure access to chat routes.
                  </li>
                  <li>
                    Leveraged Redis Pub/Sub model to efficiently scale WebSocket connections to
                    handle 1000+ users.
                  </li>
                  <li>
                    Integrated Apache Kafka to optimize database write operations by 25% - 30%.
                  </li>
                  <li>
                    Set up Cron Job to automate the deletion of messages from Redis once they are
                    pushed to the database.
                  </li>
                  <li>
                    Designed and implemented a microservices-oriented architecture, enhancing
                    scalability and maintainability by decoupling services for Redis and Kafka.
                  </li>
                </ul>
              </div>
            </div>
            {/* Project 2 */}
            <div className="relative flex items-start group">
              <VerticalLine />
              <div className="ml-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-md font-bold">
                      Password Manager
                      <span className="ml-2">
                        <Badge text="📦 Completed" />
                      </span>
                    </p>
                    <p className="text-xs font-semibold mt-1">
                      <strong>Tech Stack: </strong> react.js, express, mongoDb, redis, AWS, NGINX
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://password-manager.anuj-thakur.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm group1 text-black flex items-center dark:text-white hover:scale-105 duration-150"
                    >
                      live preview
                      <span className="scale-90">
                        <ArrowUpRight />
                      </span>
                    </a>
                    <a
                      href="https://github.com/anuj-thakur-513/password-manager"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-black flex items-center dark:text-white hover:scale-105 duration-150"
                    >
                      source code
                      <span className="scale-90">
                        <ArrowUpRight />
                      </span>
                    </a>
                  </div>
                </div>
                <ul className="mt-2 space-y-2 text-sm text-black dark:text-white list-disc pl-4">
                  <li>
                    A full-fledged password manager which stores passwords using AES encryption.
                  </li>
                  <li>
                    Integrated refresh token functionality to automatically update access tokens
                    upon expiration, ensuring continuous service access.
                  </li>
                  <li>
                    Integrated OTP confirmation for creating accounts and resetting passwords to
                    enhance security and prevent spam accounts creation.
                  </li>
                  <li>
                    Created a deployment pipeline using github actions which automatically deploys
                    to the EC2 instance. Used NGINX as a reverse-proxy server for hosting
                  </li>
                </ul>
              </div>
            </div>
            {/* Project 3 */}
            <div className="relative flex items-start group">
              <VerticalLine />
              <div className="ml-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-md font-bold">
                      Deployment CLI Tool
                      <span className="ml-2">
                        <Badge text="📦 Completed" />
                      </span>
                    </p>
                    <p className="text-xs font-semibold mt-1">
                      <strong>Tech Stack: </strong> node.js, AWS, NGINX
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/anuj-thakur-513/deploy-nodejs-cli"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-black flex items-center dark:text-white hover:scale-105 duration-150"
                    >
                      source code
                      <span className="scale-90">
                        <ArrowUpRight />
                      </span>
                    </a>
                  </div>
                </div>
                <ul className="mt-2 space-y-2 text-sm text-black dark:text-white list-disc pl-4">
                  <li>
                    A CLI tool to deploy projects directly to a new or already existing EC2
                    instance.
                  </li>
                  <li>
                    Deploys nodejs backends and reactjs frontends (both TS & JS) directly without
                    any hassle with just one command.
                  </li>
                  <li>
                    Uses NGINX as reverse proxy server to deploy frontends which can be accessed on
                    port 80 directly.
                  </li>
                  <li>
                    Created a deployment pipeline using github actions which automatically deploys
                    to the EC2 instance.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section id="skills" className="mt-10">
          <h2 className="text-l font-semibold mb-2">skills.</h2>
          <div className="mt-1 flex flex-wrap gap-2">
            <Badge text="javascript" isHover={true} />
            <Badge text="typescript" isHover={true} />
            <Badge text="java" isHover={true} />
            <Badge text="python" isHover={true} />
            <Badge text="fastapi" isHover={true} />
            <Badge text="react.js" isHover={true} />
            <Badge text="node.js" isHover={true} />
            <Badge text="express.js" isHover={true} />
            <Badge text="prisma" isHover={true} />
            <Badge text="mongoDb" isHover={true} />
            <Badge text="postgreSQL" isHover={true} />
          </div>
          <div className="mt-1 flex flex-wrap gap-2">
            <Badge text="firebase" isHover={true} />
            <Badge text="redux" isHover={true} />
            <Badge text="redis" isHover={true} />
            <Badge text="kafka" isHover={true} />
            <Badge text="docker" isHover={true} />
            <Badge text="AWS" isHover={true} />
            <Badge text="NGINX" isHover={true} />
            <Badge text="git" isHover={true} />
            <Badge text="github actions" isHover={true} />
            <Badge text="go" isHover={true} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
