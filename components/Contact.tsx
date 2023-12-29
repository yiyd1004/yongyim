"use client";

import SectionHeading from "@/components/SectionHeading";
import ContactFormEmail from "@/email/ContactFormEmail";
import { useSectionInView } from "@/libs/hooks";
import { validateString } from "@/libs/utils";
import { renderAsync } from "@react-email/render";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import SendEmailBtn from "./SendEmailBtn";

const Contact = () => {
    const { ref } = useSectionInView("Contact");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateString(email, 500)) {
            toast.error("Invalid sender email");
            return;
        }

        if (!validateString(message, 5000)) {
            toast.error("Invalid message");
            return;
        }

        setSending(true);
        const htmlMsg = await renderAsync(
            <ContactFormEmail sender={email} msg={message} />,
            { pretty: true }
        );

        const response = await fetch("/api/sendemail/", {
            method: "POST",
            body: JSON.stringify({
                sender: email,
                msg: htmlMsg,
            }),
            cache: "no-store",
            next: { revalidate: 0 },
        });

        setSending(false);
        if (response.ok) {
            toast.success("Message sent successfully!");
            setEmail("");
            setMessage("");
        } else {
            toast.error("Unable to send message. Please try again later.");
        }
    };

    return (
        <motion.section
            ref={ref}
            id="contact"
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <SectionHeading>Contact me</SectionHeading>
            <p className="text-gray-700 -mt-6 dark:text-white/80">
                Please contact me directly at{" "}
                <a className="underline" href="mailto:yiyd1004@gmail.com">
                    yiyd1004@gmail.com
                </a>{" "}
                or through this form
            </p>
            <form
                className="flex flex-col mt-10 dark:text-black"
                onSubmit={handleSubmit}
            >
                <input
                    type="email"
                    name="senderEmail"
                    className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80
                                dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    maxLength={500}
                    disabled={sending}
                />
                <textarea
                    name="message"
                    className="h-52 p-4 my-3 rounded-lg borderBlack p-4dark:bg-white dark:bg-opacity-80
                                dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    maxLength={5000}
                    disabled={sending}
                />
                <SendEmailBtn sending={sending} />
            </form>
        </motion.section>
    );
};

export default Contact;
