export const runtime = "edge";
export const dynamic = "force-dynamic";

type EmailData = {
    sender: string;
    msg: string;
};

export const POST = async (req: Request) => {
    const emailData: EmailData = await req.json();

    const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
            from: "Contact Form <onboarding@resend.dev>",
            to: [process.env.EMAIL],
            subject: "Message from portfolio contact form",
            reply_to: emailData.sender,
            html: emailData.msg,
        }),
    });

    const data = await res.json();
    return Response.json(data);
};
