import Queue from "bull";
import { sendWhatsApp } from "../config/whatsapp";

const whatsappQueue = new Queue("whatsapp", "redis://localhost:6379");

whatsappQueue.process(async (job) => {
    await sendWhatsApp(job.data);
});

export { whatsappQueue };
