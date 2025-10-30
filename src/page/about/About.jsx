import React from "react";
import PageTransition from "../../components/PageTransition";
import teamItem1 from "../../img/teamItem1.jpg";
import teamItem2 from "../../img/teamItem2.jpg";
import teamItem3 from "../../img/teamItem3.jpg";
import ibrahim from "../../img/ibrahim.jpg";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import "./about.css";

const teamData = [
  {
    name: "Ali",
    Gender: "Male",
    title: "Marketing Manager",
    description:
      "Skilled in digital marketing strategies. Focuses o innovative campaigns for brand growth. Loves sharing the story behind each fragrance",
    image: teamItem1,
  },
  {
    name: "Esraa",
    Gender: "Female",
    title: "Perfume Specialist",
    description:
      "Passionate about creating unique fragrances. Background in chemistry with 5 years of experience. Excellent at understanding customer preferences",
    image: teamItem2,
  },
  {
    name: "Ibrahim",
    Gender: "Male",
    title: "Sales Consultant",
    description:
      "Experienced in customer service for 4 years. Helps customers find their perfect scent. Known for creating a welcoming shopping experience",
    image: teamItem3,
  },
];

function About() {
  return (
    <PageTransition>
      <div className="about_page">
        <div className="container">
          {/* About Us */}
          <h1 className="about_title">About Us</h1>
          <p className="about_p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            sequi laboriosam repudiandae. Quod nesciunt non labore doloremque
            culpa vitae. Minus rem dolores in praesentium, velit animi minima et
            voluptatibus optio architecto iste facilis labore tempora, odio
            doloribus, adipisci sed sit corrupti sapiente numquam culpa? Ipsa
            aperiam hic nesciunt, tempora ex velit odit a architecto quod vitae,
            odio cumque voluptatibus, corrupti dolor perferendis eius. Enim nisi
            unde, quos deserunt pariatur ea necessitatibus id distinctio?
            Tempora non ipsam debitis modi velit quae voluptatibus. Quos quis
            maiores eos minima sint. Itaque veritatis possimus eos, doloribus
            quidem eveniet cupiditate sapiente saepe, illo at aperiam!
          </p>
          {/* Founder Section */}
          <section className="founder">
            <h1>The Founder</h1>
            <p className="border" />
            <div className="container">
              <div className="founder_img">
                <img src={ibrahim} alt="Ibrahim Elshamy" />
              </div>
              <div className="founder_content">
                <h2>Eng. Ibrahim Elshamy</h2>
                <p>
                  Innovative Front-End Developer and Communication Engineer with
                  a strong focus on building dynamic, responsive web
                  applications using React. Skilled in translating complex ideas
                  into user-friendly digital experiences with clean, efficient
                  code. Passionate about modern web technologies, performance
                  optimization, and creating seamless user interfaces that
                  elevate brand impact.
                </p>
                <div className="team_icons">
                  <a
                    href="https://www.facebook.com/ibrahim.elshamy.370177"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://github.com/Ibrahim-Elshamy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Team Section */}

          <section className="team">
            <h1>Our Team</h1>
            <p className="border" />
            <div className="container">
              {teamData.map((member, index) => (
                <div className="team_item" key={index}>
                  <img src={member.image} alt={member.title} />
                  <div className="team_content">
                    <h3>
                      {member.Gender.includes("Male") ? "Mr: " : "Ms: "}
                      <span>{member.name}</span>
                    </h3>
                    <h2>{member.title}</h2>
                    <h5>{member.description}</h5>
                  </div>
                  <div className="team_icons">
                    <a href="#" aria-label="Facebook">
                      <FaFacebookF />
                    </a>
                    <a href="#" aria-label="LinkedIn">
                      <FaLinkedinIn />
                    </a>
                    <a href="#" aria-label="Twitter">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}

export default About;
