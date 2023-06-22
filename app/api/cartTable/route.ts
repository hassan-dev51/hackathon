import { cart, db } from "@/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";
import { v4 } from "uuid";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";
type params = {
  params: {
    id: number;
  };
};
export async function GET(req: NextRequest) {
  const reqUrl = req.nextUrl;
  const newUrl = reqUrl.searchParams.get("user_id") as string;
  try {
    const res = await db.select().from(cart).where(eq(cart.user_id, newUrl));

    return NextResponse.json({ data: res });
  } catch (error) {
    console.log((error as { message: string }).message);
    return NextResponse.json("Error in get request");
  }
}

export async function POST(req: NextRequest) {
  const { product, quantity } = await req.json();

  const image = product.image[0].asset._ref;
  const newImage = image
    .replace("image-", "https://cdn.sanity.io/images/iqnpjx8b/production/")
    .replace("-webp", ".webp");

  const uuid = v4();

  const setCookies = cookies();
  const user_id = cookies().get("user_id");

  if (!user_id) {
    cookies().set("user_id", uuid);
  }

  try {
    const res = await db
      .insert(cart)
      .values({
        user_id: setCookies.get("user_id")?.value as string,
        name: product.name,
        price: product.price,
        quantity: quantity,
        image: newImage,
        item: product.item,
        category: product.category,
      })
      .returning();
    return NextResponse.json(
      { message: "Product added succussfully", res },
      { status: 200 }
    );
  } catch (error) {
    console.log((error as { message: string }).message);
    return NextResponse.json("Error in get request");
  }
}

export async function DELETE(req: NextRequest) {
  const request = req.nextUrl;
  const idToNumber = request.searchParams.get("id");
  const id = Number(idToNumber);
  try {
    await db.delete(cart).where(eq(cart.id, id));
    return NextResponse.json({ message: "Product deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete prompt" },
      { status: 500 }
    );
  }
}
