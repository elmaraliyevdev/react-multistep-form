import { Check } from "lucide-react";
import { Step } from "@/types";

interface FormStepProps {
  steps: Step[];
  currentStep: number;
}

export function FormStep({ steps, currentStep }: FormStepProps) {
  return (
    <div className="mb-8">
      <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100">
        <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;

            return (
              <li key={step.title} className="flex items-center gap-2 bg-white p-2">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-center text-[10px]/6 font-bold
                    ${
                      isCompleted
                        ? "bg-blue-600 text-white"
                        : isCurrent
                        ? "border-2 border-blue-600 bg-white text-blue-600"
                        : "bg-gray-100 text-gray-500"
                    }`}
                >
                  {isCompleted ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    index + 1
                  )}
                </span>

                <div className="hidden sm:block">
                  <p className="font-medium text-gray-900">{step.title}</p>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}