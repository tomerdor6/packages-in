import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity, Users, Database, Server } from "lucide-react";

export function MonitorDashboard() {
  return (
    <div className="p-8 space-y-8 bg-background min-h-[calc(100vh-4rem)]">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">System Monitor Dashboard</h1>
        <p className="text-muted-foreground">High-fidelity replica visualization.</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">+19% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">+201 since last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Database Status</CardTitle>
            <Database className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">Healthy</div>
            <p className="text-xs text-muted-foreground">99.99% Uptime</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Servers</CardTitle>
            <Server className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Load average: 1.24</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center bg-accent/20 rounded-md border border-dashed border-border m-6 mt-0">
             <span className="text-muted-foreground">Chart Replica Area (Recharts)</span>
          </CardContent>
        </Card>
        <Card className="col-span-3">
           <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center bg-accent/20 rounded-md border border-dashed border-border m-6 mt-0">
             <span className="text-muted-foreground">List Replica Area</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
