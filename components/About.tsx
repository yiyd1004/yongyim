"use client";

import { bio } from "@/data/data";
import { useSectionInView } from "@/libs/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import Typewriter from "typewriter-effect";

const About = () => {
    const { ref } = useSectionInView("About", 0.5);

    return (
        <section
            ref={ref}
            id="about"
            className="relative w-full max-w-6xl flex flex-col items-center justify-between px-7 py-20 z-[1]
                            max-[960px]:py-16 max-[960px]:px-4
                            max-sm:py-24 max-sm:px-4 scroll-mt-[100rem]"
        >
            <div className="w-full flex items-center justify-between max-[960px]:flex-col">
                <motion.h1
                    className="w-full order-1 mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl flex-col items-start justify-start
                                max-[960px]:order-2 max-[960px]:mb-8 max-[960px]:flex max-[960px]:flex-col max-[960px]:items-center
                                max-sm:order-2 max-sm:mb-8 max-sm:flex max-sm:flex-col: max-sm:items-center"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span
                        className="font-bold text-[3.125rem] leading-[4.25rem]
                                    max-sm:text-[2.5rem] "
                    >
                        Hello, I&apos;m
                        <br /> {bio.name}.
                    </span>{" "}
                    <div
                        className="flex font-semibold text-[2rem] leading-[4.25rem] gap-3
                                    max-sm:text-[1.375rem] max-sm:leading-[2.5rem]"
                    >
                        I&apos;m a
                        <div className="text-purple-700 font-semibold dark:text-purple-400">
                            <Typewriter
                                options={{
                                    strings: bio.roles,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                    </div>
                    <span
                        className="block text-[1.25rem] leading-[2rem] mb-[2.625rem]
                                    max-[960px]:text-center
                                    max-sm:text-center max-sm:text-[1rem] max-sm:leading-[2rem]"
                    >
                        {bio.description}
                    </span>
                    <motion.div
                        className="flex flex-col flex-wrap sm:flex-row items-start gap-4 text-lg font-medium
                                    max-sm:items-center max-sm:justify-center"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <a
                            href="/assets/resume/resume_yong_yim.pdf"
                            target="_blank"
                            className="group flex items-center bg-white px-7 py-3 gap-2
                                rounded-full outline-none hover:scale-110
                                active:scale-95 transition cursor-pointer borderBlack
                                dark:bg-white/10"
                        >
                            Check Resume{" "}
                            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                        </a>
                        <a
                            href={bio.linkedin}
                            target="_blank"
                            className="flex items-center bg-white text-gray-700 p-4 gap-2
                                rounded-full outline-none hover:scale-[1.15]
                                hover:text-gray-950 active:scale-[1.15] transition cursor-pointer
                                borderBlack dark:bg-white/10 dark:text-white/60"
                        >
                            <BsLinkedin />
                        </a>
                        <a
                            href={bio.git}
                            target="_blank"
                            className="flex items-center bg-white text-gray-700 p-4 gap-2
                                rounded-full text-[1.35rem] outline-none hover:scale-[1.15]
                                hover:text-gray-950 active:scale-[1.15] transition cursor-pointer
                                borderBlack
                                dark:bg-white/10 dark:text-white/60"
                        >
                            <FaGithubSquare />
                        </a>
                        {/* <a
                            href={bio.certificates[0].url}
                            target="_blank"
                            className="group flex items-center justify-center text-center bg-white px-7 py-3 gap-2
                                rounded-full outline-none hover:scale-110
                                active:scale-95 transition cursor-pointer borderBlack
                                dark:bg-white/10"
                        >
                            <PiCertificate className="w-6 h-auto" />
                            {bio.certificates[0].name + " "}
                        </a> */}
                    </motion.div>
                </motion.h1>
                <div
                    className="relative w-full flex order-2 justify-end gap-3
                                max-[960px]:order-1 max-[960px]:justify-center max-[960px]:items-center max-[960px]:mb-20
                                max-sm:mb-8"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "tween", duration: 0.2 }}
                    >
                        <Image
                            src="/assets/profile/picofme.png"
                            width={350}
                            height={350}
                            quality="95"
                            alt="Yong's Portrait"
                            priority={true}
                            className="relative h-full w-full max-w-[25rem] max-h-[25rem] rounded-full border-[0.35rem] border-white object-cover
                                        max-md:max-w-[25rem] max-md:max-h-[25rem]
                                        max-sm:max-w-[17.5rem] max-sm:max-h-[17.5rem]"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
