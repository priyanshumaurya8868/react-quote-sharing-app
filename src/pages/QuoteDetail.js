import React, { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];
export default function QuoteDetail() {
  const quoteId = useParams().quoteId;
  console.log(quoteId);

  const quote = DUMMY_QUOTES.find((item) => item.id === quoteId);

  if (!quote) {
    return <NoQuotesFound/>;
  }

  console.log(quote);

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
}
