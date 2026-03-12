import { useState } from "react";
import { FilterContext } from "./filterContextValue.jsx";

function normalizeText(text) {
  return (text || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function FilterProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [priceRange, setPriceRange] = useState(null);

  function getFilteredPlates(plates) {
    return plates.filter((plate) => {
      // Filtre recherche textuelle (nom, catégorie = tags[0], tous les tags)
      if (searchTerm.trim() !== "") {
        const search = normalizeText(searchTerm);
        const inName = normalizeText(plate.name).includes(search);
        const inCategory = normalizeText(plate.tags?.[0] || "").includes(
          search,
        );
        const inTags = plate.tags?.some((tag) =>
          normalizeText(tag).includes(search),
        );

        if (!inName && !inCategory && !inTags) {
          return false;
        }
      }

      // Filtre par catégorie (tags[0])
      if (selectedCategory !== null) {
        if (
          normalizeText(plate.tags?.[0] || "") !==
          normalizeText(selectedCategory)
        ) {
          return false;
        }
      }

      // Filtre par tag
      if (selectedTag !== null) {
        const hasTag = plate.tags?.some(
          (tag) => normalizeText(tag) === normalizeText(selectedTag),
        );
        if (!hasTag) {
          return false;
        }
      }

      // Filtre par prix maximum
      if (priceRange !== null) {
        if (plate.price > priceRange) {
          return false;
        }
      }

      return true;
    });
  }

  const value = {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedTag,
    setSelectedTag,
    priceRange,
    setPriceRange,
    getFilteredPlates,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}
