import { getPosts } from "@/api/posts";
import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/")({
  loader: getPosts,
  component: PostsComponent,
});

function PostsComponent() {
  const posts = Route.useLoaderData();

  return (
    <>
      {posts.data.data.map(
        (post: { id: number; slug: string; title: string }) => (
          <Link key={post.id} to="/blog/$slug" params={{ slug: post.slug }}>
            {post.title}
          </Link>
        )
      )}
    </>
  );
}