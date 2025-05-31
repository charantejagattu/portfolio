import '../styles/projects.css'
import ProjectCard, { Holder, Content, Tags, Tag, CardActions } from '../components/ProjectCard'

export default function Projects() {
  return (
    <div className='section projects-section'>
      <h2>Projects</h2>
      <Holder>
        <ProjectCard>
          <Content>
            <h3>AI-Agent-Incubator-Month Hackathon - KYC Risk Agent System</h3>
            <p>Created an innovative multi-agent AI system to automate and enhance the Know Your Customer (KYC) process, ensuring regulatory compliance and evaluating customer risk. Automated document verification and risk assessment processes while enhancing regulatory compliance checking through real-time verification.</p>
            <Tags>
              <Tag hashtag="FastAPI" />
              <Tag hashtag="Azure Services" />
              <Tag hashtag="OpenAI" />
              <Tag hashtag="Python" />
              <Tag hashtag="Cosmos DB" />
            </Tags>
          </Content>
        </ProjectCard>

        <ProjectCard>
          <Content>
            <h3>Real Estate Platform</h3>
            <p>Architected and developed a comprehensive real estate marketplace application using the MERN stack, enabling users to list, buy, sell, and rent properties. Implemented robust JWT authentication, RESTful APIs, and optimized performance with lazy loading and database indexing.</p>
            <Tags>
              <Tag hashtag="MongoDB" />
              <Tag hashtag="Express.js" />
              <Tag hashtag="React.js" />
              <Tag hashtag="Node.js" />
              <Tag hashtag="JWT" />
            </Tags>
          </Content>
        </ProjectCard>

        <ProjectCard>
          <Content>
            <h3>Financial Trading Platform</h3>
            <p>Developed a comprehensive financial trading platform with robust backend architecture for market analysis and trading strategies. Features strategy creation and deployment, real-time market data integration, and dynamic strategy management with pagination.</p>
            <Tags>
              <Tag hashtag="FastAPI" />
              <Tag hashtag="MongoDB" />
              <Tag hashtag="SQL Server" />
              <Tag hashtag="Azure" />
              <Tag hashtag="JWT" />
            </Tags>
          </Content>
        </ProjectCard>

        <ProjectCard>
          <Content>
            <h3>Social Media Platform</h3>
            <p>Engineered a social media platform with Angular.js frontend and .NET Core Web API backend. Features real-time post creation, dynamic news feed, user follow/unfollow system, and interactive engagement with optimized performance and security measures.</p>
            <Tags>
              <Tag hashtag="Angular.js" />
              <Tag hashtag=".NET Core" />
              <Tag hashtag="MSSQL" />
              <Tag hashtag="NgRx" />
              <Tag hashtag="RESTful API" />
            </Tags>
          </Content>
        </ProjectCard>

        <ProjectCard>
          <Content>
            <h3>Book Store Portal</h3>
            <p>Led the design and development of a scalable Book Store Portal using ASP.NET MVC with .NET Core 8.0. Integrated Web API backend with Azure SQL for efficient book management, customer transactions, and implemented secure authentication with comprehensive testing.</p>
            <Tags>
              <Tag hashtag="ASP.NET MVC" />
              <Tag hashtag=".NET Core 8.0" />
              <Tag hashtag="Azure SQL" />
              <Tag hashtag="Entity Framework" />
              <Tag hashtag="Azure DevOps" />
            </Tags>
          </Content>
        </ProjectCard>
      </Holder>
    </div>
  )
}
