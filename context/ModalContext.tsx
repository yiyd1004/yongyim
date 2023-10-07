"use client";

import Modal from "@/components/Modal";
import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

type ModalContextProviderProps = {
    children: ReactNode;
};

type ModalContextType = {
    show: () => void;
    hide: () => void;
    setContent: (content: ReactNode | null) => void;
};

const ModalContext = createContext<ModalContextType | null>(null);
const ModalContextProvider = ({ children }: ModalContextProviderProps) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);

    const setContent = (content: ReactNode | null) => {
        setModalContent(content);
    };

    const show = () => {
        setShowModal(true);
    };

    const hide = () => {
        setShowModal(false);
    };

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = "15px";
        }
        return () => {
            document.body.style.overflow = "unset";
            document.body.style.paddingRight = "0px";
        };
    }, [showModal]);

    return (
        <ModalContext.Provider value={{ show, hide, setContent }}>
            {children}
            {showModal ? <Modal>{modalContent}</Modal> : null}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);

    if (context === null) {
        throw new Error("useModal must be used within a ModalContextProvider");
    }

    return context;
};

export default ModalContextProvider;
