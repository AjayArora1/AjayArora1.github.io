import './style.scss';
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import Mail from './assets/mail.png';
import Linkedin from './assets/linkedin.png';
import GitHub from './assets/github.png';
import YouTube from './assets/youtube.png';
import Instagram from './assets/instagram.png';

import ClickerGame from './assets/images/ccslogo.png';
import PlatformerGame from './assets/images/sr.png';
import Website from './assets/images/cmslogo.png';
import LibraryBookProcessor from './assets/images/bplogo.png';
import Pokedex from './assets/images/iplogo.png';
import ProfilePic from './assets/images/me.jpg';

import Resume from './assets/documents/Ajay Arora Resume.pdf';
import CMSLogo from './assets/images/cmslogo.png';
import PWLogo from './assets/images/pwlogo.png';
import TRULogo from './assets/images/trulogo.png';

import { useEffect, useState } from "react";

const CppLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg";
const CSharpLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg";
const PythonLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg";
const JavascriptLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";

const HTMLLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
const CSSLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg";

const ReactLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
const NodeLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";
const DotNetLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg";

const SQLLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg";
const PostgreSQLLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg";

const AzureLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg";

const LinuxLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg";
const GitLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg";

const RestLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg";

const CICDLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";

const AgileLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg";

// Count up animation for each numeric item in bio container.
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3); const CountUp = ({ end, duration = 1500 }) => {
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
    const today = new Date(); const birthDate = new Date(2000, 4, 9); // Months are 0-indexed (May = 4)
    let age = today.getFullYear() - birthDate.getFullYear(); const hasHadBirthdayThisYear = today.getMonth() > birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
        age--;
    }

    return age;

};

const calculateYearsOfExperience = new Date().getFullYear() - 2022;

function Heading({ title }) { return (<div className="heading"><span className="lineBreak"></span><h1>{title}</h1><span className="lineBreak"></span></div>); }

// Reusable Component (Education item)
function EducationItem({ schoolName, degree, years, logo }) {
    const overlayRef = useRef(null); const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - 150;
        const y = e.clientY - rect.top - 150;

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

            <div className="educationHeader">
                <img src={logo} alt={schoolName} />

                <div className="educationInfo">
                    <h3>{schoolName}</h3>
                    <span className="educationDegree">{degree}</span>
                </div>

                <span className="educationDates">
                    {years}
                </span>
            </div>
        </div>
    );

}

// Reusable Component (Experience item)
function ExperienceItem({ company, title, description, logo, dates }) {
    return (<div className="experienceItem"><div className="experienceHeader"><img src={logo} alt={company} />

        <div className="experienceInfo">
            <h3>{company}</h3>
            <span className="experienceTitle">{title}</span>
        </div>

        <span className="experienceDates">
            {dates}
        </span>
    </div >

        <p>{description}</p>
    </div >
    );

}

function ProjectItem({ title, description, stack, year, imageUrl, projectUrl }) {
    return (<div className="projectItem">

        <div className="projectHeader">
            <img src={imageUrl} alt={title} />

            <div className="projectInfo">
                <h3>
                    {projectUrl ? (
                        <a
                            href={projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {title}
                        </a>
                    ) : (
                        title
                    )}
                </h3>

                <span className="projectStack">
                    {stack}
                </span>
            </div>

            <span className="projectDates">
                {year}
            </span>
        </div>

        <p>{description}</p>

    </div>
    );

}

function SkillsItem({ skill, logo }) { return (<div className="skillsItem"><img src={logo} alt={skill} /><span>{skill}</span></div>); }

// Insert projects here.
const projectData = [{ title: "Pokemon Encyclopedia", description: "Developed a responsive React application that consumes REST APIs to display, search, and filter Pokemon data with reusable components and SASS styling.", stack: "ReactJS, HTML, SASS", year: "2024", imageUrl: Pokedex, finished: true, projectUrl: 'https://ajayarora1.github.io/Interactive_Pokedex/' }, { title: "Library Inventory Processor", description: "Built a full-stack library management application using C#, JavaScript, and MySQL to perform CRUD operations, inventory tracking, and database management.", stack: "C#, HTML, CSS, JavaScript, MySQL", year: "2022", imageUrl: LibraryBookProcessor, finished: true, projectUrl: 'https://github.com/AjayArora1/Book-Processing-Software-for-Public-Libraries/tree/master' }, { title: "Textiles Website", description: "Designed and developed a responsive business website using HTML, CSS, JavaScript, and jQuery with a focus on usability and modern web design.", stack: "HTML, CSS, JavaScript, JQuery", year: "2021", imageUrl: Website, finished: true, projectUrl: 'http://centennialmats.com/' }, { title: "Incremental Game", description: "Developed a desktop incremental game in VB and C#, implementing progression systems, game state management, and interactive user interfaces.", stack: "VB, C#", year: "2019", imageUrl: ClickerGame, finished: true, projectUrl: 'https://store.steampowered.com/app/1103920/Clickable_Coffee_Shop/' }];

// Reusable Component (Age, Years of Experience, Projects worked on, Projects completed).
function NumericItem({ end, title }) { return (<div className="numericItem"><span className="number"><CountUp end={end} /></span><span className="countableItem"><h2>{title}</h2></span></div>); }

function SocialLink({ href, imgSrc, altText }) { return (<a href={href} target="_blank" rel="noopener noreferrer" className="socialLink"><img src={imgSrc} alt={altText} /></a>); }

function Education(props) {
    return (<div><Heading title="Education" /><div className="educationItemContainer"><EducationItem
        schoolName="Thompson Rivers University"
        degree="Bachelor's Degree in Computer Science"
        years="2022"
        logo={TRULogo}
    />

        <EducationItem
            schoolName="Thompson Rivers University"
            degree="Diploma in Information Technology & Management"
            years="2020"
            logo={TRULogo}
        />
    </div>
    </div>
    );

}

function Experience(props) {
    return (<div><Heading title="Experience" />

        <div className="experienceItemContainer">

            <ExperienceItem
                company="Pipewise Technology Ltd."
                title="Software Developer"
                logo={PWLogo}
                dates="Nov 2023 - Present"
                description="Built scalable real-time data processing systems with C++, Linux, Azure, REST APIs, and React, improving reliability, performance, and data visualization capabilities."
            />

            <ExperienceItem
                company="Pipewise Technology Ltd."
                title="Jr. Software Developer"
                logo={PWLogo}
                dates="Nov 2022 - Nov 2023"
                description="Refactored large C++ systems, built real-time dashboards, and developed secure cloud-based client portals to improve performance, usability, and data accessibility."
            />

            <ExperienceItem
                company="Centennial Mat Services"
                title="Web Developer"
                logo={CMSLogo}
                dates="Jan 2021 - Jun 2021"
                description="Built responsive enterprise web applications with JavaScript, HTML, CSS, and modern front-end frameworks, while managing cloud deployments and translating business requirements into scalable UI solutions."
            />

        </div>
    </div>
    );

}

function Projects(props) { return (<div><Heading title="Projects" /><div className="projectItemContainer">{projectData.map((proj, idx) => (<ProjectItem key={idx} {...proj} />))}</div></div>); }

const skills = [{ skill: "C++", logo: CppLogo }, { skill: "C#", logo: CSharpLogo }, { skill: "Python", logo: PythonLogo }, { skill: "JavaScript", logo: JavascriptLogo }, { skill: "HTML5", logo: HTMLLogo }, { skill: "CSS3", logo: CSSLogo }, { skill: "React", logo: ReactLogo }, { skill: "Node.js", logo: NodeLogo }, { skill: "ASP.NET", logo: DotNetLogo }, { skill: "SQL", logo: SQLLogo }, { skill: "PostgreSQL", logo: PostgreSQLLogo }, { skill: "Microsoft Azure", logo: AzureLogo }, { skill: "Linux", logo: LinuxLogo }, { skill: "Git", logo: GitLogo }, { skill: "REST APIs", logo: RestLogo }, { skill: "CI/CD", logo: CICDLogo }, { skill: "Agile/Scrum", logo: AgileLogo }];

function Skills() {
    return (<div><Heading title="Skills" /><div className="skillsContainer">{skills.map((item, index) => (<SkillsItem
        key={index}
        skill={item.skill}
        logo={item.logo}
    />))}</div></div>);
}

function Bio(props) {
    return (<div className="bioContainer"><div className="nameJobLocationContainer"><h1>Hello, I'm</h1><div className="name-hover"><h1><span className="firstName">Ajay<span className="lastName"> Arora</span></span></h1></div><br /><br /><div className="profileImageContainer"><img src={ProfilePic} alt="Profile" /></div><h2>Software Developer</h2><h2>Calgary, AB, Canada</h2></div>

        <br />

        <div className="numericItemContainer">
            {/*NumericItem end={calculateAge()} title="Years old" />*/}
            <NumericItem end={calculateYearsOfExperience} title="Years of experience" />
            {/*<NumericItem end={projectData.length} title="Projects worked on" />*/}
            {/*<NumericItem end={projectData.filter(p => p.finished).length} title="Projects finished" />*/}
        </div>

        <br />

        <div className="socialInfoContainer">
            <SocialLink href="mailto:arora.ajay90@gmail.com" imgSrc={Mail} altText="Mail" />
            <SocialLink href="https://www.linkedin.com/in/ajay-arora1" imgSrc={Linkedin} altText="Linkedin" />
            <SocialLink href="https://github.com/ajayarora1" imgSrc={GitHub} altText="GitHub" />
            {/*<SocialLink href="https://www.youtube.com/c/your-channel" imgSrc={YouTube} altText="YouTube" />*/}
            <SocialLink href="https://www.instagram.com/ajay_aror_a" imgSrc={Instagram} altText="Instagram" />
        </div>
        <a href={Resume} download>
            <div className="downloadResume">
                <p download>Download Resume</p>
            </div>
        </a>
    </div>
    );

}

function App() { return (<div><div className="header"><h1>ajayarora<span className="headerNameSuffix">.ca</span></h1></div><link href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@400;600&display=swap" rel="stylesheet" /><div className="hexBackground"><Bio /></div><Education /><Experience /><Projects /><Skills /></div>); }

const root = ReactDOM.createRoot(document.getElementById('root')); root.render(<App />);