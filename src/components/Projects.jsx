import { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaGlobe } from "react-icons/fa";

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
  overflow: hidden; // Prevent content from overflowing
`;

const ProjectDescription = styled.p`
  line-height: 1.6;
  color: #e0e0e0;
  margin-bottom: 1.5rem;
  overflow-y: auto;
  flex-grow: 1;
  padding-right: 5px; // Add some padding for the scrollbar
`;

const ProjectImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px; // Fixed height for image container
  margin-bottom: 1rem;
`;

const ProjectImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
`;

const ProjectTitle = styled.h3`
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem; // Add some space above the buttons
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

  const projectList = [
    {
      title: "Attendance Tracker",
      description:
        "An attendance tracking system with Google OAuth for students so they know what's their attendance percentage. Users can access their time table and get to know how many classes can be left without affecting their attendance and how many more classes are to be attended.",
      link: "https://github.com/anuj-thakur-513/attendance-tracker-frontend",
      deployedLink: "https://myattendance-tracker.netlify.app/",
      image: "https://cdn-icons-png.flaticon.com/512/3589/3589030.png",
    },
    {
      title: "YouTube Downloader",
      description:
        "A CLI tool to download videos and playlists using the youtube link in highest quality in one go. Why? Because there's no tool live on the internet to download whole YouTube playlist in one go.",
      link: "https://github.com/anuj-thakur-513/youtube-downloader",
      image:
        "https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_youtube-512.png",
    },
    {
      title: "ScaleChat Server",
      description:
        "A scalable chat application server made using Redis & Apache Kafka to make websockets scalable and reduce DB operations. It utilizes Redis PUB/SUB for broadcasting messages to different websockets.",
      link: "https://github.com/anuj-thakur-513/ScaleChat",
      image:
        "https://img.freepik.com/premium-vector/speech-bubbles-line-coloured-vector-icon-chat-app-icon_787461-2127.jpg",
    },
    {
      title: "URL Shortener Discord Bot",
      description:
        "A URL shortener backend service made with 3RE architecture with JWT based authentication. Users can view analytics of their URL. A discord bot integrated with this API service to shorten the URL in one go.",
      image:
        "https://images.golinks.io/blog/wp-content/uploads/2023/08/28145505/Blog-Header%402x-3.png",
      link: "https://github.com/anuj-thakur-513/URL-Shortener-Discord-Bot",
      deployedLink: "https://discord.gg/mGtxT4K5pE",
    },
    {
      title: "GitHub CLI",
      description:
        "Create any repo with desired visibility and description. A handy tool so that you don't have to go to github again and again to create new repos for your project.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWiTtItZboRmxsdPVbkWdypw8bs81jsbI9vg&s",
      link: "https://github.com/anuj-thakur-513/GitHub-CLI",
    },
    {
      title: "URL Expander CLI",
      description:
        "A CLI based short URL expander because there are tons of malicious links circulating on the internet and we don't wanna visit some URL which doesn't even specify about the company but is just a short URL.",
      link: "https://github.com/anuj-thakur-513/CLI-URL-Expander",
      image:
        "https://cdn3d.iconscout.com/3d/premium/thumb/external-link-3d-icon-download-in-png-blend-fbx-gltf-file-formats--maximize-url-expand-user-interface-pack-icons-7358150.png?f=webp",
    },
  ];

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
