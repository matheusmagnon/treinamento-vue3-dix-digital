
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
      { path: '', name: 'home', component: () => import('src/pages/auth/HomePage.vue') }
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
