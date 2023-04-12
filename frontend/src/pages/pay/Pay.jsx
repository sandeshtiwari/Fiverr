import React from "react";
import "./Pay.scss";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51L97tYCrPrZFhWGunEQi2tE1wecgu0M8lka1zDsfv5fEZhHsFQ27WkRMJY6lZXUyKfqJ59BgH6XUfG9dDaYffXL900Ncy4Gdi0"
);

const Pay = () => {
  return <div>Pay</div>;
};

export default Pay;
