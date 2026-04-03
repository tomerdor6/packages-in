import { Outlet, useLocation } from "react-router";
import { Navbar } from "./navbar";

export function Layout() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/" || location.pathname === "/login";

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {!isLoginPage && <Navbar />}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
