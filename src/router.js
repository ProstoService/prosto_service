import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";

const Home = () => import("@/views/Home");
const BaseTemplate = () => import("@/views/BaseTemplate");
const About = () => import("@/views/About");
const Services = () => import("@/views/Services");
const Products = () => import("@/views/Products");
const Contacts = () => import("@/views/Contacts");
const NotFound = () => import("@/views/NotFound");

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        title: ""
      }
    },
    {
      path: "/",
      component: BaseTemplate,
      children: [
        {
          path: "about",
          name: "About",
          component: About,
          meta: {
            title: "О нас"
          }
        },
        {
          path: "services",
          name: "Services",
          component: Services,
          meta: {
            title: "Услуги"
          }
        },
        {
          path: "products",
          name: "Products",
          component: Products,
          meta: {
            title: "Товары"
          }
        },
        {
          path: "contacts",
          name: "Contacts",
          component: Contacts,
          meta: {
            title: "Контакты"
          }
        }
      ]
    },
    {
      path: "*",
      component: BaseTemplate,
      children: [
        {
          path: "",
          name: "NotFound",
          component: NotFound,
          meta: {
            title: "Страница не найдена"
          }
        }
      ]
    }
  ],
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

const globalTitle = "Простое Решение";

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  if (to.meta.title === "") {
    document.title = globalTitle;
  } else {
    document.title = to.meta.title + " | " + globalTitle;
  }
  next();
});

// eslint-disable-next-line no-unused-vars
router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
