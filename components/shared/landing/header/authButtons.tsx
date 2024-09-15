import { cn } from "~/lib/utils";
import { Button } from "../../../ui/button";

interface Props {
  className?: string;
}

export default function AuthButtons({ className }: Props) {
  return (
    <div className={cn("flex gap-2", className)}>
      <Button className="text-md px-3 py-2 rounded bg-blue-700">Войти</Button>
      <Button className="text-md px-3 py-2 rounded">Регистрация</Button>
    </div>
  );
}
