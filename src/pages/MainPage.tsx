import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { Project } from '../types/index'
const projects: Project[] = [
    {
        title: "mero budget",
        description:
            "I developed a finance support platform that helps users effortlessly track their income and expenses, providing smart insights through a clean, productive dashboard. Forget the hassle of managing your finances on pen and paper or scribbling notes—just click the link and start monitoring your monthly income vs. expenses in real time.",
        image:
            "/image/budget.png",
        technologies: ["React", "Node.js", "MongoDB", "Express js", "Tailwind CSS", "Redux"],
        liveUrl: "https://merobudget.vercel.app",
        githubUrl: "#",

    },
    {
        title: "Accomodation",
        description:
            "As a backend intern, I developed the backend for a hotel accommodation system using Node.js. During this experience, I learned how to handle errors, create models, build APIs, integrate third parties API such as Twilio, google OAUTH and write clean, well-structured code while following SRS guidelines.",
        image:
            "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
        technologies: ["React", "Node.js", "MongoDB", "Express js"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "BiZNepal",
        description:
            "BizNepal is business directory with sentiment analysis of review, this is my final year group project where I work here as frontend developer and contribute in training of model for sentiment analysis, I use react JS as frontend.",
        image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
        technologies: ["React Js", "PostgresSQL", ".NET"],
        liveUrl: "#",
        githubUrl: "https://github.com/UTSAB-NI/BizNepal",
    },
    {
        title: "Currency Converter",
        description:
            "Using valina js and for apis using Exchange Rate API I have built a currency converter, where you can convert currency from one to another. This project is a simple project to convert currency using raw javascript.",
        image: "/image/mudralok.png",
        technologies: ["Javascript", "HTML", "CSS", "Exchange Rate API"],
        liveUrl: "https://mudralok.vercel.app/",
        githubUrl: "https://github.com/Rahulad12/currencyConvertor",
    },
    {
        title: "Password Generator",
        description:
            "Using valina js I have built a password generator, where you can generate password of your choice. This project is a simple project to generate password using raw javascript. You can generate a password as your need by checking the checkboxes.",
        image: "/image/password.png",
        technologies: ["Javascript", "HTML", "CSS"],
        liveUrl: "https://passwordgenerator-tan-ten.vercel.app/",
        githubUrl:
            "https://github.com/Rahulad12/amnilInternshipAssignment/tree/main/project/passwordGenerator",
    },
    {
        title: "School Website",
        description:
            "Using reacts as frontend and node as backend and Mongo Db as database. I had built a website, that will suitable for small school. This website has basic function that every school Needed. Admin Feature are also available to operate this website.",
        image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
        technologies: ["MERN Stack"],
        liveUrl: "#",
        githubUrl: "https://github.com/Rahulad12/demoschoolwebsite",
    },
];

const MainPage: React.FC = () => {
    return (
        <div>
            <ProjectCard projects={projects} />
        </div>
    )
}

export default MainPage
