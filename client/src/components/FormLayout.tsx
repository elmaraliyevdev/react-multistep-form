import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FormStep } from './FormStep';

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
        <CardHeader>
          <FormStep steps={steps} currentStep={currentStep} />
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          <CardDescription className="text-gray-600">{subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </div>
  );
}