import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Tailwind,
    Text,
} from "@react-email/components";

type ContactFormEmailProps = {
    sender: string;
    msg: string;
};

const ContactFormEmail = ({ sender, msg }: ContactFormEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>New Message from your portfolio site</Preview>
            <Tailwind>
                <Body className="bg-gray-100 ">
                    <Container>
                        <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                            <Heading className="leading-tight text-black">
                                You received the following message from the
                                contact form
                            </Heading>
                            <Text>{msg}</Text>
                            <Hr />
                            <Text>The sender&apos;s email is: {sender}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default ContactFormEmail;
