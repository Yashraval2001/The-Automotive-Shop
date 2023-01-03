const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const stripe = require('stripe')('sk_test_51M55FeSEW2E570cKiPP16Ss69bAdL7cs7AW9M7vb3nECZJF924dVnjopbMNsejJ1NLH81d9NusNydK08ojmsIfXC000X9qv1Oe')
//const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});
