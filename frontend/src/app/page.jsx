import LoginButtons from "@/components/LoginButtons";

export default function Home() {
  return (
    <main className="container">
      <div className="glow"></div>

      <div className="card">
        <div className="logo">🔐</div>

        <h1>Welcome Back</h1>

        <p>
          Continue with your preferred provider
        </p>

        <LoginButtons />
      </div>
    </main>
  );
}