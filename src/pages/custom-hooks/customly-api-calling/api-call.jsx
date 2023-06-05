import React, { useState, useEffect } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [timeoutId, setTimeoutId] = useState(null);

  async function performSearch(query) {
    try {
      const response = await fetch(
        `https://jobfair.psolution.in/api/apply-jobseeker?title=${query}`
      );
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error("Error performing search:", error);
    }
  }

  function handleSearch() {
    clearTimeout(timeoutId);

    setTimeoutId(
      setTimeout(() => {
        performSearch(query);
      }, 1000)
    );
    console.log("setTimeoutId", timeoutId);
  }

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    handleSearch();
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <ul>
        {/* {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))} */}
      </ul>
    </div>
  );
}
export default SearchBar;
