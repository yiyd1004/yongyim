import Image from "next/image";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";

type Git = {
    description: string;
    url: string;
};
type Demo = Git;
type ProjectModalProps = {
    readonly title: string;
    readonly description: string;
    readonly tags: readonly string[];
    readonly imageUrl: string;
    readonly gits: readonly object[];
    readonly demos: readonly object[];
    hideDialog: () => void;
};

const ProjectModal = ({
    title,
    description,
    tags,
    imageUrl,
    gits,
    demos,
    hideDialog,
}: ProjectModalProps) => {
    return (
        <div className="flex flex-col">
            <div
                onClick={hideDialog}
                className="w-full flex items-center justify-end cursor-pointer mb-3"
            >
                <AiOutlineCloseCircle className="w-6 h-6" />
            </div>
            {/* <div className="w-full h-[18.85rem] mb-6"> */}
            <Image
                src={imageUrl}
                width={600}
                height={300}
                quality={95}
                loading="eager"
                alt="project image"
                className="w-full h-[18.85rem] object-top rounded-lg mb-6"
                style={{ objectFit: "none" }}
            />
            {/* </div> */}
            <h3 className="text-2xl font-semibold mb-6">{title}</h3>
            <p className="mb-3 leading-relaxed text-gray-700 dark:text-white/70">
                {description}
            </p>
            <ul className="flex flex-wrap mt-3 mb-3 gap-2">
                {tags.map((tag, index) => (
                    <li
                        key={index}
                        className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    >
                        {tag}
                    </li>
                ))}
            </ul>
            <ul className="flex flex-wrap items-center justify-center mt-3 mb-6 gap-6">
                {demos.map((demo, index) => (
                    <a
                        key={index}
                        href={(demo as Demo).url}
                        target="_blank"
                        className="flex flex-col items-center text-gray-700 gap-2
                        outline-none focus:scale-[1.15] hover:scale-[1.15]
                        hover:text-gray-950 active:scale-[1.15] transition cursor-pointer
                        dark:text-white/60"
                    >
                        <div className="flex items-center justify-center p-4 bg-white borderBlack rounded-full dark:bg-white/10">
                            <GoBrowser className="w-8 h-auto" />
                        </div>

                        <span className="text-sm">
                            {(demo as Demo).description}
                        </span>
                    </a>
                ))}
                {gits.map((git, index) => (
                    <a
                        key={index}
                        href={(git as Git).url}
                        target="_blank"
                        className="flex flex-col items-center text-gray-700 gap-2
                        outline-none focus:scale-[1.15] hover:scale-[1.15]
                        hover:text-gray-950 active:scale-[1.15] transition cursor-pointer
                        dark:text-white/60"
                    >
                        <div className="flex items-center justify-center p-4 bg-white borderBlack rounded-full dark:bg-white/10">
                            <FaGithubSquare className="w-8 h-auto" />
                        </div>
                        <span className="text-sm">
                            {(git as Git).description}
                        </span>
                    </a>
                ))}
            </ul>
        </div>
    );
};

export default ProjectModal;
