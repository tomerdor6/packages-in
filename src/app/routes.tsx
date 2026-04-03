import { createBrowserRouter, Navigate } from "react-router";

import { LoginPage } from "@/features/auth/LoginPage";
import { HubPage } from "@/features/navigation/HubPage";
import { MonitorDashboard } from "@/features/dashboard/MonitorDashboard";
import { DocsPage } from "@/features/documentation/DocsPage";
import { AutomationSuiteView } from "@/features/automation-suite/AutomationSuiteView";
import { FeatureIntakeForm } from "@/features/feature-intake/FeatureIntakeForm";
import { ExternalIssuesMenu } from "@/features/external-issues/ExternalIssuesMenu";

import { Layout } from "@/components/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Navigate to="/login" replace /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/home", element: <HubPage /> },
      { path: "/dashboard", element: <MonitorDashboard /> },
      { path: "/docs", element: <DocsPage /> },
      { path: "/automations", element: <AutomationSuiteView /> },
      { path: "/intake", element: <FeatureIntakeForm /> },
      { path: "/external", element: <ExternalIssuesMenu /> }
    ]
  }
]);
