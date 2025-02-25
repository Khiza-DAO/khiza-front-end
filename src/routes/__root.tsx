import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const RootComponent = () => (
  <>
    <Header />
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
    <Footer />
  </>
);

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
        <Link to="/">Start Over</Link>
      </div>
    )
  },
})

