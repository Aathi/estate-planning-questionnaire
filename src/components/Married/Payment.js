import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "semantic-ui-react";

const properties = {
  checkoutTitle: "Course Fee",
  checkoutDescription: "Course Fee",
  currency: "GBP",
  checkoutButtonLabel: "Pay",
  callToAction: "Pay",
  stripeKey: 'pk_test_csPsCwTWiHF0xzkTqiV8U4FS'
};

const fromTalerToCent = amount => amount * 100;

const onToken = (amount, description, onSuccess, onError) => token => {
  onSuccess(token);
};



export default class Payment extends Component {
  state = {
    fee: '',
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.course && nextProps.course.fee !== this.state.fee) {
        this.setState({
            fee: nextProps.course.fee
        })
    }
  }
  
  onSuccess =() => {
    alert('Thank you!')
}

  render() {
    const { fee } = this.state;
    return (
      <div>
        <StripeCheckout
          name={properties.checkoutTitle}
          description={properties.checkoutDescription}
          amount={fromTalerToCent(fee)}
          token={onToken(
            fee,
            properties.checkoutDescription,
            this.onSuccess,
            this.onError
          )}
          currency={properties.currency}
        //   stripeKey={process.env.STRIPE_PUBLISHABLE_KEY}
            stripeKey={properties.stripeKey}
          panelLabel={properties.checkoutButtonLabel}
        >
          <Button type="button">{properties.callToAction}</Button>
        </StripeCheckout>
      </div>
    );
  }
}
