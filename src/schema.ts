import { z } from "zod";

export const numberFormSchema = z.object({
  country: z.string().min(1, "Country is required"),
  numberType: z.string().min(1, "Number type is required")
});

export const identityTypeSchema = z.object({
  identityType: z.enum(["business", "individual"], {
    required_error: "Please select an identity type"
  })
});

export const risFormSchema = z.object({
  companyName: z.string().optional(),
  companyRegistrationNumber: z.string().optional(),
  addressCountry: z.string().min(1, "Country is required"),
  city: z.string().min(1, "City is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  streetName: z.string().min(1, "Street name is required"),
  streetNumber: z.string().min(1, "Street number is required"),
  documentType: z.string().min(1, "Document type is required"),
  documentUrl: z.string().min(1, "Document upload is required")
}).refine(
  (data) => {
    if (data.companyName || data.companyRegistrationNumber) {
      return data.companyName && data.companyRegistrationNumber;
    }
    return true;
  },
  {
    message: "Both company name and registration number must be provided for business type"
  }
);

export type NumberFormData = z.infer<typeof numberFormSchema>;
export type IdentityTypeData = z.infer<typeof identityTypeSchema>;
export type RisFormData = z.infer<typeof risFormSchema>;