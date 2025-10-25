import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, Org, OrgFeatures } from '../types';

interface AppState {
  // Autenticación
  user: User | null;
  orgId: string | null;
  org: Org | null;

  // Features y planes
  features: OrgFeatures | null;
  plan: 'basic' | 'pro' | 'enterprise' | null;
  subscriptionStatus: 'active' | 'inactive' | 'trial' | 'expired';

  // Estado de conexión
  isOnline: boolean;
  pendingSyncCount: number;
  lastSyncedAt: Date | null;

  // Acciones
  setUser: (user: User | null) => void;
  setOrgId: (orgId: string | null) => void;
  setOrg: (org: Org | null) => void;
  setFeatures: (features: OrgFeatures) => void;
  setPlan: (plan: 'basic' | 'pro' | 'enterprise' | null) => void;
  setSubscriptionStatus: (status: string) => void;
  setOnline: (online: boolean) => void;
  setPendingSyncCount: (count: number) => void;
  setLastSyncedAt: (date: Date | null) => void;

  // Utilidades
  loadOrgData: (orgId: string) => Promise<void>;
  hasFeature: (feature: keyof OrgFeatures) => boolean;
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Estado inicial
      user: null,
      orgId: null,
      org: null,
      features: null,
      plan: null,
      subscriptionStatus: 'inactive',
      isOnline: navigator.onLine,
      pendingSyncCount: 0,
      lastSyncedAt: null,

      // Acciones
      setUser: (user) => set({ user }),
      setOrgId: (orgId) => set({ orgId }),
      setOrg: (org) => set({ org }),
      setFeatures: (features) => set({ features }),
      setPlan: (plan) => set({ plan }),
      setSubscriptionStatus: (status) => set({ subscriptionStatus: status }),
      setOnline: (online) => set({ isOnline: online }),
      setPendingSyncCount: (count) => set({ pendingSyncCount: count }),
      setLastSyncedAt: (date) => set({ lastSyncedAt: date }),

      // Cargar datos de organización (mock por ahora)
      loadOrgData: async (orgId: string) => {
        // Mock data para demo
        const mockOrg: Org = {
          id: orgId,
          name: 'Finca Ejemplo',
          plan: 'basic',
          features: {
            basic: true,
            bioprepPro: false,
            phPro: false,
            gps: false,
            aiAdvisor: false,
            advancedDash: false,
            ecommerce: false,
            irrigation: false,
            accounting: false,
          },
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        set({
          org: mockOrg,
          features: mockOrg.features,
          plan: mockOrg.plan,
          subscriptionStatus: 'active',
        });
      },

      // Verificar features
      hasFeature: (feature: keyof OrgFeatures) => {
        const { features } = get();
        return features?.[feature] ?? false;
      },
    }),
    {
      name: 'fedbase-store',
      partialize: (state) => ({
        user: state.user,
        orgId: state.orgId,
        org: state.org,
        features: state.features,
        plan: state.plan,
        subscriptionStatus: state.subscriptionStatus,
        lastSyncedAt: state.lastSyncedAt,
      }),
    }
  )
);

// Detectar cambios de conexión
if (typeof window !== 'undefined') {
  window.addEventListener('online', () => useStore.getState().setOnline(true));
  window.addEventListener('offline', () => useStore.getState().setOnline(false));
}