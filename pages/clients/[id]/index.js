import { route } from "next/dist/next-server/server/router";
import { useRouter } from "next/router";

const ClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);

  const loadProjectHandler = () => {
    // router.push("/clients/id/clientprojectid");
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: {
        id: "ramy",
        clientprojectid: "ramypro1",
      },
    });
  };

  return (
    <div>
      <h1>{`the projects of the given client ${router.query.id}.`}</h1>

      <button onClick={loadProjectHandler}>Go To Client Project</button>
    </div>
  );
};

export default ClientProjectPage;
