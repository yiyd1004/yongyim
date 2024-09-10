import About from "@/components/About";
import Certificate from "@/components/Certificate";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center px-4">
            <About />
            <SectionDivider />
            <Projects />
            <Experience />
            <Skills />
            <Education />
            <Certificate />
            <Contact />
        </main>
    );
}
