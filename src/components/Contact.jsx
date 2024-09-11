import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "../constants";

const Contact = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false); // New state to handle form validation

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  useEffect(() => {
    // Validate form whenever input changes
    const isValidEmail = (email) => {
      // Simple email regex validation
      return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    };

    // Check if all fields are filled and email is valid
    const isValid =
      formState.name.trim() !== "" &&
      isValidEmail(formState.email) &&
      formState.message.trim() !== "";

    setIsFormValid(isValid);
  }, [formState]);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formState, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setSubmitStatus("success");
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  return (
    <Section id="contact">
      <AnimatedContent
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={containerVariants}
      >
        <h2>Get in Touch</h2>
        <p>
          Have a question or want to work together? I&apos;d love to hear from
          you! Drop me a message and I&apos;ll get back to you as soon as
          possible.
        </p>
        <Form onSubmit={handleSubmit}>
          <FormRow variants={itemVariants}>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formState.name}
              onChange={handleInputChange}
            />
          </FormRow>
          <FormRow variants={itemVariants}>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formState.email}
              onChange={handleInputChange}
            />
          </FormRow>
          <FormRow variants={itemVariants}>
            <Textarea
              name="message"
              placeholder="Your Message"
              required
              value={formState.message}
              onChange={handleInputChange}
            />
          </FormRow>
          <FormRow variants={itemVariants}>
            <Button type="submit" disabled={!isFormValid || isSubmitting}>
              {isSubmitting ? <Spinner /> : "Send Message"}
            </Button>
          </FormRow>
          {submitStatus === "success" && (
            <SuccessMessage>Message sent successfully!</SuccessMessage>
          )}
          {submitStatus === "error" && (
            <ErrorMessage>
              Failed to send message. Please try again.
            </ErrorMessage>
          )}
        </Form>
      </AnimatedContent>
    </Section>
  );
};

const Section = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  color: #e0e0e0;
  text-align: center;
`;

const AnimatedContent = styled(motion.div)`
  max-width: 700px;
  margin: 0 auto;

  h2 {
    color: #7b68ee;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2.5rem;
    text-align: center;
    color: #b8b8b8;
  }
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const FormRow = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Input = styled.input`
  padding: 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  outline: none;
  color: #1a1a2e;
  background-color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;

  &:focus {
    box-shadow: 0 0 0 2px #7b68ee;
  }
`;

const Textarea = styled.textarea`
  padding: 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  outline: none;
  color: #1a1a2e;
  background-color: rgba(255, 255, 255, 0.9);
  min-height: 150px;
  transition: all 0.3s ease;

  &:focus {
    box-shadow: 0 0 0 2px #7b68ee;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  background-color: #7b68ee;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #5a4bcf;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  &:disabled {
    background-color: #4a4a6a;
    cursor: not-allowed;
  }
`;

const Spinner = styled.div`
  border: 3px solid #ffffff;
  border-top: 3px solid #7b68ee;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const SuccessMessage = styled.div`
  color: #4caf50;
  font-weight: bold;
  margin-top: 1rem;
`;

const ErrorMessage = styled.div`
  color: #f44336;
  font-weight: bold;
  margin-top: 1rem;
`;

export default Contact;
