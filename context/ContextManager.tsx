"use client";

import { ReactNode } from "react";
import ActiveSectionContextProvider from "./ActiveSectionContext";
import ModalContextProvider from "./ModalContext";
import ThemeContextProvider from "./ThemeContext";

type ContextManagerProps = {
    children: ReactNode;
};
const ContextManager = ({ children }: ContextManagerProps) => {
    return (
        <ThemeContextProvider>
            <ActiveSectionContextProvider>
                <ModalContextProvider>{children}</ModalContextProvider>
            </ActiveSectionContextProvider>
        </ThemeContextProvider>
    );
};

export default ContextManager;
