"use client";

import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projectsData } from "@/data/data";
import { useSectionInView } from "@/libs/hooks";
import { Fragment } from "react";

const Projects = () => {
    const { ref } = useSectionInView("Projects", 0.3);

    return (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>My projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <Fragment key={index}>
                        <ProjectCard {...project} />
                    </Fragment>
                ))}
            </div>
        </section>
    );
};

export default Projects;
