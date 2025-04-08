import { whatsappQueue } from "../queues/whatsapp.queue";

export async function sendWhatsApp(data: { to: string; body: string }) {
    await whatsappQueue.add(data);
}
