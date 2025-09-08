"use client";
import { useState } from "react";

import { FiEdit, FiX } from "react-icons/fi";

export function FavoriteCard() {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [gameName, setGameName] = useState("");

  function handleShowInput() {
    setShowInput(!showInput);

    if (input !== "") {
      setGameName(input);
    }

    setInput("");
  }

  return (
    <div className="w-full bg-zinc-900 dark:bg-zinc-400 p-4 h-44 rounded-lg flex flex-col justify-between text-white">
      {showInput ? (
        <div className="flex items-center justify-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-zinc-700 dark:bg-zinc-300 dark:text-black px-2 rounded-md outline-none"
          />
          <button
            onClick={handleShowInput}
            className="hover:scale-110 transition-all duration-300"
          >
            <FiX size={24} />
          </button>
        </div>
      ) : (
        <button
          onClick={handleShowInput}
          className="self-start hover:scale-110 transition-all duration-300"
        >
          <FiEdit size={24} />
        </button>
      )}

      {gameName ? (
        <div>
          <span className="text-white">Jogo Favorito:</span>
          <p className="font-bold text-white">{gameName}</p>
        </div>
      ) : (

      <p className="font-bold">Adicionar Jogo</p>
      )}

    </div>
  );
}
