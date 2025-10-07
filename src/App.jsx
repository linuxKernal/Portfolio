import Footer from "./components/Footer";
import Header from "./components/header";
import Hero from "./components/Hero";
import SkillSet from "./components/SkillSet";
import ProjectSection from "./components/ProjectSection";
import Wrapper from "./components/Wrapper";
import ContactInfo from "./components/ContactInfo";

function App() {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] h-screen">
            <Header />
            <div className="max-w-[60rem] h-full mx-auto mt-10">
                <Hero />
            </div>
            <Wrapper color={"bg-gray-50"}>
                <SkillSet />
            </Wrapper>
            <Wrapper>
                <ProjectSection />
            </Wrapper>
            <ContactInfo />
            <Footer />
        </div>
    );
}

export default App;
