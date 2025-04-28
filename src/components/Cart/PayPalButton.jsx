import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import React from 'react';


const PayPalButton = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "ATDixg49oplZ8WVD7FKQ02u-M7ENmI4oowABW5FA-PZ-gn-aTL5dzUyZghvVsMAEY_aDnSTnGSo79uBv",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: amount } }],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess);
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;