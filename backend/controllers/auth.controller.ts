import { type Request, type Response } from "express";
import User from "../models/user.model";
import { hashPassword } from "../utils/bcrypt";
import { generateVerificationCode } from "../utils/verificationCode";
import { generateTokenAndSetCookie } from "../utils/jwt";
import { sendVerificationToken, sendWelcomeEmail } from "../mailtrap/emails";

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

export const signin = (req: Request, res: Response): void => {
  res.json({ message: "Signin endpoint is working!" });
};

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

export const logout = (req: Request, res: Response): void => {
  res.json({ message: "Logout endpoint is working!" });
};
