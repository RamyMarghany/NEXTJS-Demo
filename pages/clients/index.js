import Link from "next/link";

const ClientPage = () => {
  const clients = [
    { id: "ramy", name: "Ramy" },
    { id: "marghany", name: "Marghany" },
  ];
  return (
    <div>
      <h1>The Client page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}

            {/* alternative way to build a Link */}
            <Link
              href={{
                pathname: "clients/[id]",
                query: {
                  id: client.id,
                },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
