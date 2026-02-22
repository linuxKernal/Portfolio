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
            <Wrapper>
                <div className="max-w-[60rem] mx-auto mt-10 mb-8">
                    <Hero />
                </div>
                <SkillSet />
                <ProjectSection />
                <ContactInfo />
            </Wrapper>
            <Footer />
        </div>
    );
}

export default App;
