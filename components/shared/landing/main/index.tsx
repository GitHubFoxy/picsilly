import { Cloud, Code, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import Pricing from "./pricing";

export default function Main() {
  return (
    <main className="w-full   text-white rounded py-2 flex flex-col gap-1">
      <div className="flex min-h-[720px] flex-col gap-6 justify-center items-center bg-primary">
        <h1 className="text-5xl text-center">
          Лучший сервис для ваших изображений
        </h1>
        <h2 className="text-3xl text-center">
          Храните ваши лучшие моменты в одном месте
        </h2>
        <Button className="text-lg bg-blue-700 hover:bg-zinc-700">
          <Link href={"/auth"}>Попробовать бесплатно</Link>
        </Button>
      </div>

      <div className="grid rounded py-2 grid-cols-2 gap-2 grid-rows-2">
        <div className="bg-primary rounded flex justify-center py-6 px-6 flex-col gap-2 ">
          <Cloud size={48} />
          <p className="text-xl">Надежное хранение в России, быстрый доступ</p>
        </div>
        <div className="bg-primary rounded flex justify-center py-6 px-6 flex-col gap-2 ">
          <Code size={48} />
          <p className="text-xl">Быстрый API, для разработчиков и бизнеса</p>
        </div>
        <div className="bg-primary rounded flex justify-center py-6 px-6 flex-col gap-2 ">
          <Zap size={48} />
          <p className="text-xl">Низкий порог входа, щедрый Free-tier</p>
        </div>
        <div className="bg-primary rounded flex justify-center py-6 px-6 flex-col gap-2 ">
          <Shield size={48} />
          <p className="text-xl">
            Современная безопасность и защита данных uptime 99,99%
          </p>
        </div>
      </div>
      <Pricing />
    </main>
  );
}
