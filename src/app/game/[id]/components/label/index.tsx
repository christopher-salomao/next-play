export function Label({ name }: { name: string }) {
  return (
    <span className="grow sm:grow-0 py-1 px-3 bg-slate-200 dark:bg-zinc-900 rounded-lg text-center hover:font-bold transition-all duration-300">
      {name}
    </span>
  );
}
