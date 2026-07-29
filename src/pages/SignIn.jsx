import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    // Simulate authentication API call
    setTimeout(() => {
      setLoading(false);
      // Let's redirect to dashboard
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-[#060608] flex items-center justify-center px-4 py-12 overflow-hidden font-body-md text-white">
      {/* Neon Gradient Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none"></div>

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="relative w-full max-w-md z-10">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors mb-8 group"
        >
          <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">
            arrow_back
          </span>
          Back to Portal
        </Link>

        {/* Auth Card */}
        <div className="bg-[#0e0e11]/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          {/* Logo / Header */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <span className="font-display-lg text-2xl uppercase tracking-tighter text-white">
                After<span className="text-primary neon-glow">Dark</span>
              </span>
            </Link>
            <h2 className="text-xl font-bold tracking-wider uppercase mt-4 text-white">
              Access Granted
            </h2>
            <p className="text-xs text-on-surface-variant mt-2 uppercase tracking-widest">
              Provide credentials to sync your neural link.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 p-3 rounded-lg text-xs font-mono uppercase tracking-wide flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">warning</span>
                {error}
              </div>
            )}

            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-2">
                Neural Email
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-lg">
                  mail
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder:text-on-surface-variant/40 focus:border-primary/50 focus:outline-none transition-all font-mono"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
                  Access Key
                </label>
                <Link
                  to="/forgot-password"
                  className="text-[10px] uppercase tracking-widest font-bold text-primary hover:underline"
                >
                  Forgot Key?
                </Link>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-lg">
                  lock
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder:text-on-surface-variant/40 focus:border-primary/50 focus:outline-none transition-all font-mono"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-on-primary font-bold py-3.5 rounded-xl transition-all uppercase tracking-wider text-xs hover:shadow-[0_0_20px_rgba(255,0,214,0.6)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Verifying Link...
                </>
              ) : (
                <>
                  Establish Access
                  <span className="material-symbols-outlined text-sm">login</span>
                </>
              )}
            </button>
          </form>

          {/* Footer Link */}
          <div className="text-center mt-8 pt-6 border-t border-white/5">
            <p className="text-xs text-on-surface-variant uppercase tracking-wider">
              New Operator?{" "}
              <Link to="/signup" className="text-primary font-bold hover:underline">
                Register Credentials
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
