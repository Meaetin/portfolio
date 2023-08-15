import resume from '../components/Resume.pdf';
import '../components/styles/about.css';

const About = () => {
    return ( 
        <div className="flex flex-col items-center pt-10">
            <h1 className="text-3xl">About Me</h1>
            <div className="w-24 h-1 bg-Line rounded-sm mt-1"></div>
            <div className="text-box w-1/2 pt-8">
                <p>
                    When I was first exposed to web development back in 2022, I fell in love with the concept of developing where 
                    websites were made from just a blank page. From then on, I knew this is what I wanted to pursue.
                </p><br/>
                <p>
                    As my diploma only taught us the basics, I know I had to spend extra time that I had to self-learn so as to achieve my goal. 
                    Though the learning progress was slow due to having to juggle work and studies, I managed to learn quite a fair bit by myself 
                    over the course of a year.
                </p><br/>
                <p>
                    I know that it is nowhere near enough hence I took a break from studying to look for front-end related 
                    internships to further strengthen my skills.
                </p>
            </div>
            <a href={resume} download className="dl-btn flex items-center mt-10 bg-sky-300 p-4 rounded-2xl">
                <i className="dl-icon ri-download-2-line text-2xl pr-2"></i>
                <p className="pt-0">Download Resume</p>
            </a>
        </div>
    );
}
 
export default About;