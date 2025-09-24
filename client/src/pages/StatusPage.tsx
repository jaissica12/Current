import { useState } from "react";
import StatusStepper from "@/components/StatusStepper";
import LightningRodCard, { type LightningRod } from "@/components/LightningRodCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, ArrowLeft, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// TODO: remove mock functionality - replace with real data
const mockLightningRods: LightningRod[] = [
  {
    id: "1",
    title: "AI-Powered Customer Support Chatbot",
    problemContext: "Customer support response times are too slow, leading to decreased satisfaction scores.",
    implementationPlan: "Deploy ML-based chatbot to handle tier-1 support queries, with escalation paths to human agents for complex issues.",
    budget: "$50,000",
    status: "active",
    lastUpdated: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    currentPhase: "AI Review"
  },
  {
    id: "2", 
    title: "Automated Code Review System",
    problemContext: "Manual code reviews create bottlenecks in our deployment pipeline.",
    implementationPlan: "Implement automated code analysis tools with custom rules for security, performance, and style compliance.",
    budget: "$30,000",
    status: "in-review",
    lastUpdated: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    currentPhase: "Team Review"
  },
  {
    id: "3",
    title: "Real-time Analytics Dashboard",
    problemContext: "Business stakeholders lack visibility into key performance metrics in real-time.",
    implementationPlan: "Build comprehensive analytics dashboard with live data feeds and customizable widgets.",
    budget: "$75,000",
    status: "archived",
    lastUpdated: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
  },
  {
    id: "4",
    title: "Mobile App Performance Optimization",
    problemContext: "Mobile app load times are impacting user retention rates.",
    implementationPlan: "Implement lazy loading, optimize images, and redesign data fetching strategies.",
    budget: "$25,000",
    status: "approved",
    lastUpdated: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    currentPhase: "Implementation"
  }
];

export default function StatusPage() {
  const [selectedRod, setSelectedRod] = useState<LightningRod | null>(mockLightningRods[0]);
  const [activeOpen, setActiveOpen] = useState(true);
  const [inReviewOpen, setInReviewOpen] = useState(true);
  const [archivedOpen, setArchivedOpen] = useState(false);

  const activeRods = mockLightningRods.filter(rod => rod.status === "active" || rod.status === "approved");
  const inReviewRods = mockLightningRods.filter(rod => rod.status === "in-review");
  const archivedRods = mockLightningRods.filter(rod => rod.status === "archived");

  return (
    <div className="space-y-6 p-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-foreground flex items-center gap-2" data-testid="text-page-title">
          <BarChart3 className="w-8 h-8" />
          Status Tracking
        </h1>
        <p className="text-muted-foreground" data-testid="text-page-description">
          Monitor the progress of Lightning Rods through the approval workflow
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Lightning Rod Selection */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Select Lightning Rod</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Active Lightning Rods */}
            <Collapsible open={activeOpen} onOpenChange={setActiveOpen}>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg p-2 hover-elevate">
                <span className="font-medium text-sm">Active ({activeRods.length})</span>
                {activeOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 mt-2">
                {activeRods.map(rod => (
                  <div
                    key={rod.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors hover-elevate ${
                      selectedRod?.id === rod.id ? "bg-primary/10 border-primary" : "hover:bg-muted/50"
                    }`}
                    onClick={() => setSelectedRod(rod)}
                    data-testid={`selector-rod-${rod.id}`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-medium text-sm leading-tight">{rod.title}</h3>
                        <Badge 
                          variant="outline" 
                          className="text-xs"
                          data-testid={`badge-status-${rod.id}`}
                        >
                          {rod.status.replace("-", " ")}
                        </Badge>
                      </div>
                      {rod.currentPhase && (
                        <p className="text-xs text-muted-foreground">{rod.currentPhase}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {/* In Review Lightning Rods */}
            <Collapsible open={inReviewOpen} onOpenChange={setInReviewOpen}>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg p-2 hover-elevate">
                <span className="font-medium text-sm">In Review ({inReviewRods.length})</span>
                {inReviewOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 mt-2">
                {inReviewRods.map(rod => (
                  <div
                    key={rod.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors hover-elevate ${
                      selectedRod?.id === rod.id ? "bg-primary/10 border-primary" : "hover:bg-muted/50"
                    }`}
                    onClick={() => setSelectedRod(rod)}
                    data-testid={`selector-rod-${rod.id}`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-medium text-sm leading-tight">{rod.title}</h3>
                        <Badge 
                          variant="outline" 
                          className="text-xs"
                          data-testid={`badge-status-${rod.id}`}
                        >
                          {rod.status.replace("-", " ")}
                        </Badge>
                      </div>
                      {rod.currentPhase && (
                        <p className="text-xs text-muted-foreground">{rod.currentPhase}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {/* Archived Lightning Rods */}
            <Collapsible open={archivedOpen} onOpenChange={setArchivedOpen}>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg p-2 hover-elevate">
                <span className="font-medium text-sm">Archived ({archivedRods.length})</span>
                {archivedOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 mt-2">
                {archivedRods.map(rod => (
                  <div
                    key={rod.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors hover-elevate ${
                      selectedRod?.id === rod.id ? "bg-primary/10 border-primary" : "hover:bg-muted/50"
                    }`}
                    onClick={() => setSelectedRod(rod)}
                    data-testid={`selector-rod-${rod.id}`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-medium text-sm leading-tight">{rod.title}</h3>
                        <Badge 
                          variant="outline" 
                          className="text-xs"
                          data-testid={`badge-status-${rod.id}`}
                        >
                          {rod.status.replace("-", " ")}
                        </Badge>
                      </div>
                      {rod.currentPhase && (
                        <p className="text-xs text-muted-foreground">{rod.currentPhase}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>

        {/* Status Details */}
        <div className="lg:col-span-2">
          {selectedRod ? (
            <div className="space-y-6">
              {/* Lightning Rod Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {selectedRod.title}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedRod(null)}
                      data-testid="button-back"
                    >
                      <ArrowLeft className="w-4 h-4 mr-1" />
                      Back
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm mb-1">Problem/Context</h4>
                      <p className="text-sm text-muted-foreground">{selectedRod.problemContext}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Implementation Plan</h4>
                      <p className="text-sm text-muted-foreground">{selectedRod.implementationPlan}</p>
                    </div>
                    <div className="flex gap-4">
                      <div>
                        <h4 className="font-medium text-sm mb-1">Resources Needed</h4>
                        <p className="text-sm text-muted-foreground">{selectedRod.budget}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-1">Last Updated</h4>
                        <p className="text-sm text-muted-foreground">
                          {selectedRod.lastUpdated.toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Workflow Stepper */}
              <StatusStepper lightningRod={selectedRod} />
            </div>
          ) : (
            <Card>
              <CardContent className="flex items-center justify-center h-64">
                <p className="text-muted-foreground" data-testid="text-no-selection">
                  Select a Lightning Rod to view its status workflow
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}