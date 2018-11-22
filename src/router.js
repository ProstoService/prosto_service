import Vue from "vue";
import Router from "vue-router";
import ErrorPage from "vue-error-page";
import NProgress from "nprogress";

Vue.use(ErrorPage);
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home"),
      meta: {
        title: ""
      }
    },
    {
      path: "/",
      component: () => import("@/views/BaseTemplate"),
      children: [
        {
          path: "about",
          name: "About",
          component: () => import("@/views/About"),
          meta: {
            title: "О нас"
          }
        },
        {
          path: "services",
          name: "Service",
          component: () => import("@/views/Services"),
          meta: {
            title: "Услуги"
          }
        },
        {
          path: "products",
          name: "Products",
          component: () => import("@/views/Products"),
          meta: {
            title: "Товары"
          }
        },
        {
          path: "contacts",
          name: "Contacts",
          component: () => import("@/views/Contacts"),
          meta: {
            title: "Контакты"
          }
        }
      ]
    },
    {
      path: "*",
      component: () => import("@/views/BaseTemplate"),
      children: [
        {
          path: "",
          name: "NotFound",
          component: () => import("@/views/NotFound"),
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

import NotFound from "@/views/NotFound";

router.onError(error => {
  // eslint-disable-next-line no-console
  console.log(error, error.response.status);
  this.$_error(NotFound);
});

export default router;
