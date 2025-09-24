import ApprovalsTable from '../ApprovalsTable'

export default function ApprovalsTableExample() {
  const mockLightningRods = [
    {
      id: "1",
      title: "AI-Powered Customer Support Chatbot",
      problemContext: "Customer support response times are too slow, leading to decreased satisfaction scores.",
      implementationPlan: "Deploy ML-based chatbot to handle tier-1 support queries.",
      budget: "$50,000",
      status: "active" as const,
      lastUpdated: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },
    {
      id: "2",
      title: "Automated Code Review System",
      problemContext: "Manual code reviews create bottlenecks in our deployment pipeline.",
      implementationPlan: "Implement automated code analysis tools.",
      budget: "$30,000",
      status: "in-review" as const,
      lastUpdated: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    }
  ];

  return (
    <div className="p-4">
      <ApprovalsTable
        lightningRods={mockLightningRods}
        onView={(id) => console.log('View:', id)}
        onApprove={(id) => console.log('Approve:', id)}
        onCancel={(id) => console.log('Cancel:', id)}
        onSendEmail={(id) => console.log('Send email:', id)}
        onGoToDoc={(id) => console.log('Go to doc:', id)}
      />
    </div>
  )
}