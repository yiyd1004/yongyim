import { ReactNode } from "react";

type ModalProps = {
    children: ReactNode;
};

const Modal = ({ children }: ModalProps) => {
    return (
        <div className="flex items-center justify-center fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-[1000]">
            <div className="max-w-[37.5rem]">
                <div className="bg-white p-4 rounded text-black dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
