import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "wouter";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FormLayout } from "@/components/FormLayout";
import { useRisStore } from "@/store/risStore";
import { risFormSchema, type RisFormData } from "@shared/schema";

const documentTypes = [
  { value: "utility_bill", label: "Utility Bill" },
  { value: "bank_statement", label: "Bank Statement" },
  { value: "other", label: "Other" },
];

export default function RisForm() {
  const [, navigate] = useLocation();
  const { identityType, setRisFormData } = useRisStore();

  const form = useForm<RisFormData>({
    resolver: zodResolver(risFormSchema),
    defaultValues: {
      companyName: "",
      companyRegistrationNumber: "",
      addressCountry: "",
      city: "",
      postalCode: "",
      streetName: "",
      streetNumber: "",
      documentType: "",
      documentUrl: "",
    },
  });

  const onSubmit = (data: RisFormData) => {
    setRisFormData(data);
    // Here you would typically submit the form data to your backend
    console.log("Form submitted:", data);
  };

  return (
    <FormLayout
      title="Complete the RIS"
      subtitle="Please upload the necessary documents"
      currentStep={2}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {identityType?.identityType === "business" && (
            <>
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="companyRegistrationNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Registration Number</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="addressCountry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postal Code</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="streetName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="streetNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street Number</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="documentType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Document Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select document type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {documentTypes.map((type) => (
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

          <FormField
            control={form.control}
            name="documentUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload Document</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        // Here you would typically upload the file and get a URL
                        field.onChange(URL.createObjectURL(file));
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/new-number/identity-type")}
            >
              Back
            </Button>
            <Button 
              type="submit"
              disabled={!form.formState.isValid}
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </FormLayout>
  );
}