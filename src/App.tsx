import { RouterProvider } from "react-router";
import { router } from "./app/routes";
import { AutomationProvider } from "./services/automation/AutomationContext";
import { ThemeProvider } from "./context/theme-context";
import { AuthProvider } from "./context/auth-context";

export function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AutomationProvider>
          <RouterProvider router={router} />
        </AutomationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
