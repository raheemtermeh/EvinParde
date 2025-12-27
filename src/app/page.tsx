export const revalidate = 300;

import HomeClient from "./HomeClient";

async function getHomeData() {
  const res = await fetch(`http://localhost:3000/api/home`, {
    ...(process.env.NODE_ENV === "development" ? { cache: "no-store" } : { next: { revalidate: 300 } }),
  });

  if (!res.ok) throw new Error(`API failed: ${res.status}`);
  return res.json();
}

export default async function HomePage() {
  const data = await getHomeData();
  return <HomeClient data={data} />;
}
