import { useState } from "react";

function FeedBackItem({ item }) {
  //use state is a function
  // destructuing array from function return
  // state is immutable , it need to be reset

  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </div>
  );
}

export default FeedBackItem;
