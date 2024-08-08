import { useState } from "react";

export default function ShopingCardContainer() {
  const [emptyCard, setEmptyCard] = useState(true);
  return (
    <section className="container card">
      <h1>shoping card</h1>
      {emptyCard && <p>Your card is empty!</p>}
    </section>
  );
}
