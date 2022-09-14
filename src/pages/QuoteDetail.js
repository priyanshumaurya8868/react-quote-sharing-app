import React, { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from '../components/comments/Comments'
export default function QuoteDetail() {
  const quoteId = useParams().quoteId;
  return (
    <Fragment>
      <h1>QuoteDetail</h1>
      <h3>{quoteId}</h3>
      <Route  path={`/quotes/${quoteId}/comments`}>
      <Comments/>
      </Route>
    </Fragment>
  );
}
