import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "wouter";
import { Button, Radio } from 'flowbite-react';
import { FormLayout } from "@/components/FormLayout";
import { useRisStore } from "@/store/risStore";
import { identityTypeSchema, type IdentityTypeData } from "@shared/schema";
import { Building2, User } from "lucide-react";

export default function IdentityType() {
  const [, navigate] = useLocation();
  const setIdentityType = useRisStore((state) => state.setIdentityType);

  const form = useForm<IdentityTypeData>({
    resolver: zodResolver(identityTypeSchema),
    defaultValues: {
      identityType: undefined,
    },
  });

  const onSubmit = (data: IdentityTypeData) => {
    setIdentityType(data);
    navigate("/new-number/ris-form");
  };

  return (
    <FormLayout
      title="Select your identity type"
      subtitle="Information will be used to purchase and register the number on your behalf"
      currentStep={1}
    >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <fieldset className="grid grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="radio"
              id="business"
              value="business"
              {...form.register("identityType")}
              className="sr-only"
            />
            <label
              htmlFor="business"
              className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer ${
                form.watch("identityType") === "business"
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200"
              }`}
            >
              <Building2 className="w-8 h-8 mb-2" />
              <span className="font-medium">Business</span>
              <span className="text-sm text-gray-500">
                For company registration
              </span>
            </label>
          </div>

          <div className="relative">
            <input
              type="radio"
              id="individual"
              value="individual"
              {...form.register("identityType")}
              className="sr-only"
            />
            <label
              htmlFor="individual"
              className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer ${
                form.watch("identityType") === "individual"
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200"
              }`}
            >
              <User className="w-8 h-8 mb-2" />
              <span className="font-medium">Individual</span>
              <span className="text-sm text-gray-500">
                For personal use
              </span>
            </label>
          </div>
        </fieldset>

        {form.formState.errors.identityType && (
          <p className="text-sm text-red-600">
            {form.formState.errors.identityType.message}
          </p>
        )}

        <div className="flex justify-between gap-4">
            <Button
              type="button"
              color="gray"
              onClick={() => navigate("/new-number")}
              className="bg-gray-500 hover:bg-gray-600 text-white text-sm"
            >
              Back
            </Button>
            <Button 
              type="submit"
              color="blue"
              disabled={!form.formState.isValid}
              className="bg-blue-600 hover:bg-blue-700 text-sm"
            >
              Next Step
            </Button>
          </div>
      </form>
    </FormLayout>
  );
}