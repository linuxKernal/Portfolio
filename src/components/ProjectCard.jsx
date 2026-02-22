export default function ProjectCard({
    name,
    image,
    description,
    skills,
    sourceCode,
    websiteLink,
}) {
    return (
        <div className="max-w-96 space-y-3">
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
