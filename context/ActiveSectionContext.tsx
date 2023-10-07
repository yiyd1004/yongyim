"use client";

import { SectionName } from "@/data/types";
import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react";

type ActiveSectionContextProviderProps = {
    children: ReactNode;
};
type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: Dispatch<SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};

export const ActiveSectionContext =
    createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({
    children,
}: ActiveSectionContextProviderProps) => {
    const [activeSection, setActiveSection] = useState<SectionName>("About");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick,
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
};

export const useActiveSectionContext = () => {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within a ActiveSectionContextProvider"
        );
    }

    return context;
};

export default ActiveSectionContextProvider;
