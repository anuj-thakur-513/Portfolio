import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const WorkExperience = () => {
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const workExperience = [
    {
      title: "Software Engineer",
      company: "MathonGo",
      duration: "Jul 2024 - Present",
      description:
        "Focused on backend development, Optimized Redis fixing memory leaks slashing storage usage from 12GB to 700MB. Wrote scripts for automating data consumption from DB which saved 2-3 hours/day. Integrate webengage & mixpanel from scratch on the platform. Integrate reattempt feature for selected tests. Developed a feature allowing the same test to be started on different dates for different packs. Implemented single device login only for enhanced security.",
    },
    {
      title: "Data Analyst Intern",
      company: "Scaler",
      duration: "Jun 2023 - Jun 2024",
      description:
        "Led the development of comprehensive dashboards, utilizing a ground-up approach and implementing automation to reduce manual workload by 5% for the Sales Team. Developed a Python automation script for optimizing Key Result (KR) reporting, boosting efficiency and accuracy in metric delivery, saving 10 hours per month.",
    },
  ];

  return (
    <Section id="work-experience">
      <AnimatedContent
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={containerVariants}
      >
        <h3>Work Experience</h3>
        <TimelineContainer>
          <motion.div
            className="line"
            variants={lineVariants}
            animate={controls}
          />
          {workExperience.map((job, index) => (
            <TimelineItem key={index} variants={itemVariants}>
              <TimelineContent>
                <h4>{job.title}</h4>
                <h5>{job.company}</h5>
                <p className="duration">{job.duration}</p>
                <p>{job.description}</p>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </AnimatedContent>
    </Section>
  );
};

const Section = styled.section`
  padding: 6rem 2rem;
  color: #e0e0e0;
  background-color: #1a1a2e;
  text-align: center;
`;

const AnimatedContent = styled(motion.div)`
  max-width: 1000px;
  margin: 0 auto;

  h3 {
    color: #7b68ee;
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

const TimelineContainer = styled(motion.div)`
  position: relative;
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;

  .line {
    position: absolute;
    width: 6px;
    background-color: #7b68ee;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    background: #7b68ee;
    z-index: 0;
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  z-index: 1;

  &:nth-child(odd) {
    left: 0;
  }

  &:nth-child(even) {
    left: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: #1a1a2e;
    border: 4px solid #7b68ee;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  &:nth-child(even)::after {
    left: -16px;
  }
`;

const TimelineContent = styled.div`
  padding: 20px 30px;
  background-color: #222;
  position: relative;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h4 {
    color: #7b68ee;
    margin-bottom: 0.5rem;
  }

  h5 {
    color: #e0e0e0;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    text-align: left;
  }

  .duration {
    font-style: italic;
    color: #7b68ee;
  }
`;

export default WorkExperience;
