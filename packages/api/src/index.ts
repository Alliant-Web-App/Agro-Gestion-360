// API Client - Mock implementation for demo
export const apiClient = {
  // Mock data para demo
  getProducts: async () => [
    {
      id: '1',
      orgId: 'demo-org',
      name: 'Abono Orgánico',
      price: 25000,
      unit: 'kg',
      stockMin: 10,
      tags: ['abono', 'organico'],
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: 'user1'
    },
    {
      id: '2',
      orgId: 'demo-org',
      name: 'Semilla de Maíz',
      price: 15000,
      unit: 'kg',
      stockMin: 5,
      tags: ['semilla', 'maiz'],
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: 'user1'
    }
  ],

  getKPIs: async () => ({
    ordersThisMonth: 12,
    activeProducts: 8,
    pendingTasks: 3,
    lowStockAlerts: 2
  })
};