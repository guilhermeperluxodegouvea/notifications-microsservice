import { Request, Response } from "express";
import { sendEmail } from "../services/email.service";
import { sendWhatsApp } from "../services/whatsapp.service";

export async function sendEmailController(req: Request, res: Response) {
    try {
        await sendEmail(req.body);
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: "Falha no envio." });
    }
}

export async function sendWhatsAppController(req: Request, res: Response) {
    try {
        await sendWhatsApp(req.body);
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: "Falha no envio." });
    }
}
