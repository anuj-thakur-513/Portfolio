import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import styled from "styled-components";

const Home = () => {
  const controlsText = useAnimation();
  const controlsAvatar = useAnimation();

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: false,
  });
  const { ref: avatarRef, inView: avatarInView } = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (textInView) {
      controlsText.start({ opacity: 1, x: 0 });
    } else {
      controlsText.start({ opacity: 0, x: -30 });
    }
  }, [textInView, controlsText]);

  useEffect(() => {
    if (avatarInView) {
      controlsAvatar.start({ opacity: 1, scale: 1.0 });
    } else {
      controlsAvatar.start({ opacity: 0, scale: 0.5 });
    }
  }, [avatarInView, controlsAvatar]);

  return (
    <HomeContainer id="home">
      <Content>
        <AnimatedText
          ref={textRef}
          animate={controlsText}
          initial={{ opacity: 0, x: -30 }}
          transition={{ duration: 1, type: "spring", damping: 5 }}
        >
          <h1>Welcome to my Portfolio</h1>
          <p>
            👋 Hi, I&apos;m Anuj Thakur, a passionate Software Engineer at a dynamic
            startup. I thrive on solving complex problems and building
            innovative solutions that make a difference. Explore my portfolio to
            see the exciting projects I&apos;ve worked on, my diverse skill set, and
            what drives my love for technology and continuous learning.
          </p>
        </AnimatedText>
      </Content>
      <AvatarContainer
        ref={avatarRef}
        animate={controlsAvatar}
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", damping: 10 }}
      >
        <Avatar src="/3d-avatar.png" alt="My Avatar" />
      </AvatarContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.section`
  background-color: #1a1a2e;
  color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  padding: 5rem;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const Content = styled.div`
  flex: 1;
  max-width: 600px;
  padding-right: 2rem;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-top: 2rem;
  }
`;

const AnimatedText = styled(motion.div)`
  will-change: opacity, transform;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #7b68ee;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const AvatarContainer = styled(motion.div)`
  will-change: opacity, transform;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.img`
  object-fit: cover;
  width: 60%;
  height: 60%;
`;

export default Home;
