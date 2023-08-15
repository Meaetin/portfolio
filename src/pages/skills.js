import "../components/styles/skills.css"

const Skills = () => {
    return (
        <div className="flex flex-col items-center pt-10">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
            <h1 className="text-3xl">Skills Obtained</h1>
            <div className="w-36 h-1 bg-Line rounded-sm mt-1"></div>
            <div className="icon-cont grid grid-rows-2 grid-flow-col gap-12 pt-12">
                <div className="icons-box">
                    <i className="devicon-html5-plain colored"></i>
                    <p>HTML5</p>
                </div>
                <div className="icons-box">
                    <i className="devicon-css3-plain colored"></i>
                    <p>CSS3</p>
                </div>
                <div className="icons-box">
                    <i className="devicon-javascript-plain colored"></i>
                    <p>Javascript</p>
                </div>
                <div className="icons-box">
                    <i className="devicon-sass-original colored"></i>
                    <p>SASS</p>
                </div>
                <div className="icons-box">
                    <i className="devicon-react-original colored"></i>
                    <p>React</p>
                </div>
                <div className="icons-box">
                    <i className="devicon-tailwindcss-original-wordmark colored"></i>
                    <p>TailwindCSS</p>
                </div>
                <div className="icons-box">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt=""/>
                    <p>Figma</p>
                </div>
                <div className="icons-box">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt=""/>
                    <p>Python</p>
                </div>
            </div> 
            <section className="pt-11 flex items-center flex-col">
                <h1 className="text-3xl">Currently Learning</h1>
                <div className="w-40 h-1 bg-Line rounded-sm mt-2"></div>
                <p className="pt-5">Learing TypeScript, Node, Git/Github and improving my React skills</p>
            </section>
        </div>
    );
}
 
export default Skills;