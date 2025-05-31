import { Button1 } from '../components/Buttons'
import Pdf from "../assets/icons/pdf.svg?react";
import SvgIcon from '../components/SvgIcon';
import ResumePDF from "../../assets/fullstackCHARANTEJAGATTU.pdf";

export default function About() {


  return (
    <div className='about-section section'>
      <h2>About</h2>
      <p>
        I'm <strong>Charan Teja Gattu</strong>, a highly skilled and versatile <a>Full Stack Software Engineer</a> with comprehensive expertise in modern web technologies. Currently working as a Full Stack Developer since May 2024, I specialize in building dynamic and efficient applications using the <a>MERN stack</a>, <a>React.js</a>, <a>FastAPI</a>, and <a>NET Core</a>.
      </p>
      <p>
        My technical arsenal includes <a>JavaScript/TypeScript</a>, <a>Python</a>, <a>C#</a>, and expertise in both frontend frameworks like <a>React.js</a> and <a>Angular</a>, as well as backend technologies including <a>Node.js</a>, <a>Express.js</a>, and <a>FastAPI</a>. I work with diverse database systems from <a>MongoDB</a> to <a>Microsoft SQL Server</a> and deploy applications on <a>AWS/Azure</a> cloud platforms.
      </p>
      <p>
        Recently, I led the development of an innovative <a>AI-Agent KYC Risk System</a> during the AI-Agent-Incubator-Month Hackathon, automating compliance processes for financial institutions. This project, along with others in my portfolio, showcases my ability to leverage AI and machine learning in solving real-world problems. I am passionate about continuous learning and staying updated with the latest industry trends, currently diving deep into <a>AI/ML</a> and <a>Blockchain</a> technologies.
      </p>
      <p>
        Let's connect and explore opportunities to collaborate on impactful projects!
      </p>
      <a href={ResumePDF} target='_blank' rel='noopener noreferrer'>
        <Button1>
          <SvgIcon icon={Pdf} />
          Resume
        </Button1>
      </a>
    </div>
  )
}
