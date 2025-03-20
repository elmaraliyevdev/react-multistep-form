import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "wouter";
import { Button, Label, Select, TextInput } from 'flowbite-react';
import { FormLayout } from "../../components/FormLayout";
import { useRisStore } from "../../store/risStore";
import { risFormSchema } from "../../../shared/schema";
import { RisFormData, DocumentType } from "../../types";

const documentTypes: DocumentType[] = [
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {identityType?.identityType === "business" && (
          <>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="companyName">Company Name</Label>
              </div>
              <TextInput
                id="companyName"
                {...form.register("companyName")}
              />
              {form.formState.errors.companyName && (
                <p className="mt-1 text-sm text-red-600">
                  {form.formState.errors.companyName.message}
                </p>
              )}
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="companyRegistrationNumber">Company Registration Number</Label>
              </div>
              <TextInput
                id="companyRegistrationNumber"
                {...form.register("companyRegistrationNumber")}
              />
              {form.formState.errors.companyRegistrationNumber && (
                <p className="mt-1 text-sm text-red-600">
                  {form.formState.errors.companyRegistrationNumber.message}
                </p>
              )}
            </div>
          </>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="addressCountry">Country</Label>
            </div>
            <TextInput
              id="addressCountry"
              {...form.register("addressCountry")}
            />
            {form.formState.errors.addressCountry && (
              <p className="mt-1 text-sm text-red-600">
                {form.formState.errors.addressCountry.message}
              </p>
            )}
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="city">City</Label>
            </div>
            <TextInput
              id="city"
              {...form.register("city")}
            />
            {form.formState.errors.city && (
              <p className="mt-1 text-sm text-red-600">
                {form.formState.errors.city.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="postalCode">Postal Code</Label>
          </div>
          <TextInput
            id="postalCode"
            {...form.register("postalCode")}
          />
          {form.formState.errors.postalCode && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.postalCode.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="streetName">Street Name</Label>
            </div>
            <TextInput
              id="streetName"
              {...form.register("streetName")}
            />
            {form.formState.errors.streetName && (
              <p className="mt-1 text-sm text-red-600">
                {form.formState.errors.streetName.message}
              </p>
            )}
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="streetNumber">Street Number</Label>
            </div>
            <TextInput
              id="streetNumber"
              {...form.register("streetNumber")}
            />
            {form.formState.errors.streetNumber && (
              <p className="mt-1 text-sm text-red-600">
                {form.formState.errors.streetNumber.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="documentType">Document Type</Label>
          </div>
          <Select
            id="documentType"
            {...form.register("documentType")}
          >
            <option value="">Select document type</option>
            {documentTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </Select>
          {form.formState.errors.documentType && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.documentType.message}
            </p>
          )}
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="documentUpload">Upload Document</Label>
          </div>
          <input
            type="file"
            id="documentUpload"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                // Here you would typically upload the file and get a URL
                form.setValue("documentUrl", URL.createObjectURL(file));
              }
            }}
          />
          {form.formState.errors.documentUrl && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.documentUrl.message}
            </p>
          )}
        </div>

        <div className="flex justify-between gap-4">
          <Button
            type="button"
            color="gray"
            onClick={() => navigate("/new-number/identity-type")}
          >
            Back
          </Button>
          <Button
            type="submit"
            color="blue"
            disabled={!form.formState.isValid}
          >
            Submit
          </Button>
        </div>
      </form>
    </FormLayout>
  );
}