import HeaderAdvice from "./components/HeaderAdvice";
import Quote from "./components/Quote";
import Divider from "./components/Divider";
import DrawQuoteButton from "./components/DrawQuoteButton";

import { useState, useEffect } from "react";

function App() {
  const [id, setId] = useState(null);
  const [advice, setAdvice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    const fetchAdvicesData = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let advicesData = await response.json();

        setId(advicesData.slip.id);
        setAdvice(advicesData.slip.advice);
      } catch (err) {
        setError(err.message);
        setId(null);
        setAdvice(null);
      } finally {
        setLoading(false);
      }
    };

    fetchAdvicesData();
  }, [isClick]);

  return (
    <div className="w-screen h-screen flex items-center justify-center font-family1 bg-neutralDarkBlue">
      <main className="bg-neutralDarkGreyishBlue flex flex-col items-center w-screen mx-4 rounded-xl relative lg:w-1/3">
        <HeaderAdvice id={id} />
        <Quote advice={advice} />
        <Divider />
        <DrawQuoteButton onClick={() => setIsClick((prev) => !prev)} />
      </main>
    </div>
  );
}

export default App;
