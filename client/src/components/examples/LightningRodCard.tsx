import LightningRodCard from '../LightningRodCard'

export default function LightningRodCardExample() {
  const mockLightningRod = {
    id: "1",
    title: "AI-Powered Customer Support Chatbot",
    problemContext: "Customer support response times are too slow, leading to decreased satisfaction scores.",
    implementationPlan: "Deploy ML-based chatbot to handle tier-1 support queries, with escalation paths to human agents for complex issues.",
    budget: "$50,000",
    status: "active" as const,
    lastUpdated: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    currentPhase: "AI Review"
  };

  return (
    <div className="p-4 max-w-md">
      <LightningRodCard 
        lightningRod={mockLightningRod} 
        onClick={() => console.log('Card clicked!')}
      />
    </div>
  )
}