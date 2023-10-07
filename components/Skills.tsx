"use client";

import SectionHeading from "@/components/SectionHeading";
import { skillsData } from "@/data/data";
import { useSectionInView } from "@/libs/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimations = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};
const Skills = () => {
    const { ref } = useSectionInView("Skills");

    return (
        <section
            ref={ref}
            id="skills"
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
        >
            <SectionHeading>My skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData.map((skill, index) => (
                    <motion.li
                        key={index}
                        className="flex items-center justify-center bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/25 dark:text-white/80"
                        variants={fadeInAnimations}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >
                        <Image
                            src={skill.icon}
                            width={45}
                            height={45}
                            alt="skill icon"
                            className="w-auto h-auto max-h-[1.5rem] mr-2"
                        />
                        {skill.name}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
