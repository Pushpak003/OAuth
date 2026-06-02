import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      provider: user.provider,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};