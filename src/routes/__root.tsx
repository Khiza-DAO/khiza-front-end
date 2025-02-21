import { Outlet } from "@tanstack/react-router";
import { createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Header />
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
      <Footer />
    </>

  ),
});

export default rootRoute;
