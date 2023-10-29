import { useState } from "react";

export default function useSort() {
  const [sortOpened, setSortOpened] = useState(false);

  const open = () => {
    setSortOpened(true);
  };
  const close = () => {
    setSortOpened(false);
  };

  return sortOpened;
}
