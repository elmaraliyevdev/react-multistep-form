import { create } from 'zustand';
import { NumberFormData, IdentityTypeData, RisFormData } from '@shared/schema';

interface RisStore {
  numberFormData: NumberFormData | null;
  identityType: IdentityTypeData | null;
  risFormData: RisFormData | null;
  setNumberFormData: (data: NumberFormData) => void;
  setIdentityType: (data: IdentityTypeData) => void;
  setRisFormData: (data: RisFormData) => void;
  reset: () => void;
}

export const useRisStore = create<RisStore>((set) => ({
  numberFormData: null,
  identityType: null,
  risFormData: null,
  setNumberFormData: (data) => set({ numberFormData: data }),
  setIdentityType: (data) => set({ identityType: data }),
  setRisFormData: (data) => set({ risFormData: data }),
  reset: () => set({ numberFormData: null, identityType: null, risFormData: null })
}));
