// Tipos base para FedBase
export interface BaseEntity {
  id: string;
  orgId: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
}

export interface User {
  id: string;
  email: string;
  displayName: string;
  phone?: string;
  role: 'ADMIN' | 'TECH' | 'OP' | 'VIEW';
  orgId?: string;
  lang: 'es' | 'en';
}

export interface Org {
  id: string;
  name: string;
  logoUrl?: string;
  plan: 'basic' | 'pro' | 'enterprise';
  features: OrgFeatures;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrgFeatures {
  basic: boolean;
  bioprepPro: boolean;
  phPro: boolean;
  gps: boolean;
  aiAdvisor: boolean;
  advancedDash: boolean;
  ecommerce: boolean;
  irrigation: boolean;
  accounting: boolean;
}

export interface Product extends BaseEntity {
  name: string;
  price: number;
  unit: string;
  stockMin: number;
  imageUrl?: string;
  tags: string[];
}

export interface Client extends BaseEntity {
  name: string;
  type: 'B2B' | 'B2C';
  phone?: string;
  notes?: string;
}

export interface Lot extends BaseEntity {
  name: string;
  area: number;
  crop: string;
  coords?: { lat: number; lng: number };
  photoUrl?: string;
}

export interface Task extends BaseEntity {
  lotId?: string;
  type: string;
  assignee: string;
  dueDate: Date;
  done: boolean;
  notes?: string;
}

export interface Order extends BaseEntity {
  clientId: string;
  items: Array<{
    productId: string;
    qty: number;
    price: number;
  }>;
  status: 'draft' | 'sent' | 'confirmed' | 'delivered';
  total: number;
  notes?: string;
}

export interface InventoryMove extends BaseEntity {
  productId: string;
  type: 'IN' | 'OUT';
  qty: number;
  lotId?: string;
  note?: string;
}

export interface BioprepLog extends BaseEntity {
  lotId: string;
  bioprepId: string;
  date: Date;
  qty: number;
  operator: string;
  notes?: string;
}

export interface PhLog extends BaseEntity {
  lotId: string;
  value: number;
  date: Date;
  photoUrl?: string;
  operator: string;
  notes?: string;
}

export interface Subscription {
  id: string;
  orgId: string;
  plan: 'basic' | 'pro' | 'enterprise';
  status: 'active' | 'inactive' | 'trial' | 'expired';
  renewAt: Date;
  provider: 'wompi' | 'mercado_pago';
  customerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Payment {
  id: string;
  orgId: string;
  amount: number;
  currency: 'COP';
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  providerRef: string;
  subscriptionId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AIChat {
  id: string;
  orgId: string;
  userId: string;
  messages: Array<{
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
  }>;
  topic: string;
  tokens: number;
  createdAt: Date;
  updatedAt: Date;
}

// Tipos para UI
export interface KPICardData {
  title: string;
  value: number | string;
  trend?: string;
  variant?: 'default' | 'warning' | 'destructive';
}

export interface SyncStatus {
  status: 'pending' | 'synced' | 'conflict';
  lastSyncedAt?: Date;
}