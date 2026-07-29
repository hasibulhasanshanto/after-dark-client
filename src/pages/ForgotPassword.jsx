import { useState } from "react";
import { Link } from "react-router";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please provide your email address.");
      return;
    }

    setLoading(true);

    // Simulate sending reset password transmission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
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
          to="/signin"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors mb-8 group"
        >
          <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">
            arrow_back
          </span>
          Back to Access Portal
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
              Recover Key
            </h2>
            <p className="text-xs text-on-surface-variant mt-2 uppercase tracking-widest">
              Broadcast decryption instructions to your registered email.
            </p>
          </div>

          {!success ? (
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

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-on-primary font-bold py-3.5 rounded-xl transition-all uppercase tracking-wider text-xs hover:shadow-[0_0_20px_rgba(255,0,214,0.6)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Broadcasting Transmission...
                  </>
                ) : (
                  <>
                    Send Recovery Link
                    <span className="material-symbols-outlined text-sm">sensors</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="space-y-6 text-center animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mx-auto shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <span className="material-symbols-outlined text-3xl animate-pulse">
                  satellite_alt
                </span>
              </div>
              <div>
                <h3 className="text-md font-bold uppercase tracking-wider text-white">
                  Transmission Sent
                </h3>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed uppercase tracking-wider">
                  Decryption signals broadcasted to <span className="text-white font-mono">{email}</span>. Click the link inside the message within 15 minutes to reset your passkey.
                </p>
              </div>

              {/* Simulation link to Reset Password */}
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-[11px] uppercase tracking-wider text-on-surface-variant mb-2">
                  Simulation Shortcut
                </p>
                <Link
                  to="/reset-password"
                  className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:underline"
                >
                  Go directly to Reset Password page
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </Link>
              </div>

              <Link
                to="/signin"
                className="inline-block w-full border border-white/10 hover:border-white/20 text-white font-bold py-3 rounded-xl transition-all uppercase tracking-wider text-xs hover:bg-white/5 text-center cursor-pointer"
              >
                Back to Authentication
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
