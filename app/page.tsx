import { Play } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <div className="p-3 md:p-5 max-w-[1440px] mx-auto min-h-[100vh] flex gap-2.5 flex-col">
      <header className="flex items-center justify-between gap-2">
        <Link
          href="/"
          className="rounded bg-primary py-3 px-6 text-white font-medium hover:bg-primary/90 hover:cursor-pointer"
        >
          PicSilly
        </Link>
        <nav className="flex gap-4 items-center bg-primary w-full py-2 rounded text-primary-foreground justify-center">
          <Link
            href={"/docs"}
            className="hover:cursor-pointer hover:bg-primary-foreground transition-colors rounded hover:text-primary py-1 px-2"
          >
            Документация
          </Link>
          <Link
            href={"/about"}
            className="hover:cursor-pointer hover:bg-primary-foreground transition-colors rounded hover:text-primary py-1 px-2"
          >
            О нас
          </Link>
          <Link
            href={"/pricing"}
            className="hover:cursor-pointer hover:bg-primary-foreground transition-colors rounded hover:text-primary py-1 px-2"
          >
            Цены
          </Link>
        </nav>
        <div className="flex gap-2 items-center">
          <Button className="py-6 hover:bg-blue-700">Вход</Button>
          <Button className="py-6">Регистрация</Button>
        </div>
      </header>
      <main className="flex flex-col gap-2">
        {/* Beatiful background image that is optimized */}
        <section className="text-center md:min-h-[50vh] justify-center rounded bg-blue-900/50 text-primary-foreground flex flex-col gap-16 items-center">
          <div className="flex gap-2 flex-col">
            <h1 className="text-6xl">Welcome to PicSilly</h1>
            <h2 className="text-3xl">
              The best place to store and share your images
            </h2>
          </div>
          <div className="flex gap-4 items-center">
            <Button className="  py-6">Попробовать бесплатно</Button>
            <Button className="  py-6 flex gap-3">
              <Play />
              <div>
                <p className="text-sm font-bold">Смотреть демо</p>
                <p className="text-sm">Около минуты</p>
              </div>
            </Button>
          </div>
        </section>
        {/* See in action */}
        <section className="md:min-h-[50vh] bg-blue-900/50 rounded"></section>
      </main>
    </div>
  );
}
