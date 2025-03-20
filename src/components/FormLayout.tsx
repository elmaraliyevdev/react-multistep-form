import { FormStep } from "@/components/FormStep";
import { FormLayoutProps, Step } from "@/types";

const steps: Step[] = [
  {
    title: "Number Type",
    description: "Choose country and type",
  },
  {
    title: "Identity Type",
    description: "Select business or individual",
  },
  {
    title: "RIS Form",
    description: "Complete registration",
  },
];

export function FormLayout({ title, subtitle, currentStep, children }: FormLayoutProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 py-12">
      <div className="w-full max-w-3xl mx-4 bg-white shadow-sm rounded-lg border p-6">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
        </div>

        <FormStep steps={steps} currentStep={currentStep} />

        <div>
          {children}
        </div>
      </div>
    </div>
  );
}