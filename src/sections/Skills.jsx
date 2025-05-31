import SkillCard from '../components/SkillCard'

export default function Skills() {

    return (
        <div className='skills-section section'>
            <h2>Skills</h2>
            <SkillCard heading='Programming Languages' skills={[
                { 'name': 'JavaScript', 'icon': 'javascript' },
                { 'name': 'TypeScript', 'icon': 'typescript' },
                { 'name': 'Python', 'icon': 'python' },
                { 'name': 'C#', 'icon': 'csharp' },
                { 'name': 'HTML5', 'icon': 'html5' },
                { 'name': 'CSS3', 'icon': 'css3' },
            ]} />
            <SkillCard heading='Frontend Development' hcolor="var(--clr-accent2)" skills={[
                { 'name': 'React.js', 'icon': 'react' },
                { 'name': 'Angular', 'icon': 'angularjs' },
                { 'name': 'Bootstrap', 'icon': 'bootstrap' },
                { 'name': 'Material UI', 'icon': 'materialui' },
                { 'name': 'Tailwind CSS', 'icon': 'tailwindcss' },
                { 'name': 'jQuery', 'icon': 'jquery' },
                { 'name': 'Redux', 'icon': 'redux' },
                { 'name': 'NgRx', 'icon': 'angularjs' },
            ]} />
            <SkillCard heading='Backend Development' hcolor="var(--clr-accent3)" skills={[
                { 'name': 'Node.js', 'icon': 'nodejs' },
                { 'name': 'Express.js', 'icon': 'express' },
                { 'name': '.NET Core', 'icon': 'dot-net' },
                { 'name': 'ASP.NET Web API', 'icon': 'dot-net' },
                { 'name': 'FastAPI', 'icon': 'fastapi' },
                { 'name': 'Flask', 'icon': 'flask' },
            ]} />
            <SkillCard heading='Database Technologies' hcolor="var(--clr-sec)" skills={[
                { 'name': 'MongoDB', 'icon': 'mongodb' },
                { 'name': 'Microsoft SQL Server', 'icon': 'microsoftsqlserver' },
                { 'name': 'SQL', 'icon': 'mysql' },
                { 'name': 'NoSQL', 'icon': 'mongodb' },
            ]} />
            <SkillCard heading='Cloud & Deployment' hcolor="var(--clr-accent)" skills={[
                { 'name': 'AWS', 'icon': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
                { 'name': 'Azure', 'icon': 'azure' },
                { 'name': 'Git', 'icon': 'git' },
                { 'name': 'GitHub', 'icon': 'github' },
            ]} />
            <SkillCard heading='Authentication & Security' hcolor="var(--clr-primary)" skills={[
                { 'name': 'JWT Authentication', 'icon': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/jsonwebtokens.svg' },
                { 'name': 'OAuth', 'icon': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/jsonwebtokens.svg' },
                { 'name': 'API Security', 'icon': 'postman' },
                { 'name': 'CORS', 'icon': 'javascript' },
                { 'name': 'XSS Protection', 'icon': 'javascript' },
                { 'name': 'CSRF Protection', 'icon': 'javascript' },
            ]} />
            <SkillCard heading='Development Tools' hcolor="var(--clr-accent2)" skills={[
                { 'name': 'Visual Studio', 'icon': 'visualstudio' },
                { 'name': 'VS Code', 'icon': 'vscode' },
                { 'name': 'Postman', 'icon': 'postman' },
                { 'name': 'Swagger', 'icon': 'swagger' },
                { 'name': 'npm', 'icon': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg' },
                { 'name': 'yarn', 'icon': 'yarn' },
            ]} />
            <SkillCard heading='AI & Automation' hcolor="var(--clr-accent3)" skills={[
                { 'name': 'OpenAI', 'icon': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/openai.svg' },
                { 'name': 'Azure AI Foundry', 'icon': 'azure' },
                { 'name': 'Selenium', 'icon': 'selenium' },
                { 'name': 'Puppeteer', 'icon': 'puppeteer' },
                { 'name': 'Gemini', 'icon': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/googlegemini.svg' },
                { 'name': 'Hugging Face', 'icon': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/huggingface.svg' },
                { 'name': 'Web Scraping', 'icon': 'python' },
            ]} />
        </div>
    )
}
