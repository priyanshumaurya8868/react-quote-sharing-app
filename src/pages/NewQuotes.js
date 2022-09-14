import React from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
export default function NewQuotes() {
    const history = useHistory()
  const addQuoteHandler = (quote) => {
    console.log(quote);
    history.replace('/quotes')
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
}
