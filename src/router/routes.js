
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/guest/MainLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('src/pages/guest/LoginPage.vue') },
      { path: 'register', name: 'register', component: () => import('src/pages/guest/RegisterPage.vue') }
    ]
  },
  {
    path: '/home',
    component: () => import('src/layouts/auth/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('src/pages/auth/HomePage.vue') },
      { path: 'categories', name: 'categories', component: () => import('src/pages/auth/categories/ListPage.vue') },
      { path: 'categories/create', name: 'categories-create', component: () => import('src/pages/auth/categories/CreatePage.vue') },
      { path: 'categories/:id/edit', name: 'categories-edit', component: () => import('src/pages/auth/categories/EditPage.vue') },
      { path: 'products', name: 'products', component: () => import('src/pages/auth/products/ListPage.vue') },
      { path: 'products/create', name: 'products-create', component: () => import('src/pages/auth/products/CreatePage.vue') },
      { path: 'products/:id/edit', name: 'products-edit', component: () => import('src/pages/auth/products/EditPage.vue') }
    ],
    meta: {
      requiresAuth: true
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
