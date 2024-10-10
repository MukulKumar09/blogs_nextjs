"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
export default function SearchBar() {
  const { push } = useRouter();
  const [search, setSearch] = useState();
  const [isSearch, setIsSearching] = useState();
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(0);
  useEffect(() => {
    if (search !== "") {
      setIsSearching(1);
      const handler = setTimeout(async () => {
        try {
          const res = await fetch(`/api/posts/search-posts/${search}`);
          const res_json = await res.json();
          setResults(res_json);
        } catch (error) {
          console.log(error);
        } finally {
          setIsSearching(0);
        }
      }, 1000);
      return () => {
        clearTimeout(handler);
      };
    }
  }, [search]);
  return (
    <>
      <input
        type="text"
        className="input"
        placeholder="Search"
        value={search}
        onFocus={() => setShowResults(1)}
        onChange={(event) => setSearch(event.target.value)}
      />
      <div
        style={{ display: showResults ? "block" : "none", width: 300 }}
        className="flex flex-row absolute top-20 end-64 bg-gray-600 rounded-lg"
      >
        <div className="flex flex-row justify-between">
          <p className="p-3 text-sm">
            {isSearch
              ? `Searching... `
              : `Search results (${results.length} items)`}
          </p>
          <button
            className="p-3 text-left text-sm underline"
            onClick={() => setShowResults(0)}
          >
            Close
          </button>
        </div>
        {results.map((item, i) => (
          <button
            className="w-full p-3 text-left underline"
            onClick={() => {
              push(`/posts/${item._id}`);
            }}
            key={i}
          >
            <p>{item.title}</p>
          </button>
        ))}
      </div>
    </>
  );
}
