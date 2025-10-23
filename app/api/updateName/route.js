import { prisma } from "@/lib/prisma";

export async function POST(req) {
  try {
    const { email, name } = await req.json();

    if (!email || !name) {
      return new Response(JSON.stringify({ error: "Missing data" }), {
        status: 400,
      });
    }

    const user = await prisma.user.update({
      where: { email },
      data: { name },
    });

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (err) {
    console.error("Erreur updateName:", err);
    return new Response(JSON.stringify({ error: "Database error" }), {
      status: 500,
    });
  }
}
