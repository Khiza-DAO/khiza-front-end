import StudioPage from "@/pages/studio";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/studio")({
  component: StudioPage,
});
