import { Router } from "express";
import { sendEmailController } from "../controllers/notifications.controller";
import { sendWhatsAppController } from "../controllers/notifications.controller";

const router = Router();

router.post("/email", sendEmailController);
router.post("/whatsapp", sendWhatsAppController);

export default router;
