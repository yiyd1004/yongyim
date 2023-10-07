import About from "@/components/About";
import Contact from "@/components/Contact";
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
            <Contact />
        </main>
    );
}
