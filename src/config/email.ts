import nodemailer from "nodemailer";

if (!process.env.SENDGRID_API_KEY || !process.env.EMAIL_FROM) {
    throw new Error("FALHA, variáveis de ambiente faltando. Verifique o .env");
}

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.sendgrid.net",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
        user: process.env.SMTP_USER || "apikey",
        pass: process.env.SENDGRID_API_KEY,
    },
    tls: {
        ciphers: process.env.SMTP_CIPHERS || "SSLv3",
        rejectUnauthorized: process.env.NODE_ENV !== "development",
    },
});

interface EmailData {
    to: string;
    subject: string;
    html: string;
}

export async function sendMail(data: EmailData) {
    const mailOptions = {
        from: `"Serviço de notificação" <${process.env.EMAIL_FROM}>`,
        to: data.to,
        subject: data.subject,
        html: data.html,
    };

    try {
        const info = await transporter.sendMail(mailOptions);

        console.log("E-mail enviado, ID:", info.messageId);

        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error(
            "Enviar e-mail falhou::",
            error instanceof Error ? error.message : "Erro desconhecido"
        );
        throw new Error("Falha em enviar e-mail");
    }
}
