import { Link } from "react-router";
import { CopyPlus, Network, Settings, BookOpen, ExternalLink, ShieldCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const modules = [
  { title: "Monitor Dashboard", description: "View high-fidelity data visualizations.", icon: Network, to: "/dashboard", color: "text-blue-500", bg: "bg-blue-500/10" },
  { title: "Documentation", description: "Technical project docs.", icon: BookOpen, to: "/docs", color: "text-amber-500", bg: "bg-amber-500/10" },
  { title: "Automation Suite", description: "Trigger Strategy-based automations.", icon: Settings, to: "/automations", color: "text-green-500", bg: "bg-green-500/10" },
  { title: "Feature Intake", description: "Request features (Email Service DI).", icon: CopyPlus, to: "/intake", color: "text-purple-500", bg: "bg-purple-500/10" },
  { title: "External Issues", description: "Secure 3rd party application links.", icon: ExternalLink, to: "/external", color: "text-indigo-500", bg: "bg-indigo-500/10" }
];

export function HubPage() {
  return (
    <div className="min-h-screen bg-background p-8 md:p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground flex items-center gap-3">
              <ShieldCheck className="size-10 text-primary" />
              Navigation Hub
            </h1>
            <p className="text-muted-foreground text-lg mt-2">Central entry point for the workspace modules.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <Link key={mod.to} to={mod.to} className="group outline-none">
              <Card className="h-full hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
                <CardHeader>
                  <div className={`size-12 rounded-xl ${mod.bg} ${mod.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                    <mod.icon className="size-6" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{mod.title}</CardTitle>
                  <CardDescription className="text-sm mt-2">{mod.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
