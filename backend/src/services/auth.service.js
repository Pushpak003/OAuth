import jwt from "jsonwebtoken";
import { prisma } from "../config/db.js";

export const findOrCreateUser = async ({
  name,
  email,
  avatar,
  provider,
  providerId,
}) => {
  let user = await prisma.user.findUnique({
    where: {
      providerId,
    },
  });

  if (user) return user;

  user = await prisma.user.create({
    data: {
      name,
      email,
      avatar,
      provider,
      providerId,
    },
  });

  return user;
};
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
    },
  );
};
