"use client";

import SectionHeading from "@/components/SectionHeading";
import { useTheme } from "@/context/ThemeContext";
import { certificateData, educationData } from "@/data/data";
import { useSectionInView } from "@/libs/hooks";
import { Fragment } from "react";
import { PiCertificate } from "react-icons/pi";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Certificate = () => {
    const { ref } = useSectionInView("Certificate", 0.2);
    const { theme } = useTheme();
    educationData.forEach((value) => {
        console.log(value.title + ", " + value.skills.length);
    });
    return (
        <section
            ref={ref}
            id="certificate"
            className="mb-28 scroll-mt-28 sm:mb-40"
        >
            <SectionHeading>Certificates / Courses</SectionHeading>
            <VerticalTimeline lineColor="" animate={true}>
                {certificateData.map((certificate, index) => (
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
                            date={certificate.date}
                            icon={certificate.icon}
                            iconStyle={{
                                background:
                                    theme === "light"
                                        ? "white"
                                        : "rgba(255, 255, 255, 0.15)",
                                fontSize: "1.5rem",
                            }}
                        >
                            <h3 className="font-semibold capitalize">
                                {certificate.title}
                            </h3>
                            <p className="font-normal !mt-0 !mb-4">
                                {certificate.title2}
                                {certificate.title2.length > 0 ? <br /> : ""}
                                {certificate.company}
                                {certificate.company.length > 0 ? <br /> : ""}
                                {certificate.location}
                            </p>
                            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                                {certificate.description}
                            </p>
                            {certificate.skills.length > 0 ? (
                                <ul
                                    key={index}
                                    className="flex flex-wrap mt-3 mb-3 gap-2"
                                >
                                    {certificate.skills.map((skill, index) => (
                                        <li
                                            key={index}
                                            className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                        >
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            ) : null}
                            {certificate.url.length > 0 && (
                                <a
                                    href={certificate.url}
                                    target="_blank"
                                    className="group flex items-center justify-center text-center bg-white px-7 py-3 gap-2
                                rounded-full outline-none hover:scale-110
                                active:scale-95 transition cursor-pointer borderBlack
                                dark:bg-white/10"
                                >
                                    <PiCertificate className="w-6 h-auto" />
                                    View Certificate
                                </a>
                            )}
                        </VerticalTimelineElement>
                    </Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
};

export default Certificate;
