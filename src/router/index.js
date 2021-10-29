import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/books",
    name: "books",
    component: () =>
      import(/* webpackChunkName: "books" */ "../views/Books.vue"),
  },
  {
    path: "/books/:id",
    name: "book_page",
    component: () =>
        import(/* webpackChunkName: "books" */ "../views/BookPage.vue"),
  },
  {
    path: "/authors",
    name: "authors",
    component: () =>
        import(/* webpackChunkName: "authors" */ "../views/Authors.vue"),
  },
  {
    path: "/authors/:id",
    name: "author_page",
    component: () =>
        import(/* webpackChunkName: "authors" */ "../views/AuthorPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
