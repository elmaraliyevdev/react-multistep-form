import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "wouter";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="identityType"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div className="relative">
                      <RadioGroupItem
                        value="business"
                        id="business"
                        className="sr-only"
                      />
                      <label
                        htmlFor="business"
                        className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer ${
                          field.value === "business"
                            ? "border-primary bg-primary/5"
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
                      <RadioGroupItem
                        value="individual"
                        id="individual"
                        className="sr-only"
                      />
                      <label
                        htmlFor="individual"
                        className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer ${
                          field.value === "individual"
                            ? "border-primary bg-primary/5"
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
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/new-number")}
            >
              Back
            </Button>
            <Button type="submit">Next Step</Button>
          </div>
        </form>
      </Form>
    </FormLayout>
  );
}