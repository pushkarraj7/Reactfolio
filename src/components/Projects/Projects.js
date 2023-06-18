import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import codefolio from "../../Assets/Projects/codefolio.jpeg";
import feast from "../../Assets/Projects/feast.jpeg";
import gfg from "../../Assets/Projects/gfg.jpeg";
import cupid from "../../Assets/Projects/cupid.jpeg";
import shortly from "../../Assets/Projects/shortly.jpeg";
import nit from "../../Assets/Projects/nit.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cupid}
              isBlog={false}
              title="Cupid AI"
              description="Introducing the Pickup Line Generator, a fun and quirky website that uses the power of AI to generate cheesy pickup lines that are sure to make you smile. With just a click of a button, you can get a new pickup line to use on your crush, partner, or even a friend."
              ghLink="https://github.com/pushkarraj7/Cupid-AI"
              demoLink="https://cupidai.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gfg}
              isBlog={false}
              title="GFG-BITD"
              description="I created a website for my college society GFG (GeeksforGeeks). The website showcases our society's activities, upcoming events, and provides information about our members. I designed and developed a modern and user-friendly interface that effectively conveys the mission and values of our society."
              ghLink="https://github.com/pushkarraj7/GFG-BITD"
              demoLink="https://pushkarraj7.github.io/GFG-BITD/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nit}
              isBlog={false}
              title="Issue Connect"
              description="The NIT Patna Staff Issue Resolution project is a web application that allows staff members to report and resolve departmental issues. It streamlines complaint submission, facilitates communication with departments, and ensures prompt resolutions for a better working environment at NIT Patna."
              ghLink="https://github.com/pushkarraj7/nit_patna"
              demoLink="https://nit-patna.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={feast}
              isBlog={false}
              title="FeastFusion"
              description="FeastFusion is a restaurant website created with HTML, CSS, and JavaScript. It showcases an interactive menu, online reservation form, and dynamic features like image sliders, making it a delightful online experience for customers to explore and engage with the restaurant's offerings."
              ghLink="https://github.com/pushkarraj7/FeastFusion"
              demoLink="https://feastfusion.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codefolio}
              isBlog={false}
              title="Codefolio"
              description="HTML, CSS, SCSS, and JavaScript are the building blocks of the web, and I specialize in using these technologies to create beautiful and responsive websites. Whether you need a simple static site or a complex web application, I have the skills and experience to deliver a solution that meets your needs."
              ghLink="https://github.com/pushkarraj7/Codefolio"
              demoLink="https://pushkar-raj.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shortly}
              isBlog={false}
              title="Shortly"
              description="Our link shortener website allows you to easily transform long, cumbersome links into short and concise ones. We have created a user-friendly and efficient platform that enables you to share your favorite websites with ease."
              ghLink="https://github.com/pushkarraj7/url-shortner"
              demoLink="https://url-shortner-shortly.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
