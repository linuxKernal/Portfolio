import docker from "../assets/docker.png";
import mongoDB from "../assets/MongoDB.png";
import FastApi from "../assets/FastAPI.png";
import terraform from "../assets/terraform.png";
import nextjs from "../assets/nextjs.png";
import typescript from "../assets/ts-logo-128.png";
import remixjs from "../assets/remix-light.png";

export default function SkillSet() {
    return (
        <div className="h-64">
            <h2 className="text-3xl text-red-500 text-center font-semibold underline decoration-2 py-4 decoration-dashed underline-offset-6">
                Tools & Technologies
            </h2>
            <div className="flex gap-4 w-fit justify-center flex-wrap pt-4">
                <SkillLabel
                    label="Python"
                    image="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png"
                />
                <SkillLabel
                    label="JavaScript"
                    image="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                />
                <SkillLabel
                    label="CSS"
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png"
                />
                <SkillLabel label="Docker" image={docker} />

                <SkillLabel
                    label="Node js"
                    image="https://nodejs.org/static/logos/jsIconGreen.svg"
                />
                <SkillLabel label="MongoDB" image={mongoDB} />
                <SkillLabel
                    label="Linux"
                    image="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg"
                />
                <SkillLabel
                    label="Mysql"
                    image="https://www.mysql.com/common/logos/logo-mysql-170x115.png"
                />
                <SkillLabel
                    label="PostgreSQL"
                    image="https://www.postgresql.org/media/img/about/press/elephant.png"
                />
                <SkillLabel label="FastAPI" image={FastApi} />
                <SkillLabel
                    label="React Js"
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png"
                />
                <SkillLabel
                    label="Git"
                    image="https://git-scm.com/images/logos/logomark-orange@2x.png"
                />
                <SkillLabel
                    label="Tailwindcss"
                    image="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg"
                />
                <SkillLabel label="Terraform" image={terraform} />

                <SkillLabel
                    label="AWS"
                    image="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                />

                <SkillLabel
                    label="GraphQL"
                    image="https://graphql.org/_next/static/media/logo.ad338028.svg"
                />

                <SkillLabel
                    label="Socket.io"
                    image="https://socket.io/images/logo.svg"
                />

                <SkillLabel label="Next js" image={nextjs} big={true} />
                <SkillLabel label="Typescript" image={typescript} />
                <SkillLabel label="Remix js" image={remixjs} big={true} />
            </div>
        </div>
    );
}

function SkillLabel({ image, label, big = false }) {
    return (
        <span className="flex gap-1.5 items-center">
            <img
                className={`object-contain size-10 ${
                    big ? "size-16" : "size-10"
                }`}
                src={image}
                alt=""
            />
            <p>{label}</p>
        </span>
    );
}
