"use client";

import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { links } from "@/data/data";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
    const { activeSection, setActiveSection, setTimeOfLastClick } =
        useActiveSectionContext();
    return (
        <header className="relative z-[999]">
            <motion.div
                className="fixed top-0 left-1/2 h-[10rem] w-full rounded-none
                            border border-white border-opacity-40 bg-white bg-opacity-80
                            shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
                            md:top-6 md:h-[3.25rem] md:w-[46rem] md:rounded-full
                            dark:bg-gray-950 dark:border-black/40 dark:opacity-75"
                initial={{ x: "-50%", y: -100, opacity: 0 }}
                animate={{ x: "-50%", y: 0, opacity: 1 }}
            ></motion.div>

            <nav
                className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2
                            py-2 md:top-[1.7rem] md:h-[initial] md:py-0"
            >
                <ul
                    className="flex w-[22rem] flex-wrap items-center justify-center gap-y-5 md:gap-y-1
                                text-[1.2rem] md:text-[0.9rem] font-medium text-gray-500
                                md:w-[initial] md:flex-nowrap gap-5"
                >
                    {links.map((link) => (
                        <motion.li
                            key={link.hash}
                            className="list-none h-full md:h-3/4 flex items-center justify-center relative"
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                href={link.hash}
                                className={clsx(
                                    "flex w-full items-center justify-center p-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                                    "dark:text-gray-500 dark:hover:text-gray-300",
                                    {
                                        "text-gray-950 dark:text-gray-200":
                                            activeSection === link.name,
                                    }
                                )}
                                onClick={() => {
                                    setActiveSection(link.name);
                                    setTimeOfLastClick(Date.now());
                                }}
                            >
                                {link.name}
                                {link.name === activeSection && (
                                    <motion.span
                                        className="bg-gray-100 h-full rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    ></motion.span>
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
