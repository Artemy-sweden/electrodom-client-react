import React from "react";

function useCards(initialValue) {
  const [value, setValue] = React.useState(initialValue);

  function changeValue(e) {
    setValue(e);
  }
  return [value, changeValue];
}

export default useCards;
