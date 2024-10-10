"use client";
import Link from "next/link";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { push } = useRouter();
  return (
    <header>
      <nav className="bg-slate-900">
        <div className="w-3/4 m-auto flex flex-row p-3 justify-between">
          <Link href="/" className="flex gap-3 items-center ">
            <Logo />
            <p className="text-xl text-amber-200">NextBLOG</p>
          </Link>
          <div className="flex flex-row gap-5 align-middle">
            <button onClick={() => push("/posts")}>All Posts</button>
            <button className="btn-dark" onClick={() => push("/posts/new")}>
              + Create
            </button>
            <SearchBar />
          </div>
        </div>
      </nav>
    </header>
  );
}
