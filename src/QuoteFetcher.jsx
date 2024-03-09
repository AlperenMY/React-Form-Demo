import { useEffect, useState } from "react";

const apiUrl = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  useEffect(() => {
    // async function getInitialQuote() {
    //   const response = await fetch(apiUrl);
    //   const jsonResponse = await response.json();
    //   const randomQuote = jsonResponse.quote;
    //   setQuote(randomQuote);
    // }
    // getInitialQuote();
    fetchRandomQuote();
  }, []);
  const fetchRandomQuote = async () => {
    const response = await fetch(apiUrl);
    const jsonResponse = await response.json();
    const randomQuote = jsonResponse.quote;
    setQuote(randomQuote);
  };
  return (
    <div>
      <button onClick={fetchRandomQuote}>Random Quote</button>
      <h1>{quote.text}</h1>
      <h3>{quote.author}</h3>
    </div>
  );
}
