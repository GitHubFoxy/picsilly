import Link from "next/link";
import { cn } from "~/lib/utils";
import { Button } from "../../../ui/button";

interface Props {
  className?: string;
}

export default function NavigationInNavBar({ className }: Props) {
  return (
    <div
      className={cn("flex gap-2 w-full items-center justify-center", className)}
    >
      <Button className="">
        <Link href={"/docs"}>Документация</Link>
      </Button>
      <Button className="">
        <Link href={"/about"}>О нас</Link>
      </Button>
      <Button className="">
        <Link href={"/pricing"}>Цены</Link>
      </Button>
    </div>
  );
}
