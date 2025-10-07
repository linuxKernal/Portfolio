import GmailIcon from "../assets/gmail.png";
import GithubIcon from "../assets/github.svg.png";

export default function ContactInfo() {
    return (
        <div className="p-4 my-8 space-y-4" id="contactinfo">
            <h2 className="text-3xl text-red-500 text-center">Let's Connect</h2>
            <p className="py-2 text-black text-center">
                I'm always open to discussing new project ideas, job
                opportunities, or interesting collaborations.
            </p>
            <div className=" flex justify-center items-center gap-2">
                <div className="flex  border-2 border-light rounded-sm">
                    <div className="p-1 border-light">
                        <img
                            className="w-5 h-5 rounded-full caret-rose-100"
                            src={GithubIcon}
                            alt=""
                        />
                    </div>

                    <a
                        target="_blank"
                        className="bg-light px-2 text-white"
                        href="https://github.com/linuxKernal/"
                    >
                        Github Profile
                    </a>
                </div>
                <div className="flex  border-2 border-light rounded-sm">
                    <div className="p-1 border-light">
                        <img
                            className="w-5 h-5"
                            src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                            alt=""
                        />
                    </div>

                    <a
                        target="_blank"
                        className="text-white bg-light px-2"
                        href="https://www.linkedin.com/in/praveennew/"
                    >
                        Linkedin
                    </a>
                </div>
                <div className="flex border-2 rounded-sm border-light">
                    <div className="p-1 border-light">
                        <img className="w-5 h-5" src={GmailIcon} alt="" />
                    </div>
                    <a
                        target="_blank"
                        className="bg-light px-2 text-white"
                        href="mailto:praveenpothiraj63@gmail.com"
                    >
                        Gmail
                    </a>
                </div>
            </div>
        </div>
    );
}
