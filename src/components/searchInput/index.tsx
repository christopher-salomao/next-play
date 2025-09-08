"use client";

import { useRouter } from "next/navigation";

import { FiSearch } from "react-icons/fi";

export function SearchInput() {
  const router = useRouter();

  function handleSearch(formData: FormData) {
    const input = formData.get("search");

    if (input === "") return;

    router.push(`/game/busca/${input}`);
  }

  return (
    <form
      action={handleSearch}
      className="w-full p-2 my-5 flex items-center justify-between gap-2 rounded-lg px-4 bg-slate-200 dark:bg-zinc-900 "
    >
      <input
        type="text"
        placeholder="Procurando por um jogo?"
        name="search"
        id="search"
        className="grow outline-none dark:text-white"
      />
      <button type="submit">
        <FiSearch size={24} color="#DC4240" />
      </button>
    </form>
  );
}
