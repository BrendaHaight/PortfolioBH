import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer, I have honed my skills in front-end like React, as well as back-end technologies like Node.js, PostgreSQL, and MongoDB. My ultimate goal? To step into game development and combine my passion for coding with the creativity of gaming.`;

export const ABOUT_TEXT = `I'm originally from Brazil and now making my way in the US. I'm diving deep into the world of coding, and for me, it's fascinating to see the world through a developer's eyes, understanding the magic behind what users experience. I love learning the intricate details of programming languages. When I'm not coding, you'll probably find me playing video games, especially RPGs, or watching anime. I'm really into Japanese culture and am also learning Japanese.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Full Stack",
    company: "AAA",
    description: `Update soon`,
    technologies: ["JavaScript", "React", "Node.js", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "Recipe Book Application",
    image: project1,
    description:
      "The Recipe Book Application is a full-stack web application that allows users to create, view, and manage their favorite recipes. Users can register, log in, upload images for their recipes, and share their culinary creations.",
    technologies: ["Node.js", "Handlebars", "CSS", "PostgreSQL"],
  },
  {
    title: "FitnessFusion",
    image: project2,
    description:
      "FitnessFusion is a web application designed to help users enroll in fitness classes and manage their fitness memberships. The app allows users to view available classes, enroll in classes, and manage their profiles.",
    technologies: ["MongoDB", "React", "Node.js", "ChakraUI"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio showcasing projects, skills, and contact information.",
    technologies: ["JavaScript", "CSS", "React", "Tailwind"],
  },
];

export const CONTACT = {
  address: "10617 Deer Canyon Rd, Jonestown, TX 78645 ",
  phoneNo: "+1 512 777 8328 ",
  email: "brendahaightt@gmail.com",
};
