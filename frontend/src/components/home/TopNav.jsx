import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const navLinkStyles = ({ isActive }) =>
  `rounded-full px-4 py-2 text-sm font-medium transition ${
    isActive
      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
      : "text-emerald-900/70 hover:bg-emerald-50/60 hover:text-emerald-900"
  }`;

function TopNav() {
  const { isAuthenticated, userEmail, logout } = useAuth();
  const navigate = useNavigate();

  const initials = userEmail
    ? userEmail
        .split("@")[0]
        .split(".")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "LD";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="sticky top-4 z-30 mx-auto w-full max-w-6xl px-4">
      <nav className="flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/60 bg-white/70 px-5 py-3 shadow-lg shadow-emerald-900/10 backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <LeafIcon className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <p className="text-base font-semibold text-emerald-900">LeafDiagnose AI</p>
            <p className="text-xs text-emerald-700/70">AI Plant Health Assistant</p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <NavLink to="/" className={navLinkStyles}>
            Home
          </NavLink>
          <NavLink to="/history" className={navLinkStyles}>
            History
          </NavLink>
        </div>

        <div className="flex flex-1 items-center justify-end gap-3 md:flex-none">
          <div className="hidden items-center gap-2 rounded-full border border-emerald-100/70 bg-white/80 px-4 py-2 text-sm text-emerald-900/60 md:flex">
            <SearchIcon className="h-4 w-4 text-emerald-700/70" />
            <input
              type="text"
              placeholder="Search for plants, predictions..."
              className="w-48 bg-transparent text-sm text-emerald-900 placeholder-emerald-600/60 outline-none"
            />
          </div>

          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleLogout}
                className="hidden rounded-full border border-emerald-200/60 px-4 py-2 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-50 md:inline-flex"
              >
                Logout
              </button>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white">
                {initials}
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-600/30 transition hover:scale-[1.02]"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

function LeafIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path
        d="M4.5 15.5C9.5 4.5 18 3 20 3c0 2-1.5 10.5-12.5 15.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 18c3-1 5.5-3.5 7-6" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default TopNav;
