import Image from "next/image";
import { ThemeSwitch } from "../themeSwitch";

export function Header() {
  return (
    <header className="w-full h-28 flex items-center justify-center bg-slate-100 dark:bg-slate-900 px-2">
      <div className="w-full max-w-7xl flex items-center justify-between">
        <div>
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            objectFit="contain"
          />
        </div>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
