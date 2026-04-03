import { useState, FormEvent } from "react";
import { emailServiceInstance } from "@/services/email/EmailService";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function FeatureIntakeForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (description.length < 10) {
      setError("Description must be at least 10 characters long.");
      return;
    }
    setError("");
    setIsSubmitting(true);
    setStatus("idle");

    try {
      // Accessing service directly (can also be injected via Context)
      const success = await emailServiceInstance.sendFeatureRequest(title, description);
      if (success) {
        setStatus("success");
        setTitle("");
        setDescription("");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-card border border-border rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-2">Submit Feature Request</h1>
        <p className="text-muted-foreground mb-8">
          All requested features are dispatched securely to the engineering team.
        </p>

        {status === "success" && (
          <div className="mb-6 p-4 bg-success/20 text-success rounded-lg border border-success/40">
            Successfully submitted your feature request!
          </div>
        )}

        {status === "error" && (
          <div className="mb-6 p-4 bg-destructive/20 text-destructive rounded-lg border border-destructive/40">
            Failed to submit request. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Feature Title</Label>
            <Input 
              id="title" 
              placeholder="E.g. Add dark mode toggle" 
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Detailed Description</Label>
            <Textarea 
              id="description" 
              placeholder="Describe what the feature does and why it is needed..."
              className="min-h-[150px]"
              required
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                if (error) setError("");
              }}
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto px-8">
            {isSubmitting ? "Dispatching to Email Service..." : "Submit Feature"}
          </Button>
        </form>
      </div>
    </div>
  );
}
