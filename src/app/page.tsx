import { twMerge } from 'tailwind-merge';

export default function Home() {
  return (
    <div
      className={twMerge(
        `
        flex
        flex-col
        items-center
        h-full
        bg-slate-700`
      )}
    >
      <p
        className={twMerge(
          `
          text-zinc-950
          dark:text-zinc-50
          font-bold
          mt-20
          text-4xl`
        )}
      >
        Hello world
      </p>
    </div>
  );
}
