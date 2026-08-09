import Wrapper from "./Wrapper";

export default function Header() {
    return (
        <header className="p-4 w-full shadow-2xs">
            <Wrapper>
                <nav className="flex justify-end">
                    <ul className="flex gap-4 sm:gap-8 cursor-pointer">
                        <li className="hover:underline">
                            <a href="#projects">Works</a>
                        </li>
                        <li
                            className="hover:underline"
                            onClick={() => alert("Blogs Comming Soon")}
                        >
                            <a href="#">Blogs</a>
                        </li>
                        <li className="hover:underline">
                            <a href="#contactinfo">Contact</a>
                        </li>
                    </ul>
                </nav>
            </Wrapper>
        </header>
    );
}
