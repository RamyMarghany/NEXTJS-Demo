import { useRouter } from "next/router";
// we can use The useRouter hook with a functional component to access and configure the path of dynamic route page.
// with class-based component we can a high order component (withRouter) to wrap the page with dynamic path.

const UserPage = () => {
  const route = useRouter();
  // we can use (route.pathname) to concrete/ configure the dynamic route (placeholder)

  return (
    <div>
      <h1>The user page</h1>
    </div>
  );
};

export default UserPage;
