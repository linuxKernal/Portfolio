import image from "../assets/profilepic.jpeg";

export default function Hero() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_20rem] w-full gap-y-8 sm:gap-x-26 h-fit m-auto p-4">
            <div className="space-y-8 order-2 sm:order-1">
                <div className="space-y-3 text-center sm:text-left">
                    <h2 className="font-semibold text-3xl sm:text-5xl">
                        Hi, I am Praveen,
                    </h2>
                    <h2 className="font-semibold text-2xl sm:text-4xl text-rose-500">
                        Software Engineer
                    </h2>
                </div>
                <p className="text-justify">
                    Enthusiastic Software Engineer with a solid foundation in
                    programming and problem-solving, and hands-on experience in
                    developing and deploying scalable web applications using
                    both front-end and back-end technologies. Passionate about
                    writing clean, efficient code and continuously learning new
                    tools and frameworks to build impactful digital solutions.
                </p>
                <div className="flex justify-center sm:justify-start">
                    <button className="px-4 py-1.5 bg-red-500 text-white border hover:bg-white duration-300 hover:scale-105 hover:border-red-500 hover:text-red-500 active:translate-y-3">
                        <a
                            target="_blank"
                            href="https://drive.google.com/file/d/1rVKAz-oxwA_osHMzhe85e0Sk2eatRqJM/view?usp=sharing"
                        >
                            Download Resume
                        </a>
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center order-1 sm:order-2">
                <img
                    src={image}
                    className="w-48 h-48 sm:w-60 sm:h-60 rounded-full object-cover object-left-top"
                    alt="author image"
                />
            </div>
        </div>
    );
}
