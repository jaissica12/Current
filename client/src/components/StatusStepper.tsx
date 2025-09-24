import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, AlertCircle, XCircle, Users, Bot } from "lucide-react";
import { LightningRod } from "./LightningRodCard";

interface StatusStepperProps {
  lightningRod: LightningRod;
}

interface StatusStep {
  id: string;
  label: string;
  status: "completed" | "active" | "pending" | "rejected";
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
}

const getStepsForLightningRod = (lightningRod: LightningRod): StatusStep[] => {
  const baseSteps: StatusStep[] = [
    {
      id: "submitted",
      label: "Lightning Rod Submitted",
      status: "completed",
      icon: CheckCircle,
      description: lightningRod.title
    },
    {
      id: "ai-feedback",
      label: "AI Suggested Feedback",
      status: lightningRod.status === "active" ? "active" : "completed",
      icon: Bot,
      description: "AI analysis suggests focusing on scalability metrics and risk mitigation strategies." // TODO: remove mock functionality
    },
    {
      id: "people-review",
      label: "In Review (People Leader / Team)",
      status: lightningRod.status === "in-review" ? "pending" : 
              lightningRod.status === "approved" || lightningRod.status === "rejected" ? "completed" : "pending",
      icon: Users,
      description: "Awaiting review from team leadership"
    },
    {
      id: "ai-reviewer",
      label: "In Review (Suggested AI Reviewer)",
      status: lightningRod.status === "approved" ? "completed" : 
              lightningRod.status === "rejected" ? "rejected" : "pending",
      icon: Bot,
      description: "AI-powered comprehensive review analysis"
    },
    {
      id: "final-status",
      label: "Final Status",
      status: lightningRod.status === "approved" ? "completed" : 
              lightningRod.status === "rejected" ? "rejected" : "pending",
      icon: lightningRod.status === "approved" ? CheckCircle : 
            lightningRod.status === "rejected" ? XCircle : Clock,
      description: lightningRod.status === "approved" ? "To Be Initiated (TBI)" :
                  lightningRod.status === "rejected" ? "Archived" :
                  lightningRod.status === "archived" ? "Archived" : "Pending completion"
    }
  ];

  return baseSteps;
};

const statusColors = {
  completed: "bg-chart-1 text-white",
  active: "bg-primary text-primary-foreground",
  pending: "bg-muted text-muted-foreground",
  rejected: "bg-destructive text-destructive-foreground"
};

const statusIcons = {
  completed: CheckCircle,
  active: Clock,
  pending: AlertCircle,
  rejected: XCircle
};

export default function StatusStepper({ lightningRod }: StatusStepperProps) {
  const steps = getStepsForLightningRod(lightningRod);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Lightning Rod Workflow Status
          <Badge variant="outline" data-testid={`badge-overall-status-${lightningRod.id}`}>
            {lightningRod.status.replace("-", " ")}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {steps.map((step, index) => {
            const StatusIcon = statusIcons[step.status];
            const StepIcon = step.icon;
            
            return (
              <div 
                key={step.id}
                className="flex items-start gap-4 relative"
                data-testid={`step-${step.id}-${lightningRod.id}`}
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-4 top-8 w-0.5 h-8 bg-border" />
                )}
                
                {/* Step icon */}
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  step.status === "completed" ? "bg-chart-1" :
                  step.status === "active" ? "bg-primary" :
                  step.status === "rejected" ? "bg-destructive" :
                  "bg-muted"
                }`}>
                  <StatusIcon className={`w-4 h-4 ${
                    step.status === "pending" ? "text-muted-foreground" : "text-white"
                  }`} />
                </div>

                {/* Step content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <StepIcon className="w-4 h-4 text-muted-foreground" />
                    <h3 className="font-medium text-foreground">{step.label}</h3>
                    <Badge 
                      className={statusColors[step.status]}
                      data-testid={`badge-step-status-${step.id}`}
                    >
                      {step.status}
                    </Badge>
                  </div>
                  {step.description && (
                    <p className="text-sm text-muted-foreground" data-testid={`text-step-description-${step.id}`}>
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}