const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.sendPaymentData = async (req, res) => {
    let { amount, id } = req.body

    try {
        const payment = await stri.paymentIntents.create({
            amount,
            currency: "GBP",
            description: "TEST PAYMENT",
            payment_method: id,
            confirm: true
        })

        console.log("Payment: ", payment);

        res.status(202).json({
            success: true,
            message: "Payment successful"
        })
    } catch (error) {
        return next(new ErrorResponse("Payment failed", 500));
    }
}