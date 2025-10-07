import projectCoverImage1 from "../assets/project1_cover_image.png";
import projectCoverImage2 from "../assets/project2_cover_image.jpeg";
import projectCoverImage3 from "../assets/project3_cover_image.png";
import projectCoverImage4 from "../assets/tic-tac-toe.jpeg";

export default function ProjectSection() {
    return (
        <div id="projects">
            <h2 className="text-3xl mb-8 text-red-500 text-center font-semibold underline decoration-2 py-4 decoration-dashed underline-offset-6">
                Projects
            </h2>
            <div className="grid grid-cols-3 w-fit mx-auto gap-16">
                <ProjectCard
                    image={projectCoverImage1}
                    name="Community Market"
                    description="Developed a simple e-commerce website to showcase products from small businesses 
                    and farmers to local customers. Designed a user-friendly interface that allows for easy browsing 
                    and product addition, while enhancing accessibility by implementing phone OTP login for a seamless user experience."
                    skills={[
                        "HTML",
                        "Tailwindcss",
                        "Javascript",
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
                        "HTML",
                        "Tailwindcss",
                        "Javascript",
                        "React js",
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
                        "HTML",
                        "CSS",
                        "Javascript",
                        "Tailwindcss",
                        "React js",
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

function ProjectCard({
    name,
    image,
    description,
    skills,
    sourceCode,
    websiteLink,
}) {
    return (
        <div className="w-96 space-y-3">
            <div>
                <img className="w-full rounded-md" src={image} alt="" />
            </div>
            <div className="space-y-3">
                <h2 className="text-3xl font-semibold text-gray-800">{name}</h2>
                <p className="text-gray-800">{description}</p>
                <div className="flex gap-2 items-start flex-wrap">
                    {skills.map((text) => {
                        return (
                            <span className="bg-blue-100 text-blue-500 text-sm font-semibold px-3 py-1 rounded-lg">
                                {text}
                            </span>
                        );
                    })}
                </div>
                <div className="flex gap-4 mt-6">
                    <div className="flex gap-1 items-center">
                        <a href={websiteLink} target="_blank" className="">
                            <svg
                                className="w-4 h-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g stroke-width="0"></g>
                                <g
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g>
                                    <path
                                        d="M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626"
                                        stroke="black"
                                        stroke-width="2.5"
                                        stroke-linecap="round"
                                    ></path>
                                    <path
                                        d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
                                        stroke="black"
                                        stroke-width="2.5"
                                        stroke-linecap="round"
                                    ></path>
                                </g>
                            </svg>
                        </a>
                        <span className="text-md text-blue-600 hover:underline hover:decoration-1 cursor-default">
                            website
                        </span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <img
                            className="w-5 h-5"
                            src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                            alt=""
                        />
                        <a
                            href={sourceCode}
                            target="_blank"
                            className="text-blue-600 hover:underline hover:decoration-1 cursor-default"
                        >
                            source code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
