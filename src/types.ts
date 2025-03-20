// Form Step Types
export type Step = {
  title: string;
  description: string;
};

// Form Layout Types
export interface FormLayoutProps {
  title: string;
  subtitle: string;
  currentStep: number;
  children: React.ReactNode;
}

// RIS Store Types
export interface RisStore {
  numberFormData: NumberFormData | null;
  identityType: IdentityTypeData | null;
  risFormData: RisFormData | null;
  setNumberFormData: (data: NumberFormData) => void;
  setIdentityType: (data: IdentityTypeData) => void;
  setRisFormData: (data: RisFormData) => void;
  reset: () => void;
}

// Form Data Types
export interface NumberFormData {
  country: string;
  numberType: string;
}

export interface IdentityTypeData {
  identityType: "business" | "individual";
}

export interface RisFormData {
  companyName?: string;
  companyRegistrationNumber?: string;
  addressCountry: string;
  city: string;
  postalCode: string;
  streetName: string;
  streetNumber: string;
  documentType: string;
  documentUrl: string;
}

// Document Types
export interface DocumentType {
  value: string;
  label: string;
}

// Country Types
export interface Country {
  value: string;
  label: string;
}

// Number Type Interface
export interface NumberType {
  value: string;
  label: string;
}
