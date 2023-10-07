"use client";

import { useModal } from "@/context/ModalContext";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import ProjectModal from "./ProjectModal";

type ProjectProps = {
    readonly title: string;
    readonly description: string;
    readonly tags: readonly string[];
    readonly imageUrl: string;
    readonly gits: readonly object[];
    readonly demos: readonly object[];
};

const ProjectCard = ({
    title,
    description,
    tags,
    imageUrl,
    gits,
    demos,
}: ProjectProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const modal = useModal();
    const handleClick = () => {
        modal.setContent(
            <ProjectModal
                title={title}
                description={description}
                tags={tags}
                imageUrl={imageUrl}
                gits={gits}
                demos={demos}
                hideDialog={modal.hide}
            />
        );
        modal.show();
    };

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className="group mb-3 sm:mb-8 last:mb-0 cursor-pointer"
            onClick={handleClick}
        >
            <section
                // className="bg-gray-100 max-w-[42rem] border border-black/5
                //             rounded-lg overflow-hidden sm:pr-8 relative
                //             hover:bg-gray-200 transition sm:group-even:pl-8
                //             dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
                className="bg-gray-100 max-w-[42rem] border border-black/5
                            rounded-lg overflow-hidden sm:pr-8 relative
                            hover:bg-gray-200 transition
                            dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
            >
                {/* <div className="flex flex-col h-full pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] sm:group-even:ml-[18rem]">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 line-clamp-3">
                        {description}
                    </p>
                    <ul className="flex flex-wrap mt-8 gap-2">
                        {tags.map((tag, index) => (
                            <li
                                key={index}
                                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div> */}

                {/* <Image
                    src={imageUrl}
                    alt="Project thumbnail"
                    width={1000}
                    height={1000}
                    quality={100}
                    className="absolute hidden sm:block top-8 -right-96 w-[48.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-96
                            group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04]
                            group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 transition"
                    style={{ objectFit: "cover" }}
                /> */}

                <div className="flex flex-col h-full pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 line-clamp-3">
                        {description}
                    </p>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 underline">
                        Read more
                    </p>
                    <ul className="flex flex-wrap mt-8 gap-2">
                        {tags.map((tag, index) => (
                            <li
                                key={index}
                                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
                <Image
                    src={imageUrl}
                    alt="Project thumbnail"
                    width={1000}
                    height={1000}
                    quality={100}
                    className="absolute hidden sm:block top-8 -right-96 w-[48.25rem] rounded-t-lg shadow-2xl
                            group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04]
                            transition"
                    style={{ objectFit: "cover" }}
                />
            </section>
        </motion.div>
    );
};

export default ProjectCard;
