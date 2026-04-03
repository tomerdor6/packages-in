export function DocsPage() {
  return (
    <div className="p-12 max-w-4xl mx-auto space-y-8 min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold border-b border-border pb-4">Project Documentation</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-primary">Architecture Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            This module represents the extracted architectural components of the Webappdesignpackages master reference. 
            Built aggressively complying with SOLID principles: Single Responsibility, and Interface Segregation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-primary">Design System</h2>
          <p className="text-muted-foreground leading-relaxed">
            Variables and dark modes mapped specifically from CSS custom properties defined in `theme.css`. Components 
            like Buttons and Forms are decoupled from logic.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-primary">Routing</h2>
          <p className="text-muted-foreground leading-relaxed">
            Uses `react-router` v7 to implement a pure component-based routing architecture. Everything navigates out from the HubPage.
          </p>
        </section>
      </div>
    </div>
  );
}
