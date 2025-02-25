import BuildTogetherPage from "@/pages/build-together";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/build-together")({
  component: BuildTogetherPage,
});
