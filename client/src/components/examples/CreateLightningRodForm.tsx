import CreateLightningRodForm from '../CreateLightningRodForm'

export default function CreateLightningRodFormExample() {
  const handleSubmit = async (data: {
    title: string;
    problemContext: string;
    implementationPlan: string;
    budget: string;
  }) => {
    console.log('Form submitted:', data);
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  return (
    <div className="p-4">
      <CreateLightningRodForm onSubmit={handleSubmit} />
    </div>
  )
}