import MethodAndMindsPage from "@/pages/methods-and-minds";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/method-and-minds")({
  component: MethodAndMindsPage,
});
