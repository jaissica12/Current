import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

export interface LightningRod {
  id: string;
  title: string;
  problemContext: string;
  implementationPlan: string;
  budget: string;
  status: "active" | "archived" | "in-review" | "approved" | "rejected";
  lastUpdated: Date;
  currentPhase?: string;
}

interface LightningRodCardProps {
  lightningRod: LightningRod;
  onClick?: () => void;
}

const statusColors = {
  active: "bg-primary text-primary-foreground",
  archived: "bg-muted text-muted-foreground",
  "in-review": "bg-secondary text-secondary-foreground",
  approved: "bg-chart-1 text-white", 
  rejected: "bg-destructive text-destructive-foreground"
};

export default function LightningRodCard({ lightningRod, onClick }: LightningRodCardProps) {
  return (
    <Card 
      className="hover-elevate cursor-pointer transition-shadow"
      onClick={onClick}
      data-testid={`card-lightning-rod-${lightningRod.id}`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-lg leading-tight" data-testid={`text-title-${lightningRod.id}`}>
            {lightningRod.title}
          </CardTitle>
          <Badge 
            className={statusColors[lightningRod.status]}
            data-testid={`badge-status-${lightningRod.id}`}
          >
            {lightningRod.status.replace("-", " ")}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2" data-testid={`text-context-${lightningRod.id}`}>
          {lightningRod.problemContext}
        </p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span data-testid={`text-updated-${lightningRod.id}`}>
            Updated {formatDistanceToNow(lightningRod.lastUpdated, { addSuffix: true })}
          </span>
          {lightningRod.currentPhase && (
            <span className="font-medium" data-testid={`text-phase-${lightningRod.id}`}>
              {lightningRod.currentPhase}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}