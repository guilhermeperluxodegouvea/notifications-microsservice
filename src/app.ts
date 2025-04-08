import express from "express";
import routes from "./routes/notifications.routes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/notifications", routes);

export default app;
