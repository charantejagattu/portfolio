import Freelancing from '../assets/freelancing.svg?react';
import Opensource from '../assets/opensource.svg?react';
import '../styles/experience.css';
import Timeline from '../components/Timeline';
import TimelineItem from '../components/TimelineItem';
import { TimeStamp } from '../components/TimelineItem';
import Upwork from '../assets/icons/upwork.svg?react';
import Fiverr from '../assets/icons/fiverr.svg?react';
import Github from '../assets/icons/github.svg?react';
import Vinoai from '../assets/vinoai.avif'

export default function Experience() {
    return (
        <div className='experience-section section' style={{ paddingBottom: '0' }}>
            <h2>Work Experience</h2>

            <div className='experience'>
                <div className="illustration">
                    <Freelancing />
                </div>
                <div className='details'>
                    <div className="experience-header">
                        <h3>Full Stack Developer</h3>
                        <span className="experience-badge current">Current Role</span>
                    </div>
                    <p className="experience-description">
                        Currently working as a Full Stack Developer, actively developing and maintaining enterprise-level applications using React and FastAPI. Contributing to full-stack development initiatives while collaborating with cross-functional teams to deliver high-quality software solutions.
                    </p>
                    <Timeline>
                        <TimelineItem icon={<div className="timeline-icon">💼</div>} color="#4285f4" bgColor="white">
                            <h4>Full Stack Developer</h4>
                            <TimeStamp stamp="May 2024 - Present" />
                            <p>Developing enterprise applications using React and FastAPI. Engineering scalable backend services, implementing RESTful endpoints, and participating in agile development cycles including sprint planning and code reviews.</p>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
            <div className='experience reverse'>
                <div className='details'>
                    <h3>Open Source Contribution</h3>
                    <p>Actively contributed to open-source projects by developing new features, resolving issues, and enhancing documentation. Engaged with the community through code reviews and discussions to drive improvements.</p>
                    <Timeline>
                        <TimelineItem icon={<Github />} color="#0745a3" >
                            <h4>Github</h4>
                            <TimeStamp stamp="2022 - now" />
                            <p>Maintained and contributed to repositories, collaborating on code, issues, and pull requests.</p>
                        </TimelineItem>
                    </Timeline>
                </div>
                <div className="illustration">
                    <Opensource />
                </div>
            </div>

            <div className='experience'>
                <div className="illustration">
                    <Freelancing />
                </div>
                <div className='details'>
                    <div className="experience-header">
                        <h3>Freelancing</h3>
                        <span className="experience-badge completed">2 Years</span>
                    </div>
                    <p className="experience-description">
                        As a versatile freelancer, I specialized in building comprehensive web applications and platforms that solve real-world problems. My freelancing journey involved creating scalable, secure, and performance-optimized solutions using modern tech stacks.
                    </p>
                    <Timeline>
                        <TimelineItem icon={<div className="timeline-icon">💻</div>} color="#e74c3c" bgColor="white">
                            <h4>Freelance Developer</h4>
                            <TimeStamp stamp="May 2022 - April 2024" />
                            <p>Crafted sophisticated online marketplace and dynamic trading platform using MERN stack, FastAPI, and React. Developed AI-driven automation project during hackathon utilizing Azure AI services and OpenAI. Delivered high-impact, technology-driven solutions across multiple domains.</p>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>

            
            
        </div>
    )
}
