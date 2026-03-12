import { useContext } from "react";
import { FilterContext } from "../context/filterContextValue.jsx";

export function useFilters() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilters doit être utilisé dans un FilterProvider");
  }
  return context;
}
