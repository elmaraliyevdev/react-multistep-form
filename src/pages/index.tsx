import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "wouter";
import { Button, Label, Select } from 'flowbite-react';
import { FormLayout } from "@/components/FormLayout";
import { useRisStore } from "@/store/risStore";
import { numberFormSchema } from "@/schema";
import { NumberFormData } from "@/types";

const countries = [
  { value: "de", label: "Germany (+49)" },
  { value: "nl", label: "Netherlands (+31)" },
  { value: "fr", label: "France (+33)" },
  { value: "be", label: "Belgium (+32)" },
  { value: "at", label: "Austria (+43)" },
];

const numberTypes = [
  { value: "local", label: "Local" },
  { value: "national", label: "National" },
  { value: "mobile", label: "Mobile" },
];

export default function NewNumber() {
  const [, navigate] = useLocation();
  const setNumberFormData = useRisStore((state) => state.setNumberFormData);

  const form = useForm<NumberFormData>({
    resolver: zodResolver(numberFormSchema),
    defaultValues: {
      country: "",
      numberType: "",
    },
  });

  const onSubmit = (data: NumberFormData) => {
    setNumberFormData(data);
    navigate("/new-number/identity-type");
  };

  return (
    <FormLayout
      title="Create a new number"
      subtitle="Choose a location and a number type"
      currentStep={0}
    >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="country">Country</Label>
          </div>
          <Select
            id="country"
            {...form.register("country")}
            required
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </Select>
          {form.formState.errors.country && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.country.message}
            </p>
          )}
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="numberType">Number Type</Label>
          </div>
          <Select
            id="numberType"
            {...form.register("numberType")}
            required
          >
            <option value="">Select a number type</option>
            {numberTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </Select>
          {form.formState.errors.numberType && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.numberType.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={!form.formState.isValid}
          color="blue"
          className="bg-blue-600 border-blue-600 w-full py-0 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next Step
        </Button>
      </form>
    </FormLayout>
  );
}