import Link from "next/link"
import Image from "next/image"
import { BsArrowRightCircle } from "react-icons/bs"

import type { GameProps } from "@/utils/types/game"

export function GameCard({ data }: { data: GameProps }) {
  return (
    <Link
      href={`/game/${data.id}`}
    >
      <section className="w-full bg-slate-200 dark:bg-zinc-900 rounded-lg p-4 m-5 hover:scale-105 transition-all duration-300">
        <div className="relative w-full h-56">
          <Image
            src={data.image_url}
            alt={data.title}
            fill
            quality={100}
            priority
            objectFit="cover"
            className="rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
          />
        </div>

        <div className="w-full flex items-center justify-between mt-4">
          <p className="font-bold text-sm pr-2 text-ellipsis truncate whitespace-nowrap overflow-hidden">{data.title}</p>
          <BsArrowRightCircle size={24} />
        </div>
      </section>
    </Link>
  );
}
