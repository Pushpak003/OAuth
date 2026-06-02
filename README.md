# OAuth Authentication System

A simple authentication system built using Next.js, Express.js, Passport.js, JWT, PostgreSQL, and Prisma.

## Features

* Google OAuth
* GitHub OAuth
* Facebook OAuth
* JWT Authentication
* HTTP-Only Cookies
* PostgreSQL + Prisma
* Protected Routes
* User Dashboard

## Tech Stack

* Next.js
* Express.js
* Passport.js
* PostgreSQL
* Prisma
* JWT

## Flow

```text
Login
  ↓
OAuth Provider
  ↓
Callback
  ↓
Find/Create User
  ↓
Generate JWT
  ↓
Set Cookie
  ↓
Dashboard
```

## Setup

```bash
npm install
npx prisma migrate dev
npm run dev
```
