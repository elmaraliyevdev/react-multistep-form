import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "wouter";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FormLayout } from "@/components/FormLayout";
import { useRisStore } from "@/store/risStore";
import { numberFormSchema, type NumberFormData } from "@shared/schema";

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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.value} value={country.value}>
                        {country.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="numberType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a number type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {numberTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Next Step
          </Button>
        </form>
      </Form>
    </FormLayout>
  );
}