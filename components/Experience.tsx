"use client";

import SectionHeading from "@/components/SectionHeading";
import { useTheme } from "@/context/ThemeContext";
import { experiencesData } from "@/data/data";
import { useSectionInView } from "@/libs/hooks";
import { Fragment } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
    const { ref } = useSectionInView("Experience", 0.2);
    const { theme } = useTheme();

    return (
        <section
            ref={ref}
            id="experience"
            className="mb-28 scroll-mt-28 sm:mb-40"
        >
            <SectionHeading>My Experiences</SectionHeading>
            <VerticalTimeline lineColor="" animate={true}>
                {experiencesData.map((experience, index) => (
                    <Fragment key={index}>
                        <VerticalTimelineElement
                            visible={true}
                            contentStyle={{
                                background:
                                    theme === "light"
                                        ? "#f3f4f6"
                                        : "rgba(255, 255, 255, 0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight:
                                    theme === "light"
                                        ? "0.4rem solid #9ca3af"
                                        : "0.4rem solid rgba(255, 255, 255, 0.5)",
                            }}
                            date={experience.date}
                            icon={experience.icon}
                            iconStyle={{
                                background:
                                    theme === "light"
                                        ? "white"
                                        : "rgba(255, 255, 255, 0.15)",
                                fontSize: "1.5rem",
                            }}
                        >
                            <h3 className="font-semibold capitalize">
                                {experience.title}
                            </h3>
                            <p className="font-normal !mt-0 !mb-4">
                                {experience.title2}
                                {experience.title2.length > 0 ? <br /> : ""}
                                {experience.company}
                                {experience.company.length > 0 ? <br /> : ""}
                                {experience.location}
                            </p>
                            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                                {experience.description}
                            </p>

                            <ul className="flex flex-wrap mt-3 mb-3 gap-2">
                                {experience.skills.map((skill, index) => (
                                    <li
                                        key={index}
                                        className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </VerticalTimelineElement>
                    </Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
};

export default Experience;
