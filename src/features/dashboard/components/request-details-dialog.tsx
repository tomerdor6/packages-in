import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle2, Clock } from "lucide-react";
import { ProjectRequest } from "./types";
import { RequestStatusBadge } from "./request-status-badge";

interface RequestDetailsDialogProps {
  selectedRequest: ProjectRequest | null;
  onClose: () => void;
}

export function RequestDetailsDialog({ selectedRequest, onClose }: RequestDetailsDialogProps) {
  return (
    <Dialog open={!!selectedRequest} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Request Details</span>
            {selectedRequest && <RequestStatusBadge status={selectedRequest.status} />}
          </DialogTitle>
        </DialogHeader>

        {selectedRequest && (
          <div className="space-y-6">
            {/* Request Info */}
            <div className="grid grid-cols-1 gap-4 p-4 bg-muted/50 rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground">Request ID</p>
                <p className="font-mono font-medium">{selectedRequest.id}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Summary</p>
                <p className="font-medium">{selectedRequest.inputSummary}</p>
              </div>
            </div>

            {/* Progress Steps */}
            <div className="space-y-1">
              <h3 className="font-semibold mb-4">Request Lifecycle</h3>
              <div className="relative">
                {selectedRequest.steps.map((step, index) => {
                  const isLast = index === selectedRequest.steps.length - 1;

                  return (
                    <div key={step.id} className="relative flex gap-4 pb-8 last:pb-0">
                      {/* Timeline line */}
                      {!isLast && (
                        <div
                          className={`absolute left-5 top-11 w-0.5 h-full ${
                            step.status === "completed"
                              ? "bg-primary"
                              : "bg-border"
                          }`}
                        />
                      )}

                      {/* Step indicator */}
                      <div className="relative flex flex-col items-center">
                        <div
                          className={`size-10 rounded-full flex items-center justify-center font-semibold z-10 transition-all ${
                            step.status === "completed"
                              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                              : step.status === "current"
                              ? "bg-info text-info-foreground shadow-lg shadow-info/20 animate-pulse"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {step.status === "completed" ? (
                            <CheckCircle2 className="size-5" />
                          ) : step.status === "current" ? (
                            <Clock className="size-5" />
                          ) : (
                            <span className="text-sm">{step.id}</span>
                          )}
                        </div>
                      </div>

                      {/* Step content */}
                      <div className="flex-1 pt-1">
                        <h4 className="font-semibold mb-1">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
