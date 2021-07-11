import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { useSelector, useDispatch } from 'react-redux';
import { sendPaymentData } from '../../redux/actions/cartActions';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Button } from 'semantic-ui-react';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const dispatch = useDispatch();
    const makePayment = useSelector(state => state.cart);
    const { success, error } = makePayment;

    const CARD_OPTIONS = {
        style: {
            base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                color: '#aab7c4',
                },
            },
            invalid: {
                color: '#9e2146',
            },
        },
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement) 
        })

        if (!error) {
            const { id } = paymentMethod;
            dispatch(sendPaymentData(id));
        } else {
            console.log(error.message);
        }

        return (
            <div>
                Payment Form
            </div>
        )
    }

    return (<>
        {!success ?
            <form onSubmit={handleSubmit}>
                <fieldset className="FormGroup">
                    <div className="FormRow">
                        <CardElement options={CARD_OPTIONS}/>
                    </div>
                </fieldset>
                <Button>Pay Now</Button>
            </form>
            :
            <div>Payment successful, thank you for your patronage!</div>
        }
    </>)
}



const PaymentScreen = () => {
    const STRIPE_PUBLIC_KEY = "pk_test_51JBxfvEgvsz5E3soi3DiI5S3mFO4CzPy1lJABrtiMKePgz6NIvnQRgDbLYRaKUrqoMy6HKUtqOuoTBrt9Ovnyok400Cvgtp1p3";
    const stripePromise = loadStripe(STRIPE_PUBLIC_KEY)

    return (
        <Elements stripe={stripePromise}>
            <PaymentForm/>
        </Elements>
    )
}

export default PaymentScreen;