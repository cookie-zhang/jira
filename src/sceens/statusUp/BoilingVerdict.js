import React from "react";
function BoilingVerdict(props) {
    if (props.temp >= 100) {
      return <p>水开了</p>;
    }
    return <p>水没开</p>;
  }

export default BoilingVerdict