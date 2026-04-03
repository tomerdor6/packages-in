import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const externalLinks = [
  { id: "jira", name: "Jira Dashboard", url: "https://jira.atlassian.com", desc: "Track and organize issues." },
  { id: "github", name: "GitHub Issues", url: "https://github.com", desc: "View pull requests and code issues." },
  { id: "sentry", name: "Sentry Exceptions", url: "https://sentry.io", desc: "Monitor runtime exceptions and crashes." },
  { id: "datadog", name: "Datadog Errors", url: "https://datadoghq.com", desc: "Analytics on backend anomalies." },
  { id: "pagerduty", name: "PagerDuty Incidents", url: "https://pagerduty.com", desc: "Active on-call incidents." }
];

export function ExternalIssuesMenu() {
  return (
    <div className="min-h-screen bg-background p-8 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">External Issues</h1>
          <p className="text-muted-foreground mt-2">Links out to 3rd party web applications to manage issues.</p>
        </header>

        <div className="flex flex-col gap-4">
          {externalLinks.map((link) => (
            <a 
              key={link.id} 
              href={link.url}
              target="_blank" 
              rel="noopener noreferrer"
              className="group block outline-none"
            >
              <Card className="hover:border-primary/50 transition-colors cursor-pointer group-hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{link.name}</CardTitle>
                    <CardDescription className="text-sm mt-1">{link.desc}</CardDescription>
                  </div>
                  <ExternalLink className="size-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
