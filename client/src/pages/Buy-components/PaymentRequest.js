class PaymentRequestForm extends React.Component {
  constructor(props) {
    super(props);

    // For full documentation of the available paymentRequest options, see:
    // https://stripe.com/docs/stripe.js#the-payment-request-object
    const paymentRequest = props.stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        amount: 1000,
        label: 'Demo total',
      },
    });

    paymentRequest.on('token', ({complete, token, ...data}) => {
      // tslint:disable-next-line:no-console
      console.log('Received Stripe token: ', token);
      // tslint:disable-next-line:no-console
      console.log('Received customer information: ', data);
      complete('success');
    });

    paymentRequest.canMakePayment().then((result) => {
      this.setState({canMakePayment: !!result});
    });

    this.state = {
      canMakePayment: false,
      paymentRequest,
    };
  }

  render() {
    return this.state.canMakePayment ? (
      <PaymentRequestButtonElement
        paymentRequest={this.state.paymentRequest}
        className="PaymentRequestButton"
        style={{
          // For more details on how to style the Payment Request Button, see:
          // https://stripe.com/docs/elements/payment-request-button#styling-the-element
          paymentRequestButton: {
            height: '64px',
            theme: 'light',
          },
        }}
      />
    ) : null;
  }
}
export default injectStripe(PaymentRequestForm);
