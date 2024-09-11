import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import styled from "styled-components";
import useScrollDirection from "../hooks/useScrollDirection";

const CustomNavbar = styled(Navbar)`
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  transition: transform 0.3s ease-in-out;
  background: linear-gradient(135deg, #0d0d1a, #2a2a5f);
  transform: translateY(${(props) => (props.hide ? "-100%" : "0")});
  z-index: 999;

  .nav-link {
    color: #e0e0e0 !important;
    margin: 0 1rem;
    &:hover {
      color: #7b68ee !important;
    }
  }
`;

const CustomBrand = styled(Navbar.Brand)`
  color: #7b68ee !important;
  font-weight: bold;
  font-size: 1.5rem;
`;

const CustomNav = styled(Nav)`
  margin-left: auto;
`;

const NavbarComponent = () => {
  const isScrollingUp = useScrollDirection();

  return (
    <CustomNavbar hide={!isScrollingUp} expand="lg">
      <CustomBrand href="#"><img src="./avatar.png" style={{ width: '80px', height: '60px' }} alt="PORTFOLIO" /></CustomBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <CustomNav className="ml-auto">
          <Link className="nav-link" to="home" smooth={true} duration={200}>
            Home
          </Link>
          <Link className="nav-link" to="about" smooth={true} duration={200}>
            About
          </Link>
          <Link
            className="nav-link"
            to="work-experience"
            smooth={true}
            duration={200}
          >
            Work Experience
          </Link>
          <Link className="nav-link" to="projects" smooth={true} duration={200}>
            Projects
          </Link>
          <Link className="nav-link" to="contact" smooth={true} duration={200}>
            Contact Me
          </Link>
          <a
            className="nav-link"
            href="https://drive.google.com/file/d/1_CWKO6vzI3zK2hU2XJyD877xhBvNOq6r/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </CustomNav>
      </Navbar.Collapse>
    </CustomNavbar>
  );
};

export default NavbarComponent;
