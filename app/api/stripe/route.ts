import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY! || "", {
  apiVersion: "2022-11-15",
});

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  try {
    const session = await stripe.checkout.sessions.create({
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [
        { shipping_rate: "shr_1NEz6KGBcHEs79ajjbBBnOiB" },
        { shipping_rate: "shr_1NEz8NGBcHEs79aj2bpFJfjj" },
      ],
      line_items: data.map((item: any) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.product.name,
            },
            unit_amount: item.product.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `https://hackathon-iota.vercel.app/success`,
      cancel_url: `https://hackathon-iota.vercel.app/canceled`,
    });

    return NextResponse.json(session, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error In Post Method" },
      { status: 500 }
    );
  }
}
