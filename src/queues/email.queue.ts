import Queue from "bull";
import { sendMail } from "../config/email";

const emailQueue = new Queue("email", "redis://localhost:6379");

emailQueue.process(async (job) => {
    await sendMail(job.data);
});

export { emailQueue };
