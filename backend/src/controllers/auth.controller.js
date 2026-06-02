import { generateToken } from "../services/auth.service.js";

export const oauthSuccess = async (req, res) => {
  const token = generateToken(req.user);

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });

  res.redirect("http://localhost:3000/dashboard");
};