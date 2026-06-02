"use client";

export default function LoginButtons() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  const handleGithubLogin = () => {
    window.location.href = "http://localhost:5000/auth/github";
  };
  const handleFacebookLogin = () => {
    window.location.href = "http://localhost:5000/auth/facebook";
  };

  return (
    <div className="button-group">
      <button onClick={handleGoogleLogin} className="oauth-btn google-btn">
        <span className="icon">
          <img src="https://www.google.com/favicon.ico" alt="Google" />
        </span>
        Continue with Google
      </button>

      <button onClick={handleGithubLogin} className="oauth-btn github-btn">
        <span className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38
            0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
            -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21
            1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
            0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12
            0 0 .67-.21 2.2.82a7.56 7.56 0 014.01 0c1.53-1.04
            2.2-.82 2.2-.82.44 1.1.16 1.92.08
            2.12.51.56.82 1.27.82 2.15
            0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54
            1.48 0 1.07-.01 1.93-.01 2.2
            0 .21.15.46.55.38A8.001 8.001
            0 0016 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
        </span>
        Continue with GitHub
      </button>
      <button onClick={handleFacebookLogin} className="oauth-btn facebook-btn">
        <span className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 320 512"
          >
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
          </svg>
        </span>
        Continue with Facebook
      </button>
      
    </div>
  );
}
