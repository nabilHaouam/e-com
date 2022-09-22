import "./single-product.styles.css";
import React from "react";
import Card from "../../components/card/card.component";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const SingleProduct = ({ product }) => {
  const auth = getAuth();
  const amount = product.price;
  const currency = "USD";

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      window.location = "/#/sign-in-sign-up";
      // ...
    }
  });

  return (
    <div className="single-product">
      <Card
        className={"product-card"}
        singleProductPage={true}
        product={product}
      />
      <div className="paypal-wrapper">
        <PayPalScriptProvider
          style={{ minHeight: "300px" }}
          options={{
            "client-id":
              "AZIypXlUonOXKi5SxE8XBoXJMw2YyKfeDGXuvtrlYIuefogSpKRVRaP5PEawdOpdpoMgW5IINmfoM-kZ",
          }}
        >
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => {
              return actions.order
                .create({
                  purchase_units: [
                    {
                      amount: {
                        currency_code: currency,
                        value: amount,
                      },
                    },
                  ],
                })
                .then((orderId) => {
                  // Your code here after create the order
                  return orderId;
                });
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default SingleProduct;
