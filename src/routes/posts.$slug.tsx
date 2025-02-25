import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts/$slug',
  component: PostComponent,
});

function PostComponent() {
  const { slug } = Route.useParams();
  return (
    <div className="p-2">
      <h2>Post: {slug}</h2>
      {/* Add your post content here */}
    </div>
  );
} 