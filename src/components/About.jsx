import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import {
  FaPython,
  FaJava,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaAws,
} from "react-icons/fa";
import {
  SiJavascript,
  SiDocker,
  SiMongodb,
  SiRedis,
  SiPostgresql,
  SiMysql,
  SiCplusplus,
  SiC,
  SiNodedotjs,
  SiReact,
  SiExpress,
  SiFastapi,
  SiRedux,
  SiGit,
  SiApachekafka,
  SiFirebase,
  SiTypescript,
  SiGithubactions,
} from "react-icons/si";

const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <Section id="about">
      <AnimatedContent
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={containerVariants}
      >
        <h2>About Me</h2>
        <p>
          I&apos;m a software engineer with a passion for creating innovative
          solutions and exploring cutting-edge technologies. My journey in the
          tech world has been driven by curiosity and a constant desire to learn
          and grow.
        </p>
        <p>
          With experience in various programming languages and frameworks, I
          enjoy tackling complex problems and turning ideas into reality through
          code. When I&apos;m not coding, you can find me exploring new tech trends,
          contributing to open-source projects, or sharing my knowledge with the
          developer community.
        </p>
        <h3>Technologies & Tools I Work With</h3>
        <IconsContainer
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {[
            { Icon: FaJava, title: "Java" },
            { Icon: FaPython, title: "Python" },
            { Icon: SiC, title: "C" },
            { Icon: SiCplusplus, title: "C++" },
            { Icon: SiMysql, title: "MySQL" },
            { Icon: SiPostgresql, title: "PostgreSQL" },
            { Icon: SiMongodb, title: "MongoDB" },
            { Icon: SiJavascript, title: "JavaScript" },
            { Icon: SiTypescript, title: "TypeScript" },
            { Icon: FaHtml5, title: "HTML" },
            { Icon: FaCss3, title: "CSS" },
            { Icon: SiReact, title: "React" },
            { Icon: SiNodedotjs, title: "Node.js" },
            { Icon: SiExpress, title: "Express" },
            { Icon: SiFastapi, title: "FastAPI" },
            { Icon: SiRedux, title: "Redux" },
            { Icon: SiGit, title: "Git" },
            { Icon: FaGithub, title: "GitHub" },
            { Icon: SiGithubactions, title: "GitHub Actions" },
            { Icon: SiDocker, title: "Docker" },
            { Icon: FaAws, title: "AWS" },
            { Icon: SiRedis, title: "Redis" },
            { Icon: SiApachekafka, title: "Kafka" },
            { Icon: SiFirebase, title: "Firebase" },
          ].map(({ Icon, title }, index) => (
            <IconWrapper key={index} variants={itemVariants}>
              <Icon title={title} />
              <Tooltip>{title}</Tooltip>
            </IconWrapper>
          ))}
        </IconsContainer>
      </AnimatedContent>
    </Section>
  );
};

const Section = styled.section`
  padding: 6rem 2rem;
  color: #e0e0e0;
  background: linear-gradient(135deg, #0d0d1a, #2a2a5f);
  text-align: center;
`;

const AnimatedContent = styled(motion.div)`
  max-width: 1000px;
  margin: 0 auto;

  h2 {
    color: #7b68ee;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  h3 {
    color: #7b68ee;
    font-size: 1.8rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    text-align: justify;
  }
`;

const IconsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
`;

const IconWrapper = styled(motion.div)`
  position: relative;
  font-size: 2.5rem;
  color: #7b68ee;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #e0e0e0;
    transform: rotate(15deg) scale(1.2);
  }

  &:hover > div {
    opacity: 1;
    visibility: visible;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #7b68ee;
  color: #1a1a2e;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  white-space: nowrap;
  z-index: 1;
`;

export default About;
