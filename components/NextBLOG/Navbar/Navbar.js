"use client";
import Link from "next/link";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon, PlusIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navbar() {
  const { push } = useRouter();
  const [showSearch, setShowSearch] = useState(0);
  return (
    <header>
      <nav className="bg-slate-900">
        <div className="md:w-3/4 m-auto flex flex-row p-3 justify-between  items-center">
          <Link href="/" className="flex gap-3 items-center">
            <Logo />
            <p className="text-xl font-sans text-amber-200">NextBLOG</p>
          </Link>
          <div className="flex flex-row">
            <Button onClick={() => push("/nextblog/new")}>
              <PlusIcon />
              <span className="hidden md:block font-sans"> Create</span>
            </Button>
            <Button
              variant="ghost"
              className="font-sans"
              onClick={() => push("/nextblog/")}
            >
              All Posts
            </Button>
            <div className="flex flex-col items-end">
              <Button
                variant="ghost"
                onClick={() => setShowSearch(!showSearch)}
              >
                <MagnifyingGlassIcon />
              </Button>
              <SearchBar showSearch={showSearch} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
