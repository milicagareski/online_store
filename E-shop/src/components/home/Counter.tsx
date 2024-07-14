import { useState, useEffect } from "react";

import { CountdownTimerProps } from "../../types/HomeProps";

const CountdownTimer = ({
  initialTime,
  showText,
  setShowText,
}: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours} : ${minutes} : ${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };

  return (
    <section className="container counter_container">
      {/* {!showText && <h1 className="new_coupon">What's new?</h1>} */}
      <h1 className={`${!showText ? "new_coupon" : "no_coupon"}`}>
        What's new?
      </h1>
      <article className="special_discount">
        <h1>We have a special discount coupon just for you!!!</h1>
        <h2>Grab your discount coupon now before the offer ends!</h2>
        <h3>This offer expires in:</h3>
        <div id="countdown">{formatTime(timeLeft)}</div>
        <button className="btn coupon_btn">Get Discount</button>
      </article>
    </section>
  );
};

export default CountdownTimer;
