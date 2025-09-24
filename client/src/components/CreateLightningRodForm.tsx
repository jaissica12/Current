import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface CreateLightningRodFormProps {
  onSubmit: (data: {
    title: string;
    problemContext: string;
    implementationPlan: string;
    budget: string;
  }) => void;
}

export default function CreateLightningRodForm({ onSubmit }: CreateLightningRodFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    problemContext: "",
    implementationPlan: "",
    budget: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title.trim()) {
      toast({
        title: "Validation Error",
        description: "Title is required",
        variant: "destructive"
      });
      return;
    }

    if (!formData.problemContext.trim()) {
      toast({
        title: "Validation Error", 
        description: "Problem/Context is required",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await onSubmit(formData);
      
      // Reset form
      setFormData({
        title: "",
        problemContext: "",
        implementationPlan: "",
        budget: ""
      });
      
      toast({
        title: "Success",
        description: "Lightning Rod created successfully!"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create Lightning Rod",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create New Lightning Rod</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              placeholder="Enter Lightning Rod title..."
              data-testid="input-title"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="problemContext">Problem/Context</Label>
            <Textarea
              id="problemContext"
              value={formData.problemContext}
              onChange={(e) => handleInputChange("problemContext", e.target.value)}
              placeholder="Describe the problem or context..."
              rows={4}
              data-testid="textarea-problem-context"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="implementationPlan">Implementation Plan / Impact / Idea / Success Metric</Label>
            <Textarea
              id="implementationPlan"
              value={formData.implementationPlan}
              onChange={(e) => handleInputChange("implementationPlan", e.target.value)}
              placeholder="Describe your implementation plan, expected impact, key ideas, and success metrics..."
              rows={6}
              data-testid="textarea-implementation-plan"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Resources Needed</Label>
            <Input
              id="budget"
              value={formData.budget}
              onChange={(e) => handleInputChange("budget", e.target.value)}
              placeholder="Enter budget/resources needed..."
              data-testid="input-budget"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
            data-testid="button-submit"
          >
            {isSubmitting ? "Creating..." : "Create Lightning Rod"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}