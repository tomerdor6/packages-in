import { useLocation, Link, useNavigate } from "react-router";
import { Moon, Sun, LogOut, User as UserIcon } from "lucide-react";
import { useTheme } from "../context/theme-context";
import { useAuth } from "../context/auth-context";
import { Button } from "./ui/button";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navLinks = [
    { to: "/home", label: "Hub" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/docs", label: "Docs" },
    { to: "/automations", label: "Automations" },
    { to: "/intake", label: "Feature Intake" },
    { to: "/external", label: "External Issues" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link to="/home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-bold text-primary-foreground">S</span>
            </div>
            <span className="font-semibold text-lg hidden md:inline">Sherko Portal</span>
          </Link>
          <nav className="flex items-center gap-4 overflow-x-auto">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm transition-colors hover:text-primary whitespace-nowrap ${
                  location.pathname === link.to
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === "light" ? (
              <Moon className="size-5" />
            ) : (
              <Sun className="size-5" />
            )}
          </Button>
          
          {user && (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium hidden md:flex items-center gap-2 text-muted-foreground mr-2 border-l border-border pl-4">
                <UserIcon className="size-4" />
                {user.username}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="gap-2"
              >
                <LogOut className="size-4" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
