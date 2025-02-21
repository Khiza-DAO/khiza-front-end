import { createRouter, createRoute } from "@tanstack/react-router";
import "@/styles/globals.css";
import HomePage from "../pages/home";
import StudioPage from "../pages/studio";
import rootRoute from "./__root";
import BuildTogetherPage from "@/pages/build-together";
import JoinUsPage from "@/pages/join-us";
import MethodAndMindsPage from "@/pages/methods-and-minds";
import InsightLabPage from "@/pages/insight-lab";
import BlogPage from "@/pages/blog";
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const studioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/studio",
  component: StudioPage,
});

const buildTogetherRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/build-together",
  component: BuildTogetherPage,
});

const joinUsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/join-us",
  component: JoinUsPage,
});

const methodAndMindsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/method-and-minds",
  component: MethodAndMindsPage,
});

const insightLabRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/insight-lab",
  component: InsightLabPage,
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: BlogPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  studioRoute,
  buildTogetherRoute,
  joinUsRoute,
  methodAndMindsRoute,
  insightLabRoute,
  blogRoute,
]);

const router = createRouter({ routeTree });

export default router;
