import { cart, db } from "@/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";
import { v4 } from "uuid";
import { cookies } from "next/headers";
export async function GET(req: NextRequest) {
  try {
    const res = await db.select().from(cart);

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
    setCookies.set("user_id", uuid);
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
