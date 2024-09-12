import { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { projectList } from "../constants";

const Section = styled(motion.section)`
  padding: 4rem 2rem;
  color: #ffffff;
  background: linear-gradient(135deg, #0d0d1a, #2a2a5f);
  text-align: center;
  h2 {
    color: #7b68ee;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 1.2px;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ProjectContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(37, 39, 77, 0.75);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  width: 400px;
  padding: 1.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  perspective: 2000px;
  transition: transform 0.1s ease;
  display: flex;
  flex-direction: column;
`;

const ProjectContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem; // Add some space above the buttons
`;

const ProjectImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  height: 100px;
`;

const ProjectImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
`;

const ProjectTitle = styled.h3`
  color: #ffffff;
  font-size: 1.25rem; /* Adjusted font size for better visual balance */
  margin-bottom: 0.75rem;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: #e0e0e0;
  margin-bottom: 0.75rem;
`;

const ProjectButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.7rem 1.4rem;
  background: linear-gradient(135deg, #7b68ee, #6a5acd);
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    background: transparent;
    border-color: #7b68ee;
    color: #7b68ee;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const TechStackSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const TechStackLabel = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #a0a0a0;
  margin-right: 0.75rem;
  white-space: nowrap;
`;

const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  flex-grow: 1;
`;

const TechTag = styled.span`
  background: rgba(123, 104, 238, 0.2);
  color: #7b68ee;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 5;
    const y = e.clientY - top - height / 5;

    // Calculate rotation angles
    const rotateX = (y / height) * 10;
    const rotateY = (x / width) * -10;

    // Apply transformation
    card.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform =
      "perspective(2000px) rotateX(0) rotateY(0)";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <Section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      id="projects"
    >
      <motion.h2 variants={itemVariants}>My Projects</motion.h2>
      <motion.p variants={itemVariants}>
        Some of my side projects which I&apos;ve worked on in my Free Time.
      </motion.p>
      <ProjectContainer variants={containerVariants}>
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            variants={itemVariants}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <ProjectContent>
              <ProjectImageContainer>
                <ProjectImage src={project.image} alt={project.title} />
              </ProjectImageContainer>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              {project.techStack && (
                <TechStackSection>
                  <TechStackLabel>Tech Stack:</TechStackLabel>
                  <TechStackContainer>
                    {project.techStack.map((tech, techIndex) => (
                      <TechTag key={techIndex}>{tech}</TechTag>
                    ))}
                  </TechStackContainer>
                </TechStackSection>
              )}
            </ProjectContent>
            <ButtonContainer>
              {project.deployedLink && (
                <ProjectButton
                  href={project.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe /> Deployed Link
                </ProjectButton>
              )}
              <ProjectButton
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> View Project
              </ProjectButton>
            </ButtonContainer>
          </ProjectCard>
        ))}
      </ProjectContainer>
    </Section>
  );
};

export default Projects;
