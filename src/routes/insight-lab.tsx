import InsightLabPage from "@/pages/insight-lab";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/insight-lab")({
  component: InsightLabPage,
});
