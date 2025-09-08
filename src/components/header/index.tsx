import Image from "next/image";
import Link from "next/link";
import { ThemeSwitch } from "../themeSwitch";
import { LiaGamepadSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";

export function Header() {
  return (
    <header className="w-full h-28 flex items-center justify-center bg-slate-100 dark:bg-zinc-900 px-2">
      <nav className="w-full max-w-screen-xl h-28 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo do Next Play"
            width={124}
            height={80}
            quality={100}
            priority
            className="object-contain"
          />
        </Link>
        <div className="flex items-center gap-4">
          <ThemeSwitch />
          <Link
            href="/"
            className="text-[#475569] dark:text-slate-200"
            title="Games"
          >
            <LiaGamepadSolid size={34} />
          </Link>
          <Link href="/perfil" className="text-[#475569] dark:text-slate-200">
            <CgProfile size={34} title="Perfil" />
          </Link>
        </div>

      </nav>
    </header>
  );
}
