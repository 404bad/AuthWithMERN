import { mailtrapClient, sender } from "../config/mailtrap.config";
import {
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  PASSWORD_RESET_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} from "./email.template";

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

export const sendWelcomeEmail = async (email: string, name: string) => {
  const recepient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recepient,
      subject: "Welcome to Kailash Badu",
      html: WELCOME_EMAIL_TEMPLATE.replace("{userName}", name),
      category: "welcome Email",
      text: `Welcome ${name}.`,
    });
    console.log("Welcome email sent:", response);
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw new Error(
      `Failed to send welcome email: ${(error as Error).message}`,
    );
  }
};

export const sendPasswordResetEmail = async (
  email: string,
  resetUrl: string,
) => {
  const recepient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recepient,
      subject: "Reset your password",
      html: PASSWORD_RESET_TEMPLATE.replace("{resetURL}", resetUrl),
      category: "Password Reset",
    });
    console.log("Password Reset email sent:", response);
  } catch (error) {
    console.error("Error sending password reset email:", error);
    throw new Error(
      `Error sending password reset email: ${(error as Error).message}`,
    );
  }
};

// Send Reset Password Email
export const sendPasswordResetSucessEmail = async (email: string) => {
  const recepient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recepient,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE.replace("{loginURL}", "#"),
      category: "Password Reset Successful",
    });
    console.log("Password Reset Success email sent:", response);
  } catch (error) {
    console.error("Error sending password reset Success email:", error);
    throw new Error(
      `Error sending password reset Success email: ${(error as Error).message}`,
    );
  }
};
