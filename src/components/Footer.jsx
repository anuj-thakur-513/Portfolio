import styled from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #0d0d1a, #2a2a5f);
  color: #e0e0e0;
  padding: 4rem; /* Increased padding */
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem; /* Increased gap between icons */
  margin-top: 2rem; /* Increased margin to space out elements */
`;

const IconLink = styled.a`
  color: #7b68ee;
  font-size: 1.5rem; /* Increased icon size */
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem; /* Increased padding around each icon */
  border-radius: 50px;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
  }
`;

const FooterText = styled.p`
  font-size: 1.5rem; /* Increased text size */
  margin: 0;
  padding-bottom: 2rem; /* Added more padding below text */
`;

const FooterComponent = () => {
  return (
    <FooterContainer>
      <FooterText>Stay connected with me</FooterText>
      <SocialLinks>
        <IconLink
          href="https://github.com/anuj-thakur-513"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/anuj-thakur-s19/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </IconLink>
        <IconLink
          href="https://x.com/anujthakur05"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter /> Twitter
        </IconLink>
        <IconLink href="mailto:anujthakur0103@gmail.com">
          <FaEnvelope /> Email
        </IconLink>
      </SocialLinks>
    </FooterContainer>
  );
};

export default FooterComponent;
