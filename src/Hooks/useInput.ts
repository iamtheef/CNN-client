import { useState } from "react";

export const useInput = (initialVal: string) => {
  const [value, setValue] = useState(initialVal);
  const handleChange = (v: string) => {
    setValue(v);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset] as const;
};
