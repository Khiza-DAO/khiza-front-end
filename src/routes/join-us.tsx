import JoinUsPage from "@/pages/join-us";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/join-us")({
  component: JoinUsPage,
});
