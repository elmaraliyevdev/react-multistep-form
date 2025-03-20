import { create } from 'zustand';
import { RisStore, NumberFormData, IdentityTypeData, RisFormData } from '../types';

export const useRisStore = create<RisStore>((set) => ({
  numberFormData: null,
  identityType: null,
  risFormData: null,
  setNumberFormData: (data) => set({ numberFormData: data }),
  setIdentityType: (data) => set({ identityType: data }),
  setRisFormData: (data) => set({ risFormData: data }),
  reset: () => set({ numberFormData: null, identityType: null, risFormData: null })
}));