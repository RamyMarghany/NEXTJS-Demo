import { useRouter } from "next/router";

const BlogPage = () => {
  const router = useRouter();
  console.log(router.query);
  // with checking the query of router of this page, you will find the path coming in [Array] of strings to get the all paths because we have a dynamic route structure not just a dynamic path name because the name of the file has [...]
  return (
    <div>
      <h1>The Blog page.</h1>
    </div>
  );
};

export default BlogPage;
