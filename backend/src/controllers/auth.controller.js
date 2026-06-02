import { generateToken } from "../services/auth.service.js";
import { prisma } from "../config/db.js";

export const getCurrentUser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
    });

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const oauthSuccess = async (req, res) => {
  const token = generateToken(req.user);

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });

  res.redirect("http://localhost:3000/dashboard");
};
