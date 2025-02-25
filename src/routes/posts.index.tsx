import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts',
  component: PostsIndexComponent,
});

function PostsIndexComponent() {
  return (
    <div className="p-2">
      <h2>Posts</h2>
      {/* Add your posts list here */}
    </div>
  );
} 