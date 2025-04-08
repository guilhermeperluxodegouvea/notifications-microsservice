import axios from "axios";

interface WhatsAppData {
    to: string;
    body: string;
}

export async function sendWhatsApp(data: WhatsAppData) {
    try {
        console.log(
            `[SIMULADO] WhatsApp enviado para ${data.to}: ${data.body}`
        );

        // Para uso real com API da Meta, descomente abaixo:
        /*
        const apiUrl = process.env.WHATSAPP_API_URL;
        const token = process.env.WHATSAPP_ACCESS_TOKEN;

        const response = await axios.post(
            apiUrl,
            {
                messaging_product: "whatsapp",
                to: data.to,
                type: "text",
                text: { body: data.body },
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );

        return response.data;
        */

        return {
            success: true,
            messageId: `simulado-${Date.now()}`,
        };
    } catch (error) {
        console.error(
            "Enviar WhatsApp falhou:",
            error instanceof Error ? error.message : "Erro desconhecido"
        );
        throw new Error("Falha em enviar WhatsApp");
    }
}
