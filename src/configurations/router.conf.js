import { HomePage, CataloguePage, ContactUsPage } from '../pages'

export const ROUTES = [
  {
    path: '/',
    title: 'Inicio',
    component: HomePage,
  },
  {
    path: '/catalogue',
    title: 'Catalogo',
    component: CataloguePage,
  },
  {
    path: '/contactus',
    title: 'Contactanos',
    component: ContactUsPage,
  },
]
