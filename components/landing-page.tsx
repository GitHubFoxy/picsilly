"use client";

import { Button } from "~/components/ui/button";
import { ArrowRight, Cloud, Code, Zap, Shield } from "lucide-react";
import Link from "next/link";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col ">
      <header className="container mx-auto px-4 py-8 flex justify-between">
        <h1 className="text-4xl font-bold text-blue-400">picsilly.ru</h1>
        <div>
          <Link href={"/about"}>О нас</Link>
        </div>
        <div className="flex gap-2">
          <Button className="bg-blue-500 hover:bg-black/50">Регистрация</Button>
          <Button className="text-black bg-white hover:bg-black/50">
            Войти
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 flex-grow">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Храните ваши фотографии в России
          </h2>
          <p className="text-xl mb-8">
            Быстрый доступ, любой формат, современная платформа
          </p>
          <Link href={"/sign-up"}>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-full text-lg">
              Начать бесплатно
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <FeatureCard
            icon={<Cloud className="w-12 h-12 text-blue-400" />}
            title="Хранение в России"
            description="Храните ваши фотографии и картинки в любом формате с быстрым доступом"
          />
          <FeatureCard
            icon={<Code className="w-12 h-12 text-blue-400" />}
            title="API доступ"
            description="Интеграция для разработчиков и бизнеса"
          />
          <FeatureCard
            icon={<Zap className="w-12 h-12 text-blue-400" />}
            title="Низкий порог входа"
            description="Прекрасный бесплатный тариф для старта"
          />
          <FeatureCard
            icon={<Shield className="w-12 h-12 text-blue-400" />}
            title="Надежность"
            description="Современная платформа с uptime 99,999%"
          />
        </section>

        <section className="text-center">
          <h3 className="text-3xl font-bold mb-6">Готовы начать?</h3>
          <Link href={"/sign-up"} className="">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-full text-lg">
              Зарегистрироваться
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </section>
      </main>

      <footer className="bg-gray-800 ">
        <div className="container mx-auto px-4 py-4 text-center">
          <p>&copy; 2023 picsilly.ru. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
