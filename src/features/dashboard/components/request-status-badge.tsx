import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, XCircle, AlertCircle } from "lucide-react";
import { RequestStatus } from "./types";

export function RequestStatusBadge({ status }: { status: RequestStatus }) {
  const config = {
    Completed: {
      variant: "default" as const,
      className: "bg-success text-success-foreground hover:bg-success",
      icon: CheckCircle2,
    },
    "In Progress": {
      variant: "default" as const,
      className: "bg-info text-info-foreground hover:bg-info",
      icon: Clock,
    },
    Failed: {
      variant: "destructive" as const,
      className: "",
      icon: XCircle,
    },
    Pending: {
      variant: "secondary" as const,
      className: "bg-warning text-warning-foreground hover:bg-warning",
      icon: AlertCircle,
    },
  };

  const { variant, className, icon: Icon } = config[status];

  return (
    <Badge variant={variant} className={`flex items-center gap-1.5 ${className}`}>
      <Icon className="size-3" />
      {status}
    </Badge>
  );
}
