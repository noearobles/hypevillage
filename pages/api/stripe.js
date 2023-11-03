import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'required', // Collect billing address information
        shipping_address_collection: {
          allowed_countries: ['US'], // Specify the countries for which you want to collect shipping address
        },
        shipping_options: [
          { shipping_rate: 'shr_1O31rnAoz6peD6vxoL9Lk0ww' },
        ],
        line_items: req.body.map((item) => {
          const img = item.image[0].asset._ref;
          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/lov5whyf/production/').replace('-webp', '.webp','-jpeg','.jpeg','-png','.png');

          return {
            price_data: { 
              currency: 'usd',
              product_data: { 
                name: `${item.name} Size: ${item.selectedSize}`,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled:true,
              minimum: 1,
            },
            quantity: item.quantity,
            tax_rates:['txr_1O33h6Aoz6peD6vxIddScjh2']
          }
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/`,
      }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}