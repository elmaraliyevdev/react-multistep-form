import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const risSubmission = pgTable("ris_submission", {
  id: serial("id").primaryKey(),
  country: text("country").notNull(),
  numberType: text("number_type").notNull(),
  identityType: text("identity_type").notNull(),
  companyName: text("company_name"),
  companyRegistrationNumber: text("company_registration_number"),
  addressCountry: text("address_country").notNull(),
  city: text("city").notNull(),
  postalCode: text("postal_code").notNull(),
  streetName: text("street_name").notNull(),
  streetNumber: text("street_number").notNull(),
  documentType: text("document_type").notNull(),
  documentUrl: text("document_url").notNull()
});

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
});

export type NumberFormData = z.infer<typeof numberFormSchema>;
export type IdentityTypeData = z.infer<typeof identityTypeSchema>;
export type RisFormData = z.infer<typeof risFormSchema>;
export type RisSubmission = typeof risSubmission.$inferSelect;
