import { emailQueue } from "../queues/email.queue";

export async function sendEmail(data: {
    to: string;
    subject: string;
    html: string;
}) {
    await emailQueue.add(data);
}
