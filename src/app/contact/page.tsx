import { sql } from "@vercel/postgres";

export default async function Contact() {
  const { rows } = await sql`SELECT * from test`;
  return (
    <>
      <h1>Contact page</h1>
      <ul>
        {rows.map(({ id }) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </>
  );
}
