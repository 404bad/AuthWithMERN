import { MailtrapClient } from "mailtrap";
import config from "./env.config";

export const mailtrapClient = new MailtrapClient({
  token: config.MAILTRAP_SECRET,
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Kailash Badu",
};
