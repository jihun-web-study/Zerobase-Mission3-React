import AmericanExpress from "@assets/img/svg/payments/americanExpress.svg?react";
import DinersClub from "@assets/img/svg/payments/dinersClub.svg?react";
import Discover from "@assets/img/svg/payments/discover.svg?react";
import Master from "@assets/img/svg/payments/master.svg?react";
import Paypal from "@assets/img/svg/payments/paypal.svg?react";
import Visa from "@assets/img/svg/payments/visa.svg?react";

const Payments = () => {
  const paymentsList = [AmericanExpress, DinersClub, Discover, Master, Paypal, Visa];

  return (
    <ul className="flex">
      {paymentsList.map((PaymentIcon, idx) => (
        <li key={idx}>
          <PaymentIcon />
        </li>
      ))}
    </ul>
  );
};

export default Payments;
