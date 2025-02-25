import router from "./src/routes/routes";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
