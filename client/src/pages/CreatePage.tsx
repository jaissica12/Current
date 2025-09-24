import CreateLightningRodForm from "@/components/CreateLightningRodForm";
import { useLocation } from "wouter";

export default function CreatePage() {
  const [, setLocation] = useLocation();

  const handleSubmit = async (data: {
    title: string;
    problemContext: string;
    implementationPlan: string;
    budget: string;
  }) => {
    // TODO: remove mock functionality - replace with real API call
    console.log('Creating Lightning Rod:', data);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Navigate back to live page
    setLocation("/");
  };

  return (
    <div className="space-y-6 p-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-foreground" data-testid="text-page-title">
          Create Lightning Rod
        </h1>
        <p className="text-muted-foreground" data-testid="text-page-description">
          Submit your innovation idea or proposal for review
        </p>
      </div>

      <CreateLightningRodForm onSubmit={handleSubmit} />
    </div>
  );
}