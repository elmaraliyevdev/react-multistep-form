import { ReactNode } from 'react';
import { Card } from 'flowbite-react';

interface FormLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  currentStep: number;
}

const steps = [
  {
    title: "New Number",
    description: "Select location & type",
  },
  {
    title: "Identity",
    description: "Choose identity type",
  },
  {
    title: "RIS Form",
    description: "Complete submission",
  },
];

export function FormLayout({ title, subtitle, children, currentStep }: FormLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <div className="space-y-4">
          <div className="flex flex-col space-y-1">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <p className="text-gray-600">{subtitle}</p>
          </div>

          {/* Progress Steps */}
          <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
            {steps.map((step, index) => (
              <li key={step.title} className={`flex md:w-full items-center ${index < steps.length - 1 ? 'after:content-[""] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10' : ''} ${currentStep >= index ? 'text-blue-600 dark:text-blue-500' : ''}`}>
                <span className={`flex items-center justify-center w-8 h-8 ${currentStep >= index ? 'bg-blue-600 text-white' : 'bg-gray-200'} rounded-full lg:h-10 lg:w-10 shrink-0`}>
                  {index + 1}
                </span>
                <span className="hidden sm:inline-flex sm:ml-2">{step.title}</span>
              </li>
            ))}
          </ol>

          {children}
        </div>
      </Card>
    </div>
  );
}