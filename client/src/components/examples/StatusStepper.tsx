import StatusStepper from '../StatusStepper'

export default function StatusStepperExample() {
  const mockLightningRod = {
    id: "1",
    title: "AI-Powered Customer Support Chatbot",
    problemContext: "Customer support response times are too slow, leading to decreased satisfaction scores.",
    implementationPlan: "Deploy ML-based chatbot to handle tier-1 support queries, with escalation paths to human agents for complex issues.",
    budget: "$50,000",
    status: "in-review" as const,
    lastUpdated: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    currentPhase: "Team Review"
  };

  return (
    <div className="p-4 max-w-2xl">
      <StatusStepper lightningRod={mockLightningRod} />
    </div>
  )
}