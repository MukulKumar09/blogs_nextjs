"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
export default function SearchBar({ showSearch }) {
  const { push } = useRouter();
  const [search, setSearch] = useState();
  const [isSearch, setIsSearching] = useState();
  const [results, setResults] = useState([]);
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
    <div
      style={{ display: showSearch ? "block" : "none", width: 300 }}
      className="flex flex-row absolute top-16 z-10 bg-gray-800 rounded-lg"
    >
      <input
        type="text"
        className="input w-full"
        placeholder="Search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <div className="flex flex-row justify-between border-b-2 border-gray-700">
        <p className="p-3 text-sm">
          {isSearch ? `Searching... ` : `${results.length} items`}
        </p>
        {/* <button
            className="p-3 text-left text-sm hover:bg-slate-800"
            onClick={() => setShowResults(0)}
          >
            Close
          </button> */}
      </div>
      {results.length > 0 &&
        results.map((item, i) => (
          <button
            className="w-full p-3 text-left hover:bg-slate-900"
            onClick={() => {
              push(`/posts/${item._id}`);
            }}
            key={i}
          >
            <p>{item.title}</p>
          </button>
        ))}
    </div>
  );
}
