import { type Request, type Response } from "express";
import crypto from "crypto";

import User from "../models/user.model";
import { comparePassword, hashPassword } from "../utils/bcrypt";
import { generateVerificationCode } from "../utils/verificationCode";
import { generateTokenAndSetCookie } from "../utils/jwt";
import {
  sendPasswordResetEmail,
  sendVerificationToken,
  sendWelcomeEmail,
} from "../mailtrap/emails";
import config from "../config/env.config";

export const signup = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      throw new Error("All fields are required");
    }

    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      res.status(400).json({
        success: false,
        message: "User with this email already exists",
      });
    }

    const hashedPassword = await hashPassword(password);
    const verificationToken = generateVerificationCode();

    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
      verificationToken: verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
    });
    await newUser.save();

    //jwt
    const token = generateTokenAndSetCookie(res, newUser._id.toString());
    await sendVerificationToken(newUser.email, verificationToken);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        password: undefined,
      },
      token,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: (error as Error).message });
  }
};

//Login controller
export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({
        status: false,
        message: "Invalid Credentials",
      });
    }

    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        status: false,
        message: "Invalid Credentials",
      });
    }

    generateTokenAndSetCookie(res, user._id.toString());

    user.lastLogin = new Date();
    await user.save();

    //  Destructure before returning
    const { password: _pwd, ...userSafe } = user.toObject();

    return res.status(200).json({
      status: true,
      message: "Logged in Successfully",
      user: { ...userSafe },
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: (error as Error).message,
    });
  }
};
// Verify Token controller
export const verifyEmail = async (req: Request, res: Response) => {
  const { code } = req.body;
  try {
    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or Expired verification Code.",
      });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;

    await user.save();

    await sendWelcomeEmail(user.email, user.name);

    return res.status(200).json({
      success: true,
      message: "Email verified Successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        password: undefined,
      },
    });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: (error as Error).message });
  }
};

// LOgout Controller
export const logout = (req: Request, res: Response): void => {
  res.json({ message: "Logout endpoint is working!" });
};

// Forgot password
export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: true,
        message: "User not found",
      });
      //Generate reset Token
    }
    const resetToken = crypto.randomBytes(20).toString("hex");
    const resteTokenExpiresAt = new Date(Date.now() + 1 * 60 * 60 * 1000);
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiresAt = resteTokenExpiresAt;

    await user.save();

    await sendPasswordResetEmail(
      user.email,
      `${config.CLINET_URL}/reset-password/${resetToken}`,
    );

    res.status(200).json({
      status: true,
      message: "Password Reset Link is sent to your mail.",
    });
  } catch (error) {
    console.log("Erroe in sending password reset link", error);
    res.status(400).json({
      status: false,
      message: "Failed to reset the password",
    });
  }
};
