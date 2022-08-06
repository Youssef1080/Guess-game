import React, { useState, useEffect } from "react";
import emojiList from "../emojies/emojiList.json";
import "./search.css";
import Results from "../results/Results";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (search) {
      setResults(
        emojiList
          .filter((emoji) => {
            return (
              emoji.keywords
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase()) ||
              emoji.title
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            );
          })
          .slice(0, 12)
      );
    } else {
      setResults([]);
    }
  }, [search]);

  console.log(results);

  return (
    <div className="section">
      <input
        className="search-bar"
        type="text"
        placeholder="Emoji Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {results.map((item, ind) => (
        <Results key={ind} results={item} />
      ))}
    </div>
  );
};

export default SearchBar;
