import projectCoverImage1 from "../assets/project1_cover_image.png";
import projectCoverImage2 from "../assets/web_chat_ui.jpeg";
import projectCoverImage3 from "../assets/project3_cover_image.png";
import projectCoverImage4 from "../assets/tic-tac-toe.jpeg";
import projectCoverImage5 from "../assets/superMarketApp.jpeg";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
    return (
        <div id="projects">
            <h2 className="text-3xl mb-8 text-red-500 text-center font-semibold underline decoration-2 py-4 decoration-dashed underline-offset-6">
                Projects
            </h2>
            <div className="grid md:grid-cols-3 w-fit mx-auto gap-16">
                <ProjectCard
                    image={projectCoverImage5}
                    name="Full-Stack Supermarket Application"
                    description="Built a modern supermarket web application with secure authentication, shopping cart functionality, coupon management, and responsive user experience.
Developed an admin dashboard with role-based access control, inventory management, and advanced data handling using TanStack Table."
                    skills={[
                        "Javascript",
                        "Typescript",
                        "React js 19",
                        "Tailwindcss 4",
                        "shadcn/ui",
                        "Python",
                        "FastAPI",
                        "Supabase",
                        "Payment Gateway",
                        "Zod",
                        "OAuth2",
                        "Tanstack Query",
                    ]}
                    sourceCode="https://github.com/linuxKernal/supermart"
                    websiteLink="https://super-market-app.netlify.app/"
                />
                <ProjectCard
                    image={projectCoverImage1}
                    name="Community Market"
                    description="Developed a simple e-commerce website to showcase products from small businesses 
                    and farmers to local customers. Designed a user-friendly interface that allows for easy browsing 
                    and product addition, while enhancing accessibility by implementing phone OTP login for a seamless user experience."
                    skills={[
                        "Javascript",
                        "Tailwindcss",
                        "React js",
                        "Google Firebase",
                    ]}
                    sourceCode=""
                    websiteLink=""
                />
                <ProjectCard
                    image={projectCoverImage2}
                    name="WebChat"
                    description="Developed a real-time web chat application using React, Node.js, and Socket.io, 
                    featuring chat rooms, image sharing, and password-protected rooms for secure communication and 
                    easy collaboration."
                    skills={[
                        "Javascript",
                        "React js",
                        "Tailwindcss",
                        "Node js",
                        "Socket.io",
                    ]}
                    sourceCode=""
                    websiteLink="https://teamchatnew.netlify.app/"
                />
                <ProjectCard
                    image={projectCoverImage3}
                    name="Code Sharing Website"
                    description="Created a simple code-sharing platform using Node.js and MongoDB, 
                    enabling users to upload and share code snippets effortlessly—designed for quick collaboration among college peers."
                    skills={[
                        "HTML",
                        "CSS",
                        "Javascript",
                        "Node js",
                        "Express js",
                        "MongoDB",
                    ]}
                    sourceCode="https://github.com/linuxKernal/code"
                    websiteLink="https://linuxkernal.github.io/code"
                />

                <ProjectCard
                    image={projectCoverImage4}
                    name="Tic Tac Toe Multiplayer Game"
                    description="A real-time two-player Tic Tac Toe game built with React.js for the frontend and Socket.IO for real-time communication. The project allows two players to connect, play, and experience live updates without refreshing the page."
                    skills={[
                        "Javascript",
                        "CSS",
                        "React js",
                        "Tailwindcss",
                        "Node js",
                        "Express js",
                        "Socket io",
                    ]}
                    sourceCode="https://github.com/linuxKernal/javascriptFrontend-Tic-Tac_Toe"
                    websiteLink="https://javascript-tik-tac-toe.netlify.app/"
                />
            </div>
        </div>
    );
}
