import { mailtrapClient, sender } from "../config/mailtrap.config";
import { VERIFICATION_EMAIL_TEMPLATE } from "./email.template";

export const sendVerificationToken = async (
  email: string,
  verificationToken: string,
) => {
  const recepient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recepient,
      subject: "Verify your email address",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken,
      ),
      category: "Verification Emails",
      text: `Thank you for signing up! Please verify your email using this code: ${verificationToken}. This code will expire in 15 minutes.`,
    });
    console.log("Verification email sent:", response);
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error(
      `Failed to send verification email: ${(error as Error).message}`,
    );
  }
};
