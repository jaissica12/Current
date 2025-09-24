import { useState } from "react";
import ApprovalsTable from "@/components/ApprovalsTable";
import { type LightningRod } from "@/components/LightningRodCard";
import { useLocation } from "wouter";

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

export default function ApprovalsPage() {
  const [lightningRods, setLightningRods] = useState<LightningRod[]>(mockLightningRods);
  const [, setLocation] = useLocation();

  const handleView = (id: string) => {
    console.log('Viewing Lightning Rod:', id);
    setLocation("/status");
  };

  const handleApprove = (id: string) => {
    setLightningRods(prev => 
      prev.map(rod => 
        rod.id === id 
          ? { ...rod, status: "approved" as const, currentPhase: "Implementation" }
          : rod
      )
    );
  };

  const handleCancel = (id: string) => {
    setLightningRods(prev => 
      prev.map(rod => 
        rod.id === id 
          ? { ...rod, status: "archived" as const, currentPhase: undefined }
          : rod
      )
    );
  };

  const handleSendEmail = (id: string) => {
    // TODO: remove mock functionality - replace with real email integration
    console.log('Sending review request email for Lightning Rod:', id);
  };

  const handleGoToDoc = (id: string) => {
    console.log('Opening documentation for Lightning Rod:', id);
    // TODO: remove mock functionality - replace with real document navigation
  };

  return (
    <div className="space-y-6 p-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground" data-testid="text-page-title">
          Approvals
        </h1>
        <p className="text-muted-foreground" data-testid="text-page-description">
          Manage Lightning Rod approvals and send review requests
        </p>
      </div>

      <ApprovalsTable
        lightningRods={lightningRods}
        onView={handleView}
        onApprove={handleApprove}
        onCancel={handleCancel}
        onSendEmail={handleSendEmail}
        onGoToDoc={handleGoToDoc}
      />
    </div>
  );
}