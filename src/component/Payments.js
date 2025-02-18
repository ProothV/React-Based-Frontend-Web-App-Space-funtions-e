import React, { useEffect } from 'react';
// import  'react-router-dom';

const PaymentPage = () => {
  useEffect(() => {
    // Add the PayPal script to the page
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=your-client-id`; // Replace with your PayPal client ID
    script.async = true;
    script.onload = () => {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            // Create an order with the transaction details
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: '100.00', // Replace with dynamic value if needed
                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            // Handle successful payment
            return actions.order.capture().then((details) => {
              alert('Payment successful! ' + details.payer.name.given_name);
              // Here you can trigger your backend payment confirmation API
            });
          },
          onError: (err) => {
            // Handle any errors that occur during the payment process
            console.error('Error:', err);
            alert('An error occurred during the payment.');
          },
        })
        .render('#paypal-button-container'); // Render the PayPal button inside this container
    };
    document.body.appendChild(script);

    // Cleanup: Remove the PayPal script if the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h2>Complete Your Payment</h2>
      <div id="paypal-button-container"></div>
    </div>
  );
};

export default PaymentPage;
