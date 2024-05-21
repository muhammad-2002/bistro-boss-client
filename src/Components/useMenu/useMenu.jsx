import { useEffect, useState } from "react";

const useMenu = (menu) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${menu}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return [data];
};

export default useMenu;
