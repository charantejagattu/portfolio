import Marquee from "react-fast-marquee";
import ReviewCard from "../components/ReviewCard";

const reviews = [
    {
        name: "Sarah Chen",
        username: "san_francisco",
        body: "Charan delivered an exceptional real estate platform using the MERN stack. His attention to detail and performance optimization techniques were outstanding. Highly recommend!",
    },
    {
        name: "Michael Rodriguez",
        username: "fintech_mike",
        body: "Working with Charan on our financial trading platform was amazing! His FastAPI backend development and Azure deployment expertise saved us months of development time.",
    },
    {
        name: "Emma Thompson",
        username: "startup_founder",
        body: "Charan's full-stack skills are impressive. He implemented JWT authentication, RESTful APIs, and React frontend seamlessly. Professional and reliable developer.",
    },
    {
        name: "David Kim",
        username: "tech_lead_dk",
        body: "Excellent work on our AI-powered KYC system! Charan's expertise in Azure AI services and OpenAI integration was exactly what we needed. Delivered on time and budget.",
    },
    {
        name: "Lisa Anderson",
        username: "product_manager",
        body: "Charan's knowledge of React, TypeScript, and state management is top-notch. He optimized our application performance with lazy loading and caching strategies brilliantly.",
    },
    {
        name: "James Wilson",
        username: "enterprise_dev",
        body: "Outstanding developer! Charan's experience with .NET Core, C#, and Microsoft SQL Server made our enterprise application development smooth and efficient. Will hire again!",
    }
];

export default function Reviews() {
    return (
        <div className="section reviews-section">
            <h2>Reviews</h2>
            <Marquee pauseOnHover={true} speed={100} gradient={true} gradientColor="var(--clr-bg)">
                {reviews.map((review, index) => {
                    return <ReviewCard key={index} {...review} />;
                })}
            </Marquee>
        </div>
    )
}
