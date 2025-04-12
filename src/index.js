import './style.scss';
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import Mail from './assets/mail.png'
import Linkedin from './assets/linkedin.png'
import GitHub from './assets/github.png'
import YouTube from './assets/youtube.png'
import Instagram from './assets/instagram.png'
import ClickerGame from './assets/images/ccs.png'
import PlatformerGame from './assets/images/sr.png'
import Website from './assets/images/cms.png'
import LibraryBookProcessor from './assets/images/bp.png'
import Pokedex from './assets/images/ip.png'
import ProfilePic from './assets/images/me.jpg'
import { useEffect, useState } from "react";

// Count up animation for each numeric item in bio container.
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const CountUp = ({ end, duration = 1500 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime;
        const startValue = 0;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutCubic(progress);
            const currentValue = Math.floor(startValue + easedProgress * (end - startValue));

            setCount(currentValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration]);

    return <h2>{count}</h2>;
};

// Calculate age for numeric count up.
const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(2000, 4, 9); // Months are 0-indexed (May = 4)
    let age = today.getFullYear() - birthDate.getFullYear();
    const hasHadBirthdayThisYear =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
        age--;
    }

    return age;
};

const calculateYearsOfExperience = new Date().getFullYear() - 2022;

function Heading({ title }) {
    return (
        <div className="heading">
            <span className="lineBreak"></span>
            <h1>{title}</h1>
            <span className="lineBreak"></span>
        </div>
    );
}

// Reusable Component (Education item)
function EducationItem({ schoolName, degree, years }) {
    const overlayRef = useRef(null);
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - 150; // 300px / 2, the overlay is 300px;
        const y = e.clientY - rect.top - 150; // 300px / 2, the overlay is 300px;

        if (overlayRef.current) {
            overlayRef.current.style.transform = `translate(${x}px, ${y}px)`;
        }
    };

    const handleMouseEnter = () => {
        if (overlayRef.current) {
            overlayRef.current.style.opacity = '1';
        }
    };

    const handleMouseLeave = () => {
        if (overlayRef.current) {
            overlayRef.current.style.opacity = '0';
        }
    };

    return (
        <div
            className="educationItem"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="educationOverlay" ref={overlayRef}></div>
            <h3>{schoolName}</h3>
            <p>{degree}</p>
            <p>{years}</p>
        </div>
    );
}

// Reusable Component (Experience item)
function ExperienceItem({ title, description }) {
    return (
        <div className="experienceItem">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function ProjectItem({ title, description, stack, year, imageUrl, finished, projectUrl }) {
    return (
        <div className="projectItem">
            <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="projectItemLink">
                <div className="flipCardInner">
                    <div className="flipCardFront">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <p>{stack}</p>
                        <p>{year}</p>
                    </div>
                    <div className="flipCardBack">
                        <img src={imageUrl} alt={title} />
                    </div>
                </div>
            </a>
        </div>
    );
}


// Insert projects here.
const projectData = [
    {
        title: "Clicker Game",
        description: "An incremental clicker game I developed for fun. It was my first real coding project because I loved these types of games at the time.",
        stack: "VB, C#",
        year: "2019",
        imageUrl: ClickerGame,
        finished: true,
        projectUrl: 'https://store.steampowered.com/app/1103920/Clickable_Coffee_Shop/'
    },
    {
        title: "Platformer Game",
        description: "A platformer game designed to make the user quit because it is so frustrating. I was definitely in a game development phase during this time.",
        stack: "VB, C#",
        year: "2020",
        imageUrl: PlatformerGame,
        finished: true,
        projectUrl: 'https://store.steampowered.com/app/1399850/Squares_Rage/'
    },
    {
        title: "Client Website",
        description: "A website I designed and developed for a client's business.",
        stack: "HTML, CSS, JavaScript, JQuery",
        year: "2021",
        imageUrl: Website,
        finished: true,
        projectUrl: 'http://centennialmats.com/'
    },
    {
        title: "Library Book Processor",
        description: "My university capstone project which stores, processes, and modifies the inventory of a library.",
        stack: "C#, HTML, CSS, JavaScript, MySQL",
        year: "2022",
        imageUrl: LibraryBookProcessor,
        finished: true,
        projectUrl: 'https://github.com/AjayArora1/Book-Processing-Software-for-Public-Libraries/tree/master'
    },
    {
        title: "Interactive Pokedex",
        description: "A program I made when I first discovered how powerful ReactJS was. Based on an encyclopedia from the popular video game.",
        stack: "ReactJS, HTML, SASS",
        year: "2024",
        imageUrl: Pokedex,
        finished: true,
        projectUrl: 'https://ajayarora1.github.io/Interactive_Pokedex/'
    },
    {
        title: "Family Tree Maker (In Progress)",
        description: "A program I am currently making for the sake of genealogy research which is one of my passions.",
        stack: "ReactJS, HTML, SASS",
        year: "2025",
        finished: false,
        projectUrl: ''
    },
    {
        title: "AI Resume Generator (In Progress)",
        description: "A program I am currently developing that uses AI to generate resumes and cover letters based on their minimal inputs.",
        stack: "ReactJS, HTML, SASS, OpenAI API",
        year: "2025",
        finished: false,
        projectUrl: ''
    }
];


// Reusable Component (Age, Years of Experience, Projects worked on, Projects completed).
function NumericItem({ end, title }) {
    return (
        <div className="numericItem">
            <span className="number">
                <CountUp end={end} />
            </span>
            <span className="countableItem">
                <h2>{title}</h2>
            </span>
        </div>
    );
}

function SocialLink({ href, imgSrc, altText }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="socialLink">
            <img src={imgSrc} alt={altText} />
        </a>
    );
}

function Education(props) {
    return (
        <div>
            <Heading title="Education" />
            <div className="educationItemContainer">
                <EducationItem schoolName="Bishop Carroll High School" degree="High School Diploma" years="2015-2018" />
                <EducationItem schoolName="Thompson Rivers University" degree="Diploma in Information Technology & Management" years="2018-2020" />
                <EducationItem schoolName="Thompson Rivers University" degree="Bachelor's Degree in Computer Science" years="2018-2022" />
            </div>
        </div>  
    );
}

function Experience(props) {
    return (
        <div>
            <Heading title="Experience" />
            <div className="experienceItemContainer">
                <ExperienceItem
                    title="Frontend Developer"
                    description="Delivered and deployed multiple frontend applications for employers and private clients, including two websites and a custom client portal designed to enhance client engagement. Additional personal projects utilizing modern frontend frameworks are featured below."
                />

                <ExperienceItem
                    title="Backend Developer"
                    description="Designed and implemented backend systems across professional and personal projects, including API1130-compliant pipeline monitoring tools, various computer games, and ongoing independent initiatives."
                />

                <ExperienceItem
                    title="I.T. Support"
                    description="Provided technical support for both internal teams and external clients, resolving a wide range of software and hardware issues with efficiency and adaptability. Frequently self-initiated quick learning to address unfamiliar challenges."
                />

                <ExperienceItem
                    title="Team Lead & Educator"
                    description="Led software development teams across multiple projects and coordinated with fellow educators in instructional environments. Delivered technical seminars to groups of up to 10 students, focusing on computer literacy and foundational IT concepts."
                />

            </div>
        </div>
    );
}


function Projects(props) {
    return (
        <div>
            <Heading title="Projects" />
            <div className="projectItemContainer">
                {projectData.map((proj, idx) => (
                    <ProjectItem key={idx} {...proj} />
                ))}
            </div>
        </div>
    );
}


function Bio(props) {
    return (
        <div className="bioContainer">
            <div className="nameJobLocationContainer">
                <h1>Hello, I'm</h1>
                <div className="name-hover">
                    <h1>
                        <span className="firstName">Ajay
                            <span className="lastName"> Arora</span>
                        </span>
                    </h1>
                </div>
                <br /><br />
                <div className="profileImageContainer">
                    <img src={ProfilePic} alt="Profile" />
                </div>
                <h2>Software Developer</h2>
                <h2>Calgary, AB, Canada</h2>
            </div>

            <br/>

            <div className="numericItemContainer">
                <NumericItem end={calculateAge()} title="Years old" />
                <NumericItem end={calculateYearsOfExperience} title="Years of experience" />
                <NumericItem end={projectData.length} title="Projects worked on" />
                <NumericItem end={projectData.filter(p => p.finished).length} title="Projects finished" />
            </div>

            <br />

            <div className="socialInfoContainer">
                <SocialLink href="mailto:arora.ajay90@gmail.com" imgSrc={Mail} altText="Mail" />
                <SocialLink href="https://www.linkedin.com/in/ajay-arora1" imgSrc={Linkedin} altText="Linkedin" />
                <SocialLink href="https://github.com/ajayarora1" imgSrc={GitHub} altText="GitHub" />
                <SocialLink href="https://www.youtube.com/c/your-channel" imgSrc={YouTube} altText="YouTube" />
                <SocialLink href="https://www.instagram.com/555ajayarora" imgSrc={Instagram} altText="Instagram" />
            </div>
        </div>
    );
}

function App() {
    return (
        <div>
            <div className="header">
                <h1>ajayarora<span className="headerNameSuffix">.me</span></h1>
            </div> 
            <link href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@400;600&display=swap" rel="stylesheet"/>
            <div className="hexBackground">
                <Bio />
            </div>
            <Education />
            <Experience />
            <Projects />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);