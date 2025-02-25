import { ErrorComponent, createFileRoute } from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { getPostBySlug } from "@/api/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params: { slug } }) => getPostBySlug(slug),
  errorComponent: PostErrorComponent,
  notFoundComponent: () => {
    return <p>Post not found</p>;
  },
  component: PostComponent,
});

export function PostErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

function PostComponent() {
  const post = Route.useLoaderData();

  if (post.data.length === 0) {
    return <p>sss Post not found</p>;
  }

  return (
    <div className="space-y-2">
      blog - post
      <br />
      {JSON.stringify(post)}
    </div>
  );
}
