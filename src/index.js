import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
function Project(props) {
    return (
        <div className="projectContainer">
            <div className="projectContainerImage">
                <img src={props.url} alt=""/>
            </div>
            <div className="projectContainerText">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <p>({props.year})</p>
            </div>
        </div>
    );
}

function Bio(props) {
    return (
        <div className="bioContainer">
            <h1>About Me:</h1>
            <div className="bioContainerImage">
                <img src={props.url} alt="" />
            </div>
            <p>
                Hello, I'm Ajay Arora, a dedicated full-stack software developer with a strong passion for computer programming and learning new technologies.<br /><br />
                My expertise spans various languages, including C++, Python, and C# for back-end languages, as well as HTML, CSS, JavaScript, and PHP on the front-end.<br /><br />
                I possess a proficient understanding of SQL databases, specifically PostgreSQL, and Linux-based systems. For object-oriented programming, I utilize Visual Studio as my preferred IDE.<br /><br />
                I hold a 4-year degree in Computing Science from Thompson Rivers University, and have 2 years of professional experience in the field of software development.<br /><br />
                Feel free to reach out to me at arora.ajay90@gmail.com. When connecting, kindly mention that you were referred from my Github profile.<br /><br />
                Best regards,<br /><br />
                Ajay Arora
            </p>
        </div>
    );
}

function App() {
    return (
        <div className="allContent">
            <div className="allContentColumnRight">
                <Bio url="https://media.licdn.com/dms/image/D5603AQFgpoqm1uB65Q/profile-displayphoto-shrink_400_400/0/1720890826893?e=1726099200&v=beta&t=2LYjxOK4ZLi17_qqFfdf8-QJeX-BvuX9btr5nMEM5DM" />
            </div>
            <div className="allContentColumnLeft">
                <a href="https://ajayarora1.github.io/Interactive_Pokedex">
                    <Project url='/img/ip.png' name="Interactive Pokedex" description="A Pokedex I built using ReactJS and PokeAPI. Work in progress." year="2024" />
                </a>
                <a href="https://centennialmats.com">
                    <Project url='/img/cms.png' name="Website for Centennial Mats" description="A website I built for a client using HTML, CSS, JavaScript, and JQuery." year="2021" />
                </a>
                <a href="https://store.steampowered.com/app/1103920/Clickable_Coffee_Shop/">
                    <Project url='/img/ccs.jpg' name="Clickable Coffee Shop" description="An incremental game I built using WinForms and VB, later remade with GameMaker Studio." year="2019" />
                </a>
            </div>
            <div className="allContentColumnMiddle">
                <a href="https://github.com/AjayArora1/Book-Processing-Software-for-Public-Libraries/tree/master">
                    <Project url='/img/bp.png' name="Library Book Processing" description="A program I built for my university capstone that processes library inventory." year="2022" />
                </a>
                <a href="https://store.steampowered.com/app/1399850/Squares_Rage/">
                    <Project url='/img/sr.jpg' name="Squares Rage" description="A platformer game I built using GameMaker Studio and it's scripting language." year="2020" />
                </a>
            </div>
        </div>  
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);