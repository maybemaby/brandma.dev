import { useState, useEffect } from "react";

export const useMedia = <T>(
  queries: string[],
  values: T[],
  defaultValue: T
) => {
  let mediaQueryLists: MediaQueryList[];

  if (typeof window !== "undefined") {
    mediaQueryLists = queries.map((q) => window.matchMedia(q));
  } else {
    mediaQueryLists = [];
  }

  const getValue = () => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches);
    return values?.[index] || defaultValue;
  };

  const [value, setValue] = useState<T>(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);

    mediaQueryLists.forEach((mql) => mql.addEventListener("change", handler));    return () =>
      mediaQueryLists.forEach((mql) =>
        mql.removeEventListener("change", handler)
      );
  }, []);

  return value;
};
